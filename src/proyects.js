import LiteraryCorner from './images/LiteraryCorner.png';
import YearSale from './images/captura_Yearsale.png';
import Homework from './images/captura_homework-list.png';
import BadBear from './images/captura_bear_bad_studio.png';
import Videogames from './images/PI_Henry.png';

export const meProyects = [
  {
    id: 1,
    title: 'Literary Corner',
    img: LiteraryCorner,
    alt: 'Literary_Corner',
    describe:
      'An e-commerce platform for books, created for online sales. It has a functional Frontend, Backend, and SQL implementation. We added payment methods including Mercado Pago and others.',
    demoUrl: '/',
    tags: ['React', 'Javascript', 'CSS', 'PostgreSQL', 'Express', 'API Rest'],
    githubUrl: 'https://github.com/lordbattle/PF-Henry-Bookstore',
  },
  {
    id: 2,
    title: 'Year Sale',
    img: YearSale,
    alt: 'Year_Sale',
    describe:
      'A scalable and functional foundation for a multi-page e-commerce site. It uses JavaScript to create dynamic main content and enhance user interaction.',
    demoUrl: '/',
    tags: ['HTML', 'Javascript', 'CSS'],
    githubUrl: 'https://github.com/diegohansselperez/yearsale.github.io',
  },
  {
    id: 3,
    title: 'Homework List',
    img: Homework,
    alt: 'Homework_list',
    describe:
      'Task management application (To-Do list) developed with HTML, CSS, and vanilla JavaScript. It implements dynamic DOM manipulation for the creation, editing, and deletion of tasks.',
    demoUrl: '/',
    tags: ['HTML', 'Javascript', 'CSS'],
    githubUrl: 'https://github.com/diegohansselperez/homework_list.github.io',
  },
  {
    id: 4,
    title: 'Bad Bear',
    img: BadBear,
    alt: 'Bad_Bear',
    describe:
      'A multi-page website template for a web design and development studio, with established sections to encourage interaction and attract potential clients (Conceptual/Mock-up).',
    demoUrl:
      'https://diegohansselperez.github.io/bearbadstudio.github.io/index.html',
    tags: ['HTML', 'Javascript', 'CSS'],
    githubUrl: 'https://github.com/diegohansselperez/bearbadstudio.github.io',
  },
  {
    id: 5,
    title: 'SuperGames',
    img: Videogames,
    alt: 'Videogames',
    describe:
      'A full-stack Single-Page Application, scalable to a multi-page format. It integrates the RAWG Video Games API and uses a database for storage.',
    demoUrl: '/',
    tags: [
      'React',
      'Redux',
      'Boostrap',
      'API Rest',
      'Node.js',
      'Express',
      'PostgreSQL',
    ],
    githubUrl: 'https://github.com/diegohansselperez/SuperGame',
  },
];
