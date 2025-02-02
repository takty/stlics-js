/**
 * The class that represents a constraint.
 *
 * @author Takuto Yanagida
 * @version 2025-01-24
 */

import { Element } from './element';
import { Variable } from './variable';

export abstract class Constraint extends Element {

	// Called only from Problem.
	static create(r: (...vs: number[]) => number, xs: Variable[]): Constraint {
		if (1 === xs.length) {
			return new Constraint1(r, xs[0]);
		}
		if (2 === xs.length) {
			return new Constraint2(r, xs[0], xs[1]);
		}
		if (3 === xs.length) {
			return new Constraint3(r, xs[0], xs[1], xs[2]);
		}
		return new ConstraintN(r, ...xs);
	}

	protected r : (...vs: number[]) => number;  // Relation
	protected es: Variable[] = [];

	protected constructor(r: (...vs: number[]) => number) {
		super();
		this.r = r;
	}

	/**
	 * Gets a string representation.
	 * @return A string representation.
	 */
	override toString(): string {
		const n : string = this.name();
		const np: string = n ? `(${n})` : '';
		const ev: number = this.degree();
		const sn: string = ev < 0 /* ev === UNDEFINED */ ? 'UNDEFINED' : ('' + ev);

		return `c${this.index()}${np} = ${sn}`;
	}

	/**
	 * Gets the order of the constraint, i.e., the number of (associated) variables in the scope.
	 * @return Order.
	 */
	size(): number {
		return this.es.length;
	}

	/**
	 * Gets the associated variable by specifying its index.
	 * @param index Index.
	 * @return A variable.
	 */
	at(index: number): Variable | undefined {
		return this.es.at(index);
	}

	/**
	 * Checks whether or not the specified variable is associated.
	 * @param x A variable.
	 * @return True if associated.
	 */
	has(x: Variable): boolean {
		return this.es.includes(x);
	}

	/**
	 * Gets the index of a specified variable.
	 * If not found, returns -1.
	 * @param x A variable.
	 * @return Index.
	 */
	indexOf(x: Variable): number {
		return this.es.indexOf(x);
	}

	/**
	 * Collects the constraints connected via the associated variables.
	 * @return An array of constraints.
	 */
	neighbors(): Constraint[] {
		const cs: Constraint[] = [];

		for (const x of this.es) {
			for (const c of x) {
				if (c !== this) {
					cs.push(c);
				}
			}
		}
		return cs;
	}

	/**
	 * Gets the iterator of the associated variables.
	 */
	[Symbol.iterator](): Iterator<Variable> {
		return this.es[Symbol.iterator]();
	}


	// ----


	/**
	 * Returns the relation between variables.
	 * @return Relation.
	 */
	relation(): (...vs: number[]) => number {
		return this.r;
	}

	/**
	 * Returns the number of scope variables that have not been assigned a value.
	 * @return Number of variables
	 */
	abstract emptySize(): number;

	/**
	 * Returns whether or not the satisfaction (degree) is defined.
	 * Satisfaction (degree) is defined when all associated variables have values assigned to them.
	 * @return True if it is defined.
	 */
	abstract isDefined(): boolean;

	/**
	 * Returns whether or not this constraint is satisfied.
	 * @return 1 if satisfied, 0 if not, UNDEFINED if undefined
	 */
	abstract status(): -1 | 0 | 1;

	/**
	 * Gets the current satisfaction degree.
	 * @return Degree 0 - 1, UNDEFINED if undefined.
	 */
	abstract degree(): number;

}


// -----------------------------------------------------------------------------


class Constraint1 extends Constraint {

	constructor(r: (v0: number) => number, x: Variable) {
		super(r);
		this.es = [x];
	}

	emptySize(): number {
		return this.es[0].isEmpty() ? 1 : 0;
	}

	isDefined(): boolean {
		return !this.es[0].isEmpty();
	}

	status(): -1 | 0 | 1 {
		if (this.es[0].isEmpty()) {
			return -1;  // UNDEFINED
		}
		return 1 === this.r(this.es[0].value()) ? 1 : 0;
	}

	degree(): number {
		if (this.es[0].isEmpty()) {
			return -1;  // UNDEFINED
		}
		return this.r(this.es[0].value());
	}

}


// -----------------------------------------------------------------------------


class Constraint2 extends Constraint {

	constructor(r: (v0: number, v1: number) => number, x1: Variable, x2: Variable) {
		super(r);
		this.es = [x1, x2];
	}

	emptySize(): number {
		let n: number = 0;
		if (this.es[0].isEmpty()) ++n;
		if (this.es[1].isEmpty()) ++n;
		return n;
	}

	isDefined(): boolean {
		return !this.es[0].isEmpty() && !this.es[1].isEmpty();
	}

	status(): -1 | 0 | 1 {
		if (this.es[0].isEmpty() || this.es[1].isEmpty()) {
			return -1;  // UNDEFINED
		}
		return 1 === this.r(this.es[0].value(), this.es[1].value()) ? 1 : 0;
	}

	degree(): number {
		if (this.es[0].isEmpty() || this.es[1].isEmpty()) {
			return -1;  // UNDEFINED
		}
		return this.r(this.es[0].value(), this.es[1].value());
	}

}


// -----------------------------------------------------------------------------


class Constraint3 extends Constraint {

	constructor(r: (v0: number, v1: number, v2: number) => number, x1: Variable, x2: Variable, x3: Variable) {
		super(r);
		this.es = [x1, x2, x3];
	}

	emptySize(): number {
		let n: number = 0;
		if (this.es[0].isEmpty()) ++n;
		if (this.es[1].isEmpty()) ++n;
		if (this.es[2].isEmpty()) ++n;
		return n;
	}

	isDefined(): boolean {
		return !this.es[0].isEmpty() && !this.es[1].isEmpty() && !this.es[2].isEmpty();
	}

	status(): -1 | 0 | 1 {
		if (this.es[0].isEmpty() || this.es[1].isEmpty() || this.es[2].isEmpty()) {
			return -1;  // UNDEFINED
		}
		return 1 === this.r(this.es[0].value(), this.es[1].value(), this.es[2].value()) ? 1 : 0;
	}

	degree(): number {
		if (this.es[0].isEmpty() || this.es[1].isEmpty() || this.es[2].isEmpty()) {
			return -1;  // UNDEFINED
		}
		return this.r(this.es[0].value(), this.es[1].value(), this.es[2].value());
	}

}


// -----------------------------------------------------------------------------


class ConstraintN extends Constraint {

	#vs: number[];  // For reuse.

	constructor(r: (...vs: number[]) => number, ...xs: Variable[]) {
		super(r);
		this.es = [...xs];
		this.#vs = new Array(this.es.length);
	}

	emptySize(): number {
		let n: number = 0;
		for (const x of this.es) {
			n += x.isEmpty() ? 1 : 0;
		}
		return n;
	}

	isDefined(): boolean {
		for (const x of this.es) {
			if (x.isEmpty()) {
				return false;
			}
		}
		return true;
	}

	status(): -1 | 0 | 1 {
		for (let i: number = 0; i < this.es.length; ++i) {
			const x: Variable = this.es[i];
			if (x.isEmpty()) {
				return -1;  // UNDEFINED
			}
			this.#vs[i] = x.value();
		}
		return 1 === this.r(...this.#vs) ? 1 : 0;
	}

	degree(): number {
		for (let i: number = 0; i < this.es.length; ++i) {
			const x: Variable = this.es[i];
			if (x.isEmpty()) {
				return -1;  // UNDEFINED
			}
			this.#vs[i] = x.value();
		}
		return this.r(...this.#vs);
	}

}
