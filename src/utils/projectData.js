const projects = [
  {
    title: "Portfolio - webapp",
    desc: "Pure frontend-focused React project. My goal with this project was to emulate the look and feel of my preferred text editor - VSCode. I wanted to re-create the look and feel of VSCode without using any additional external packages or libraries, hence everything was written from the ground up.",
    projectLink: "https://mnowak.netlify.app",
    repoLink: "https://github.com/mikeski-aa/portfoliosite",
    type: "Frontend",
    isHosted: true,
  },
  {
    title: "Dm.me - webapp",
    desc: "Fullstack project, React frontend built on Node & Express backend. This application handles registeration, loggin in, friend list management and direct messaging as well as group messages.",
    projectLink: "https://dmmeapp.netlify.app",
    feRepo: "https://github.com/mikeski-aa/messenger-frontend",
    beRepo: "https://github.com/mikeski-aa/messenger-backend",
    type: "Fullstack",
    isHosted: true,
  },
  {
    title: "ToDo - webapp",
    desc: "Pure frontend project. Users are able to create and manage To Dos, create custom lists, change date formatting.",
    projectLink: "https://to-do-app-react-mikeski.netlify.app/",
    repoLink: "https://github.com/mikeski-aa/to-do-app-react",
    type: "Frontend",
    isHosted: true,
  },
  {
    title: "Knight Travel - recursion",
    desc: "Pure Node project. The program will calculate the shortest possible move from a starting point on a chessboard to the final coordinates determined by the user, displaying the optimal shortest path and number of interations taken to get there using recursion and breadth-first approach.",
    projectLink: "https://www.google.com",
    repoLink: "https://github.com/mikeski-aa/knight-travel",
    type: "Backend",
    isHosted: false,
  },
  {
    title: "Where's Waldo - game",
    desc: "Fullstack game project, React frontend on Node backend. Users must identify specific characters on an image by clicking on the image. User time taken to find characters is taken and stored in Postgres database for the leaderboards.",
    projectLink: "https://wheres-waldo-fe-game.netlify.app",
    feRepo: "https://github.com/mikeski-aa/wheres-waldo-frontend",
    beRepo: "https://github.com/mikeski-aa/wheres-waldo-api",
    type: "Fullstack",
    isHosted: true,
  },
  {
    title: "Wiki parser - webapp",
    desc: "Node and Express project using MongoDB for storage. The program was written to parse a game wiki, gathering specific vehicle information and storing it in the database. Parsing static content was achieved using Cheerio, and for dynamic content I've used Puppeteer. Although the entire project is not hosted, the parsing component of the project still works.",
    projectLink: "https://www.google.com",
    repoLink: "https://github.com/mikeski-aa/wiki-parser-project",
    type: "Backend",
    isHosted: false,
  },
  {
    title: "File sharing - webapp",
    desc: "Node and Express project, using Server Side Rendering with Pug. The goal of this project was to gain more practice with express while building a semi-realistic application. The application allows users to upload images which can be shared between users. ",
    repoLink: "https://github.com/mikeski-aa/file-sharing",
    type: "Backend",
    isHosted: false,
  },
];

export default projects;
