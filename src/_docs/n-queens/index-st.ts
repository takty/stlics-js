import { CrispProblem }  from '../../../stlics.ts';
import { Solver } from '../../../stlics.ts';
import { SolverFactory } from '../../../stlics.ts';
import { N_queens }      from '../../_model/n-queens';

import { createLogOutput } from '../util';

const COUNT       = 1;   // Interaction count
const QUEEN_NUM   = 20;  // Number of queens
const SOLVER_TYPE = 4;

document.addEventListener('DOMContentLoaded', async () => {
	const log = createLogOutput();
	const sn  = SolverFactory.crispSolverNames()[SOLVER_TYPE];

	let sum_time = 0;
	let sum_rate = 0;

	for (let i = 0; i < COUNT; ++i) {
		const nq = new N_queens(QUEEN_NUM);
		const p  = nq.createProblem(new CrispProblem());
		const t  = Date.now();  // Start time measurement

		const s = await SolverFactory.createSolver(sn, p) as Solver;
		// s.setTargetRate(null);
		s.setTimeLimit(10000);
		s.setDebugOutput(log);
		const result = s.solve();

		const time = Date.now() - t;  // Stop time measurement
		const rate = (p as CrispProblem).satisfiedConstraintRate();
		log(`solver: ${s.name()}   ${result ? 'success' : 'failure'}`);
		log(`trial: ${i + 1}   time: ${time}   rate: ${rate}`);
		nq.setDebugOutput(log);
		nq.printResult(p);
		sum_time += time;
		sum_rate += rate;
	}
	log(`average time: ${sum_time / COUNT}   average rate: ${sum_rate / COUNT}`);
});
