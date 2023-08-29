export type Org = {
	name: string;
	url: string;
	description: string;
	img: string;
	benchmark: Benchmark;
};

export type Benchmark = {
	age: number; // 0-1, <30 gets 1
	mobility: number; // 1-5
	location: number; // suburban = 0, urban = 3, rural = 1
	involvement: number; // 1-5
};

export const orgs: Org[] = [
	{
		name: 'Pacific Beach Coalition',
		url: 'https://www.pacificbeachcoalition.org/take-action/monthly-adopt-a-beach-cleanups/',
		description: 'Volunteer for bi-monthly beach cleanups',
		benchmark: {
			age: 0,
			mobility: 4,
			location: 3,
			involvement: 5
		},
		img: 'https://www.pacificbeachcoalition.org/wp-content/uploads/2021/09/IMG_4226.jpg'
	},
	{
		name: 'Bay Area Youth Climate Summit',
		url: 'https://www.baycs.org/',
		description: 'Attend the Bay Area Youth Climate Summit',
		benchmark: {
			age: 1,
			mobility: 4,
			location: 3,
			involvement: 2
		},
		img: 'https://static.wixstatic.com/media/363e0e_f0276d80e5b744d59feb5a210a2cc32b~mv2.jpg/v1/crop/x_0,y_315,w_3000,h_1166/fill/w_1105,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/B3A3940D-143B-4A43-8D67-589EB329A313_edited.jpg'
	},
	{
		name: 'Friends of the Urban Forest',
		url: 'https://www.friendsoftheurbanforest.org/',
		description: 'Volunteer to plant trees in San Francisco',
		benchmark: {
			age: 0,
			mobility: 3,
			location: 3,
			involvement: 3
		},
		img: 'https://static.wixstatic.com/media/981273_6958f2ea037549af84d64680d70cb61f~mv2.jpg/v1/fit/w_2500,h_1330,al_c/981273_6958f2ea037549af84d64680d70cb61f~mv2.jpg'
	},
	{
		name: '350 Bay Area',
		url: 'https://350bayarea.org/volunteer',
		description: 'Help organize climate action in the Bay Area',
		benchmark: {
			age: 1,
			mobility: 2,
			location: 3,
			involvement: 4
		},
		img: 'https://350bayarea.org/wp-content/uploads/2022/09/Picnic2021.jpg'
	},
	{
		name: "Citizens' Climate Lobby",
		url: 'https://citizensclimatelobby.org/',
		description: 'Volunteer to lobby for climate action',
		benchmark: {
			age: 0,
			mobility: 1,
			location: 3,
			involvement: 4
		},
		img: 'https://350bayarea.org/wp-content/uploads/2022/09/Picnic2021.jpg'
	}
];

type Question = {
	question: string;
	details?: string;
	answers: string[];
	transform: (answer: number) => number;
	benchmarkKey: keyof Benchmark;
};

export const questions: Question[] = [
	{
		question: 'How old are you?',
		answers: ['Under 30', '30-50', '50-70', '70+'],
		transform: (answer) => {
			if (answer === 0) return 1;
			return 0;
		},
		benchmarkKey: 'age'
	},
	{
		question: 'How mobile are you?',
		answers: ['Not mobile', 'Somewhat mobile', 'Mobile', 'Very mobile', 'Extremely mobile'],
		transform: (answer) => {
			return answer;
		},
		benchmarkKey: 'mobility'
	},
	{
		question: 'Where do you live?',
		answers: ['Suburban', 'Urban', 'Rural'],
		transform: (answer) => {
			if (answer === 0) return 0;
			if (answer === 1) return 3;
			return 1;
		},
		benchmarkKey: 'location'
	},
	{
		question: 'How involved do you want to be?',
		answers: [
			'Not involved',
			'Somewhat involved',
			'Involved',
			'Very involved',
			'Extremely involved'
		],
		transform: (answer) => {
			return answer;
		},
		benchmarkKey: 'involvement'
	}
];

export function benchmarkDifference(benchmark: Benchmark, user: Benchmark) {
	let score = 0;
	for (const key of Object.keys(benchmark) as (keyof Benchmark)[]) {
		score += Math.abs(benchmark[key] - user[key]);
	}
	return score;
}
