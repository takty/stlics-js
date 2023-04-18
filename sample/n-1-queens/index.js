import { SolverFactory } from '../../src/solver/solver-factory.js';
import { waitFor, createLogOutput } from '../util.js';

const COUNT       = 1;  // Interaction count
const SOLVER_TYPE = 4;
const TARGET_RATE = 0.8;
const QUEEN_NUM   = 20;

document.addEventListener('DOMContentLoaded', async () => {
	const solTypeSel = document.getElementById('solver-type');
	SolverFactory.fuzzySolverNames().forEach((sn, i) => {
		const o = document.createElement('option');
		o.textContent = sn;
		o.value       = i;
		solTypeSel.appendChild(o);
	});
	solTypeSel.value = SOLVER_TYPE;
	const targetRate = document.getElementById('target-rate');
	targetRate.value = TARGET_RATE;

	const queenNum = document.getElementById('queen-num');
	queenNum.value = QUEEN_NUM;

	const output = document.getElementById('output');
	const log    = createLogOutput();

	let worker = null;

	const solStartBtn = document.getElementById('solver-start');
	const solStopBtn  = document.getElementById('solver-stop');
	solStartBtn.addEventListener('click', () => {
		solStartBtn.disabled = true;
		solStopBtn.disabled  = false;
		output.value = '';
		worker = initialize(() => solStopBtn.click());
		start(worker, parseInt(solTypeSel.value), parseFloat(targetRate.value), parseInt(queenNum.value));
	});
	solStopBtn.addEventListener('click', () => {
		solStartBtn.disabled = false;
		solStopBtn.disabled  = true;
		worker.terminate();
	});


	// -------------------------------------------------------------------------


	let count = 0;

	function initialize(onFinish) {
		let sumTime = 0;
		let sumDeg  = 0;

		const ww = new Worker(new URL('worker.js', import.meta.url), { type: 'module' });
		ww.onmessage = e => {
			const { data } = e;
			if ('log' in data) {
				log(data.log);
			} else if ('result' in data) {
				const { result, solver, time, deg } = data;
				sumTime += time;
				sumDeg  += deg;
				count   += 1;

				log(`solver: ${solver}   ${result ? 'success' : 'failure'}`);
				log(`trial: ${count}   time: ${time}   degree: ${deg}`);

				if (COUNT <= count) {
					log(`average time: ${sumTime / COUNT}   average rate: ${sumDeg / COUNT}`);
					onFinish();
				}
			}
		};
		return ww;
	}

	async function start(ww, solverType, targetRate, queenNum) {
		for (let i = 0; i < COUNT; ++i) {
			const now = count;
			ww.postMessage({ task: 'create', args: [queenNum] });
			ww.postMessage({ task: 'solve', args: [solverType, targetRate] });
			await waitFor(() => (count !== now));
		}
	}
});
