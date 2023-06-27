export const heroOne = {
	id: 'about',
	inverse: true,
	bigImage: true,
	topLine: {
		text: '',
		extraText: '',
	},
	headline: 'About Us',
	description:
		'We are LowKey! This is our description for the Group!',
	// buttonLabel: 'Sign Up Now',
	imgStart: 'start',
	img: './images/art2.jpg',
	// bottomImg: './images/recording.svg',
	start: 'true',
};

export const heroTwo = {
	id: 'gigs',

	reverse: true,

	lightBg: false,
	topLine: {
		text: 'Gigs',
		extraText: '',
	},
	headline: 'Come watch us at our future events: ',
	description:
		'INSERT GIGS HERE',
	// buttonLabel: 'Learn More',
	// linkTo: '/more',
	imgStart: '',
	img: './images/hero.jpg',
	bottomImg: '',
	alt: 'Vault',
	start: 'true',
};

export const heroThree = {
	id: 'contact us',

	bigImage: true,
	smallSection: true,
	inverse: true,
	topLine: {
		text: 'Contact Us',
		extraText: '',
	},
	headline: 'Contact Us',
	description:
		'Want to blah blah blah',
	// buttonLabel: 'Download',
	// linkTo: '/download',
	imgStart: '',
	img: './images/music.png',
	bottomImg: '',
	alt: 'Vault',
	start: 'true',
};

export const pricingData = [
	{
		title: 'Individual',
		price: '$14.99/month after offer period',
		numAcc: '1 account',
		features: ['Listen to music ad-free', 'Play anywhere - even offline', 'On-demand playback'],
	},
	{
		title: 'Duo',
		price: '$18.99/month after offer period',
		numAcc: '2 accounts',
		features: [
			'2 Premium accounts for a couple under one roof',
			'Duo Mix: a playlist for two, regularly updated with music you both enjoy',
			'Ad-free music listening, play offline, on-demand playback',
		],
	},
	{
		title: 'Family',
		price: '$22.50/month after offer period',
		numAcc: 'Up to 6 accounts',
		features: [
			'6 Premium accounts for family members living under one roof',
			'Family Mix: a playlist for your family, regularly updated with music you all enjoy',
			'Block explicit music',
			'IMusic Kids: a separate app made just for kids',
			'Ad-free music listening, play offline, on-demand playback',
		],
	},

	{
		title: 'Student',
		price: '$7.49/month after offer period',
		numAcc: '1 account',
		features: [
			'Special discount for eligible students in university',
			'Listen to music ad-free',
			'Play anywhere - even offline',
			'On-demand playback',
		],
	},
];
