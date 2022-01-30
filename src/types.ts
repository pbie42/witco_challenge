export interface PokeRes {
	name: string;
	url: string;
}

export interface TypeRes {
	slot: number;
	type: {
		name: string;
		url: string;
	};
}

export interface StatRes {
	base_stat: number;
	stat: {
		name: string;
	};
}

export interface Pokemon {
	id: number;
	name: string;
	url: string;
	imgUrl: string;
	types: Array<{
		slot: number;
		name: string;
	}>;
	stats: Array<{
		stat: number;
		name: string;
	}>;
}

export interface Layout {
	height: number;
	width: number;
}
