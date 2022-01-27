export interface Pokedex {
	start: number;
	end: number;
}

export class Generation {
	static readonly ALL = new Generation('All', { start: 0, end: 901 });
	static readonly I = new Generation('I', { start: 0, end: 151 });
	static readonly II = new Generation('II', { start: 151, end: 251 });
	static readonly III = new Generation('III', { start: 251, end: 386 });
	static readonly IV = new Generation('IV', { start: 386, end: 493 });
	static readonly V = new Generation('V', { start: 494, end: 649 });
	static readonly VI = new Generation('VI', { start: 649, end: 721 });
	static readonly VII = new Generation('VII', { start: 721, end: 809 });
	static readonly VIII = new Generation('VIII', { start: 809, end: 901 });

	private constructor(
		private readonly key: string,
		public readonly pokedex: Pokedex
	) {}

	toString() {
		return this.key;
	}
}
