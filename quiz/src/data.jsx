const mathQuestions = [
  {
    title: "Quiz for Math People",
    question: "What is the value of Pi (π) to two decimal places?",
    answers: ["3.14", "3.16", "3.12", "3.18"],
    correctAnswer: "3.14",
    id: 1,
  },
  { 
    question: "What is the square root of 144?",
    answers: ["10", "12", "14", "16"],
    correctAnswer: "12",
    id: 2,
  },
  {
    question:
      "What is the area of a circle with radius 5 units (rounded to the nearest integer)?",
    answers: ["31", "78", "50", "25"],
    correctAnswer: "78",
    id: 3,
  },
  {
    question: "What is the value of the constant 'e' (Euler's number)?",
    answers: ["2.71", "3.14", "1.61", "1.41"],
    correctAnswer: "2.71",
    id: 4,
  },
  {
    question: "What is the sum of the angles in a quadrilateral?",
    answers: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
    correctAnswer: "360 degrees",
    id: 5,
  },
  {
    question: "What is the value of sin(90 degrees)?",
    answers: ["0", "1", "-1", "Undefined"],
    correctAnswer: "1",
    id: 6,
  },
  {
    question:
      "What is the perimeter of a rectangle with length 10 units and width 5 units?",
    answers: ["20 units", "25 units", "30 units", "50 units"],
    correctAnswer: "30 units",
    id: 7,
  },
  {
    question: "What is the value of log(1)?",
    answers: ["0", "1", "Undefined", "Infinity"],
    correctAnswer: "0",
    id: 8,
  },
  {
    question: "What is the volume of a cube with side length 3 units?",
    answers: [
      "6 cubic units",
      "9 cubic units",
      "12 cubic units",
      "27 cubic units",
    ],
    correctAnswer: "27 cubic units",
    id: 9,
  },
  {
    question: "What is the value of 2^5?",
    answers: ["10", "25", "32", "64"],
    correctAnswer: "32",
    id: 10,
  },
  {
    question:
      "What is the surface area of a sphere with radius 4 units (rounded to the nearest integer)?",
    answers: [
      "50 square units",
      "100 square units",
      "150 square units",
      "200 square units",
    ],
    correctAnswer: "201 square units",
    id: 11,
  },
  {
    question: "What is the value of tan(45 degrees)?",
    answers: ["0", "1", "Undefined", "Infinity"],
    correctAnswer: "1",
    id: 12,
  },
  {
    question: "What is the value of 3! (factorial)?",
    answers: ["3", "6", "9", "12"],
    correctAnswer: "6",
    id: 13,
  },
  {
    question:
      "What is the length of the hypotenuse of a right triangle with legs of length 3 and 4 units?",
    answers: ["5 units", "6 units", "7 units", "8 units"],
    correctAnswer: "5 units",
    id: 14,
  },
  {
    question: "What is the value of log(10)?",
    answers: ["0", "1", "Undefined", "Infinity"],
    correctAnswer: "1",
    id: 15,
  },
  {
    question: "What is the value of 1/2 + 1/3?",
    answers: ["1/5", "1/3", "2/5", "5/6"],
    correctAnswer: "5/6",
    id: 16,
  },
  {
    question: "What is the value of cos(0 degrees)?",
    answers: ["0", "1", "-1", "Undefined"],
    correctAnswer: "1",
    id: 17,
  },
  {
    question: "What is the value of log(100)?",
    answers: ["0", "1", "2", "Undefined"],
    correctAnswer: "2",
    id: 18,
  },
  {
    question:
      "What is the area of a triangle with base 6 units and height 8 units?",
    answers: [
      "12 square units",
      "24 square units",
      "30 square units",
      "48 square units",
    ],
    correctAnswer: "24 square units",
    id: 19,
  },
  {
    question: "What is the value of 10% of 200?",
    answers: ["20", "10", "2000", "2"],
    correctAnswer: "20",
    id: 20,
  },
];

const programmerQuestions = [
  {
    title: "Quiz for Programmers",
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlink Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
    id: 1,
  },
  {
    question:
      "Which programming language is often used for building Android apps?",
    answers: ["Java", "Python", "C++", "JavaScript"],
    correctAnswer: "Java",
    id: 2,
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    answers: ["22", "4", "TypeError", "NaN"],
    correctAnswer: "22",
    id: 3,
  },
  {
    question:
      "What symbol is used in JavaScript to access an object's properties?",
    answers: [".", ":", "$", "/"],
    correctAnswer: ".",
    id: 4,
  },
  {
    question: "Which of the following is a valid variable name in JavaScript?",
    answers: ["2variable", "_variable", "variable-name", "variable name"],
    correctAnswer: "_variable",
    id: 5,
  },
  {
    question: "What is the purpose of the 'git clone' command?",
    answers: [
      "To clone a repository",
      "To create a new branch",
      "To merge branches",
      "To delete a branch",
    ],
    correctAnswer: "To clone a repository",
    id: 6,
  },
  {
    question: "Which data structure uses First-In-First-Out (FIFO) order?",
    answers: ["Stack", "Queue", "Heap", "Tree"],
    correctAnswer: "Queue",
    id: 7,
  },
  {
    question: "What is the purpose of the 'npm install' command in Node.js?",
    answers: [
      "To install dependencies",
      "To run tests",
      "To deploy the application",
      "To create a new project",
    ],
    correctAnswer: "To install dependencies",
    id: 8,
  },
  {
    question:
      "What is the output of the following code snippet: console.log(typeof([]));",
    answers: ["object", "array", "undefined", "string"],
    correctAnswer: "object",
    id: 9,
  },
  {
    question: "Which of the following is NOT a JavaScript framework?",
    answers: ["React", "Vue", "Django", "Angular"],
    correctAnswer: "Django",
    id: 10,
  },
  {
    question: "What does SQL stand for?",
    answers: [
      "Structured Query Language",
      "Sequential Query Language",
      "Standardized Query Language",
      "Structured Question Language",
    ],
    correctAnswer: "Structured Query Language",
    id: 11,
  },
  {
    question: "What is the purpose of CSS media queries?",
    answers: [
      "To apply different styles based on device characteristics",
      "To query databases",
      "To calculate mathematical equations",
      "To define variables",
    ],
    correctAnswer: "To apply different styles based on device characteristics",
    id: 12,
  },
  {
    question: "What does the acronym API stand for?",
    answers: [
      "Application Programming Interface",
      "Automated Programming Interface",
      "Application Process Integration",
      "Automated Process Interface",
    ],
    correctAnswer: "Application Programming Interface",
    id: 13,
  },
  {
    question: "What is the purpose of the 'break' statement in a loop?",
    answers: [
      "To exit the loop",
      "To skip the current iteration and continue with the next",
      "To restart the loop from the beginning",
      "To pause the loop temporarily",
    ],
    correctAnswer: "To exit the loop",
    id: 14,
  },
  {
    question:
      "Which programming language is commonly used for server-side scripting?",
    answers: ["JavaScript", "HTML", "Python", "PHP"],
    correctAnswer: "PHP",
    id: 15,
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    answers: [
      "The current function",
      "The global object",
      "The parent object",
      "The object that is calling the function",
    ],
    correctAnswer: "The object that is calling the function",
    id: 16,
  },
  {
    question: "What is the purpose of the 'await' keyword in JavaScript?",
    answers: [
      "To pause execution until a promise is settled",
      "To define a variable",
      "To import modules",
      "To declare a function",
    ],
    correctAnswer: "To pause execution until a promise is settled",
    id: 17,
  },
  {
    question: "Which of the following is NOT a valid JavaScript data type?",
    answers: ["number", "boolean", "object", "character"],
    correctAnswer: "character",
    id: 18,
  },
  {
    question:
      "What is the result of the expression 'true && false' in JavaScript?",
    answers: ["true", "false", "null", "undefined"],
    correctAnswer: "false",
    id: 19,
  },
  {
    question: "What does the acronym JSON stand for?",
    answers: [
      "JavaScript Object Notation",
      "JavaScript Ordered Notation",
      "JavaScript Object Naming",
      "JavaScript Object Networking",
    ],
    correctAnswer: "JavaScript Object Notation",
    id: 20,
  },
];

const gamerQuestions = [
  {
    title: "Quiz for Gamers",
    question: "Which video game franchise features a character named Mario?",
    answers: [
      "Sonic the Hedgehog",
      "Super Mario",
      "Legend of Zelda",
      "Final Fantasy",
    ],
    correctAnswer: "Super Mario",
    id: 1,
  },
  {
    question: "In which game would you find the character 'Master Chief'?",
    answers: ["Halo", "Call of Duty", "Assassin's Creed", "Minecraft"],
    correctAnswer: "Halo",
    id: 2,
  },
  {
    question: "What is the main objective in the game Minecraft?",
    answers: [
      "Survive and thrive",
      "Complete quests",
      "Defeat the final boss",
      "Build the tallest tower",
    ],
    correctAnswer: "Survive and thrive",
    id: 3,
  },
  {
    question:
      "Which game series is known for its 'Gotta Catch 'Em All' slogan?",
    answers: ["Final Fantasy", "Pokémon", "Call of Duty", "Grand Theft Auto"],
    correctAnswer: "Pokémon",
    id: 4,
  },
  {
    question: "What is the name of the princess that Mario typically rescues?",
    answers: ["Daisy", "Peach", "Zelda", "Pauline"],
    correctAnswer: "Peach",
    id: 5,
  },
  {
    question: "Which gaming console was developed by Sony?",
    answers: ["Xbox", "Nintendo Switch", "PlayStation", "Sega Genesis"],
    correctAnswer: "PlayStation",
    id: 6,
  },
  {
    question: "Which game features the 'Vault Boy' mascot?",
    answers: ["Fallout", "Gears of War", "The Elder Scrolls", "BioShock"],
    correctAnswer: "Fallout",
    id: 7,
  },
  {
    question: "What is the highest-selling video game of all time?",
    answers: ["Minecraft", "Tetris", "Grand Theft Auto V", "Super Mario Bros."],
    correctAnswer: "Minecraft",
    id: 8,
  },
  {
    question:
      "What is the name of the protagonist in the game 'The Legend of Zelda'?",
    answers: ["Link", "Zelda", "Ganondorf", "Epona"],
    correctAnswer: "Link",
    id: 9,
  },
  {
    question: "Which game is set in the fictional universe of Azeroth?",
    answers: ["League of Legends", "World of Warcraft", "Dota 2", "Overwatch"],
    correctAnswer: "World of Warcraft",
    id: 10,
  },
  {
    question: "Which character is the mascot of the Pokémon franchise?",
    answers: ["Pikachu", "Charizard", "Bulbasaur", "Squirtle"],
    correctAnswer: "Pikachu",
    id: 11,
  },
  {
    question:
      "What is the name of the company that developed the game 'Fortnite'?",
    answers: [
      "Epic Games",
      "Valve Corporation",
      "Blizzard Entertainment",
      "Ubisoft",
    ],
    correctAnswer: "Epic Games",
    id: 12,
  },
  {
    question:
      "In which game do players control a group of characters known as 'Champions'?",
    answers: ["League of Legends", "Fortnite", "Apex Legends", "Call of Duty"],
    correctAnswer: "League of Legends",
    id: 13,
  },
  {
    question:
      "Which game series follows the adventures of a character named Nathan Drake?",
    answers: ["Uncharted", "Assassin's Creed", "The Last of Us", "God of War"],
    correctAnswer: "Uncharted",
    id: 14,
  },
  {
    question: "What is the primary objective in the game 'Among Us'?",
    answers: [
      "Complete tasks",
      "Defeat impostors",
      "Survive and find impostors",
      "Collect coins",
    ],
    correctAnswer: "Complete tasks",
    id: 15,
  },
  {
    question:
      "Which game involves building and managing a virtual world using blocks?",
    answers: ["Minecraft", "Roblox", "Terraria", "Fortnite"],
    correctAnswer: "Minecraft",
    id: 16,
  },
  {
    question: "What is the name of the planet in the game 'Destiny'?",
    answers: ["Earth", "Mars", "Venus", "The Last City"],
    correctAnswer: "The Last City",
    id: 17,
  },
  {
    question: "Which game features a battle royale mode called 'Warzone'?",
    answers: ["Call of Duty", "Fortnite", "Apex Legends", "PUBG"],
    correctAnswer: "Call of Duty",
    id: 18,
  },
  {
    question:
      "What is the name of the princess in the game 'The Legend of Zelda: Breath of the Wild'?",
    answers: ["Zelda", "Mipha", "Urbosa", "Riju"],
    correctAnswer: "Zelda",
    id: 19,
  },
  {
    question:
      "What is the name of the fictional city in the 'Grand Theft Auto' series?",
    answers: ["Los Angeles", "San Francisco", "New York City", "Los Santos"],
    correctAnswer: "Los Santos",
    id: 20,
  },
];

export default { mathQuestions, programmerQuestions, gamerQuestions };
