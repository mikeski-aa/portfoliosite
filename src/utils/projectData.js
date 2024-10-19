import dmme from "../assets/project_cards/dmme.png";
import knight from "../assets/project_cards/knightmove.png";
import odinbook from "../assets/project_cards/odinbook.png";
import todo from "../assets/project_cards/todo.png";
import waldo from "../assets/project_cards/whereswaldo.png";
import portfolio from "../assets/project_cards/portfolio.png";

const projects = [
  {
    title: "Odinbook",
    desc: "Odinbook is a PERN stack social media webapp based on Facebook's design. Secure user login implemented using JWT, users are able to create new accounts, create text or picture posts, create comments and likes, manage friends, customise their profile. The application is designed to be responsive and fully functional on mobile and desktop devices.",
    projectLink: "https://odinbookproject.netlify.app/",
    feRepo: "https://github.com/mikeski-aa/social-media-frontend",
    beRepo: "https://github.com/mikeski-aa/social-media-backend",
    type: "Fullstack",
    smallPic: odinbook,
    isHosted: true,
    tech: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "Photoshop" },
    ],
  },
  {
    title: "Portfolio",
    desc: "Portfolio page is React application, designed to emulate the look and feel of VSCode. Users are able to drag and re-arrange tabs, close them and reopen them, open a bonus page, interact with the terminal.",
    projectLink: "https://mnowak.netlify.app",
    feRepo: "https://github.com/mikeski-aa/portfoliosite",
    type: "Frontend",
    smallPic: portfolio,
    isHosted: true,
    tech: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "Photoshop" },
    ],
  },
  {
    title: "Dm.me",
    desc: "Dm.me is a PERN stack messaging webapp. Secure login using JWT, users can add friends, create direct messages, create group messages to 3 or more friends, manage their friends and customise user profile (online status, profile picture, display name). The application is designed to be responsive and fully functional on mobile and desktop devices.",
    projectLink: "https://dmmeapp.netlify.app",
    feRepo: "https://github.com/mikeski-aa/messenger-frontend",
    beRepo: "https://github.com/mikeski-aa/messenger-backend",
    type: "Fullstack",
    smallPic: dmme,
    isHosted: true,
    tech: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "Photoshop" },
    ],
  },
  {
    title: "ToDo",
    desc: "ToDo is a React to-do webapp. Users are able to create and manage their individual to-do tasks, create specific to-do lists for tasks, move and re-assign tasks between lists and change their preferred data format (EU/US).",
    projectLink: "https://to-do-app-react-mikeski.netlify.app/",
    feRepo: "https://github.com/mikeski-aa/to-do-app-react",
    type: "Frontend",
    smallPic: todo,
    isHosted: true,
    tech: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "CSS" },
      { name: "HTML" },
    ],
  },
  {
    title: "Knight Travel",
    desc: "Knight travel is a React project where a user can select the starting and end location for the knight on the chessboard by either drag and drop or clicking the chessboard. The shortest path betwen two coordinates is displayed and possible paths are animated. Original project was a pure node application, rewritten to in React.",
    projectLink: "https://knight-move-react.netlify.app/",
    feRepo: "https://github.com/mikeski-aa/knight-travel",
    type: "Frontend",
    smallPic: knight,
    isHosted: true,
    tech: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "CSS" },
      { name: "HTML" },
    ],
  },

  // {
  //   title: "Where's Waldo - game",
  //   desc: "Fullstack game project, React frontend on Node backend. Users must identify specific characters on an image by clicking on the image. User time taken to find characters is taken and stored in Postgres database for the leaderboards. ",
  //   projectLink: "https://wheres-waldo-fe-game.netlify.app",
  //   feRepo: "https://github.com/mikeski-aa/wheres-waldo-frontend",
  //   beRepo: "https://github.com/mikeski-aa/wheres-waldo-api",
  //   type: "Fullstack",
  //   isHosted: true,
  // },
  // {
  //   title: "Wiki parser - webapp",
  //   desc: "Node and Express project using MongoDB for storage. The program was written to parse a game wiki, gathering specific vehicle information and storing it in the database. Parsing static content was achieved using Cheerio, and for dynamic content I've used Puppeteer. Although the entire project is not hosted, the parsing component of the project still works.",
  //   projectLink: "https://www.google.com",
  //   repoLink: "https://github.com/mikeski-aa/wiki-parser-project",
  //   type: "Backend",
  //   isHosted: false,
  // },
  // {
  //   title: "File sharing - webapp",
  //   desc: "Node and Express project, using Server Side Rendering with Pug. The goal of this project was to gain more practice with express while building a semi-realistic application. The application allows users to upload images which can be shared between users. ",
  //   repoLink: "https://github.com/mikeski-aa/file-sharing",
  //   type: "Backend",
  //   isHosted: false,
  // },
];

export default projects;
