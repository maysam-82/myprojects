const techList = {
	REACT: { techId: '101', name: 'React' },
	TYPESCRIPT: { techId: '102', name: 'Typescript' },
	REDUX: { techId: '103', name: 'redux' },
	REDUX_THUNK: { techId: '104', name: 'redux-thunk' },
	REACT_BOOTSTRAP: { techId: '105', name: 'react-bootstrap' },
	REACT_HOOKS: { techId: '106', name: 'React/Hooks' },
	SEMANTIC_UI: { techId: '107', name: 'semantic-ui' },
	REACT_ROUTER: { techId: '108', name: 'react-router-dom' },
	REACT_STORY_BOOK: { techId: '109', name: 'storybook' },
};

const testLibraryList = {
	JEST: { testId: '201', testLibraryName: 'jest' },
	ENZYME: { testId: '202', testLibraryName: 'enzyme' },
	REACT_TEST_RENDERER: { testId: '203', testLibraryName: 'react-test-renderer' },
};
export const projects = [
	{
		id: 1,
		title: 'Jeopardy',
		description: 'Built Jeopardy game app.',
		url: 'https://maysam-jeopardy.netlify.app',
		technologies: [
			techList.REACT,
			techList.TYPESCRIPT,
			techList.REDUX,
			techList.REDUX_THUNK,
			techList.REACT_ROUTER,
			techList.REACT_BOOTSTRAP,
		],
		testingLibraries: [testLibraryList.JEST, testLibraryList.ENZYME],
	},
	{
		id: 2,
		title: 'Widgets',
		description: 'Reusable widgets',
		url: 'https://maysam-widgets.netlify.app/',
		technologies: [techList.REACT_HOOKS, techList.SEMANTIC_UI],
		testingLibraries: [testLibraryList.JEST, testLibraryList.ENZYME],
	},
	{
		id: 3,
		title: 'FlashCard',
		description: 'Flash Card application',
		url: 'https://maysam-flashcard.netlify.app',
		technologies: [
			techList.REACT,
			techList.TYPESCRIPT,
			techList.REDUX,
			techList.REACT_ROUTER,
			techList.REACT_BOOTSTRAP,
		],
		testingLibraries: [testLibraryList.JEST, testLibraryList.ENZYME],
	},
	{
		id: 4,
		title: 'Storybook',
		description: 'Built reusable components with react storybook',
		url: 'https://maysam-react-storybook.netlify.app/',
		technologies: [techList.REACT, techList.REACT_STORY_BOOK],
	},
];
