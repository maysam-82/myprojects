import flashCardImage from '../assets/img/projects-image/flashcard.png';
import jeopardyImage from '../assets/img/projects-image/jeopardy.png';
import storyBookImage from '../assets/img/projects-image/storybook.png';
import widgetImage from '../assets/img/projects-image/widget.png';
import noteToSelfImage from '../assets/img/projects-image/note-to-self.png';
import eCommerceImage from '../assets/img/projects-image/e-commerce.png';

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
	SASS_MODULE: { techId: '110', name: 'sass module' },
	GOOGLE_FIREBASE: { techId: '111', name: 'google firebase' },
	REDUX_PERSIST: { techId: '112', name: 'redux-persist' },
	RESELECT: { techId: '112', name: 'reselect' },
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
		imageUrl: jeopardyImage,
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
		imageUrl: widgetImage,
		url: 'https://maysam-widgets.netlify.app',
		technologies: [techList.REACT_HOOKS, techList.SEMANTIC_UI],
		testingLibraries: [testLibraryList.JEST, testLibraryList.ENZYME],
	},
	{
		id: 3,
		title: 'FlashCard',
		description: 'Flash Card application',
		imageUrl: flashCardImage,
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
		imageUrl: storyBookImage,
		url: 'https://maysam-react-storybook.netlify.app',
		technologies: [techList.REACT, techList.REACT_STORY_BOOK],
	},
	{
		id: 5,
		title: 'E-commerce (Code)',
		description: 'An e-commerce project',
		imageUrl: eCommerceImage,
		url: 'https://github.com/maysam-82/sample-e-commerce-project',
		technologies: [
			techList.REACT,
			techList.REDUX,
			techList.REDUX_THUNK,
			techList.REDUX_PERSIST,
			techList.RESELECT,
			techList.REACT_ROUTER,
			techList.SASS_MODULE,
			techList.GOOGLE_FIREBASE,
		],
	},
	{
		id: 6,
		title: 'Note To Self',
		description: 'Note To Self project',
		imageUrl: noteToSelfImage,
		url: 'https://maysam-note-to-self.netlify.app/',
		technologies: [techList.REACT, techList.TYPESCRIPT, techList.REACT_BOOTSTRAP],
		testingLibraries: [testLibraryList.JEST, testLibraryList.ENZYME],
	},
];
