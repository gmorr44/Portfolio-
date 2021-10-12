import { WiDayCloudy } from "react-icons/wi";

// Clock SVG Image
const clockLogo = <svg  className = "cardsvg"
xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="#ddd"/><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" fill="#ddd"/></svg>

// Delivery truck SVG Image
const deliveryLogo = <svg className = "cardsvg" xmlns="http://www.w3.org/2000/svg" 
width="4em" height="4em"viewBox="0 0 24 24"><g fill="none" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5"/><path d="M3 9h4"/></g></svg>

// Clipboard SVG Image
const clipBoardLogo = <svg className="cardsvg"xmlns="http://www.w3.org/2000/svg" 
width="4em" height="4em"  viewBox="0 0 16 16"><g fill="#ddd"><path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></g></svg>

// Basketball SVG Image
//const svgStyle = "-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
const basketballLogo = <svg className="cardsvg" xmlns="http://www.w3.org/2000/svg" 
width="4em" height="4em"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M256 233.37l34.45-34.45a207.08 207.08 0 0 1-50.12-135.25c0-5 .19-10.05.54-15A207.09 207.09 0 0 0 120.67 98z" fill="#ddd"/><path d="M313.14 176.23L391.33 98A207.07 207.07 0 0 0 273 48.8c-.41 4.9-.64 9.86-.64 14.87a175.25 175.25 0 0 0 40.78 112.56z" fill="#ddd"/><path d="M335.77 198.86a175.25 175.25 0 0 0 112.56 40.81c5 0 10-.23 14.87-.64A207.07 207.07 0 0 0 414 120.67z" fill="#ddd"/><path d="M176.23 313.14a175.23 175.23 0 0 0-112.56-40.81q-7.52 0-14.87.64A207.07 207.07 0 0 0 98 391.33z" fill="#ddd"/><path d="M256 278.63l-34.45 34.45a207.08 207.08 0 0 1 50.12 135.25c0 5-.19 10.05-.54 15A207.06 207.06 0 0 0 391.33 414z" fill="#ddd"/><path d="M448.33 271.67a207.08 207.08 0 0 1-135.25-50.12L278.63 256L414 391.33a207.09 207.09 0 0 0 49.39-120.2c-5.01.35-10.02.54-15.06.54z" fill="#ddd"/><path d="M233.37 256L98 120.67a207.06 207.06 0 0 0-49.39 120.2c5-.35 10-.54 15-.54a207.08 207.08 0 0 1 135.25 50.12z" fill="#ddd"/><path d="M120.67 414A207.07 207.07 0 0 0 239 463.2q.63-7.35.64-14.87a175.23 175.23 0 0 0-40.81-112.56z" fill="#ddd"/></svg>

// Book SVG Image
const bookLogo = <svg className="cardsvg"xmlns="http://www.w3.org/2000/svg" 
width="4em" height="4em" viewBox="0 0 512 512"><rect x="32" y="96" width="64" height="368" rx="16" ry="16" fill="none" stroke="#ddd" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="#ddd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 224h128"/><path fill="none" stroke="#ddd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 400h128"/><rect x="112" y="160" width="128" height="304" rx="16" ry="16" fill="none" stroke="#ddd" strokeLinejoin="round" strokeWidth="32"/><rect x="256" y="48" width="96" height="416" rx="16" ry="16" fill="none" stroke="#ddd" strokeLinejoin="round" strokeWidth="32"/><path d="M422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89z" fill="none" stroke="#ddd" strokeLinejoin="round" strokeWidth="32"/></svg>

//Portfolio SVG Image
const portfolioLogo = <svg className="cardsvg"
xmlns="http://www.w3.org/2000/svg" 
width="4em" height="4em" viewBox="0 0 32 32"><path d="M5 6v13.563l-2.281 2.314A2.444 2.444 0 0 0 2 23.594A2.418 2.418 0 0 0 4.406 26h23.188A2.418 2.418 0 0 0 30 23.594a2.45 2.45 0 0 0-.719-1.719L27 19.562V6H5zm2 2h18v11H7V8zm9 1l-1.5 9H16l1.5-9H16zm-3.914 2l-1.719 2.068L10 13.5l.367.432L12.086 16l1.086-.863L11.81 13.5l1.36-1.637L12.087 11zm7.828 0l-1.086.863L20.19 13.5l-1.36 1.637l1.085.863l1.719-2.068L22 13.5l-.367-.432L19.914 11zM6.437 21h19.125l2.313 2.281a.464.464 0 0 1 .125.313a.386.386 0 0 1-.406.406H4.406A.386.386 0 0 1 4 23.594c0-.11.047-.234.125-.313L6.438 21z" fill="#ddd"/></svg>

const ProjectsData =[

    {
        'name': 'Portfolio Website',

        'cardLogo': portfolioLogo,

        'demo': false,

        'demoLink':`` , 

        'githubLink': "https://github.com/gmorr44/Portfolio-",

        'description':'My objective with designing and building this website was to keep it simple and effective. I kept the resources in the project lightweight and responsive, so it looks good on any device and screen size. I developed this website with the ReactJS library to enable future scaling of additional project components.' ,

        'technologies': ['ReactJS', 'JavaScript', 'HTML', 'CSS',  'Visual Studio Code'],

        'projectObjectives': ['Build and deploy the website as a platform to showcase my programming experience.', 'Build an easy to navigate and responsive website.', 'Provide contact information and links to my specific software projects.']
  
    },

    {
        'name': 'Weather App',

        'cardLogo': <WiDayCloudy size= "4em"/>,

        'demo': true,

        'demoLink':`https://weather-app-a23e7.web.app/` , 

        'githubLink': "https://github.com/gmorr44/Weather-App",

        'description': 'This is a ReactJS application that displays current weather conditions of any searchable city. The application makes a call to an API and then displays the response data from the API.  ' ,

        'technologies': ['ReactJS', 'JavaScript', 'HTML', 'CSS',  'Visual Studio Code'],

        'projectObjectives': ['Develop a React app that retrieves data from an API call', 'Utilize state management to display the proper graphic visualizations for the current weather conditions.', 'Deploy a live version of the application.']

    },

    {
        'name': 'Tournament Predictor',

        'cardLogo': basketballLogo,

        'demo': true,

        'demoLink':"https://season-predictor.herokuapp.com/" , 

        'githubLink': "https://github.com/gmorr44/BasketballSeasonPredictor",

        'description': "This project was built using Python and many of its libraries. Using a public dataset of historical college basketball playoff performance, I trained a machine learning algorithm to utilize within the final web application. I analyzed the data, graphed the data, and developed the trained prediction model in a Jupyter Notebook. I built a dashboard that allows the user to input their team's performance data and run it through the trained prediction model. The user inputs are ran through the trained prediction model and the program produces the output of either the team 'making the playoffs' or 'not making the playoffs'.",

        'technologies': ['Python', 'Jupyter Notebooks', 'Flask, Pandas, Scikit-learn, and Matplotlib', 'HTML(CSS)', 'Visual Studio Code (Virtual Environment)', 'Heroku'],

        'projectObjectives': ['Analyze and clean a historical basketball tournament data set using Jupyter Notebooks.', 'Train a machine learning algorithm from the Python Scikit-learn library.', 'Test the accuracy of the trained machine learning model.','Implement the trained model into a Flask web application. Based upon user inputs, the application will predict the likelihood of any given team making the college basketball tournament.', 'Deploy the application to Heroku.']

    },

    {
        'name': 'Package Delivery',

        'cardLogo': deliveryLogo,

        'demo': false,

        'demoLink':`` , 

        'githubLink': "https://github.com/gmorr44/Package-Delivery",

        'description': `This package delivery program was built for a final review in my Data Structures and Algorithms computer science course. The objective of this program is to deliver 40 packages throughout a city within specified time and distance constraints. The program utilized a hash table data structure for storing the package data. Using the hash table allowed the main algorithm to access package data in O[1] time complexity. The program provides a console user interface which allows the user to view which delivery truck delivered each package at the end of the day. The interface also allows searching for a specific package's status at a specific time during the day.` ,

        'technologies': ['Written in Python','PyCharm IDE'],

        'projectObjectives': ['Model the delivery scenario using Python object-oriented principles.', 'Import CSV files into the program as useable package and distance data.', 'Implement a hash table data structure that stores the package data to allow efficient data retrieval and future scalability.','Use a self-adjusting heuristic algorithm to plan the delivery routes and reduce the mileage of the delivery trucks.']
        
    },

    


    {
        'name': 'Scheduling App',

        'cardLogo': clockLogo,

        'demo': false,

        'demoLink': '' , 

        'githubLink': "https://github.com/gmorr44/SchedulingApplication",

        'description': 'The scheduling application was built as a project for my Software-2 computer science course. The application provides a scheduling tool for a consulting firm. The program has a login page that verifies user credentials to the database records. After the user is logged in, they can create, read, update, or delete both appointment and customer data. Exception controls were implemented to prevent scheduling conflicts and invalid data input during run time.',

        'technologies': ['Java', 'SceneBuilder', 'JDBC interface with MySQL', 'MySQL Workbench', 'Netbeans IDE'],

        'projectObjectives': ['Create a Java scheduling application that allows consultants to create, read, update, and delete customer appointments and records.', 'Design and build a GUI that includes a login page and a user-friendly interface.', 'Store all records in a SQL database.', 'Interface all code files using Model-View-Controller architecture.']
  
    },

    {
        'name': 'Inventory Program',

        'cardLogo': clipBoardLogo,

        'demo': false,

        'demoLink':`` , 

        'githubLink': "https://github.com/gmorr44/Inventory-Application",

        'description': 'The parts inventory application was built as a project for my Software 1 computer science class. I was provided a UML class diagram for how the project should be structured and the implementation was left up to me to complete. This program applies object-oriented design principles such as inheritance, encapsulation, and abstraction while using a Model-View-Controller (MVC) architectural pattern.' ,

        'technologies': ['Java', 'Netbeans IDE', 'SceneBuilder'],

        'projectObjectives': ['Model a parts and products warehouse using Java object-oriented principles.', 'Create a GUI using Netbeans and SceneBuilder.', 'Provide exception controls that handle runtime errors.']

    },
    //**********The following project is not currently displayed on the website. */
    // {
    //     'name': 'Book Repository',

    //     'cardLogo': bookLogo,

    //     'demo': false,

    //     'demoLink':`` , 

    //     'githubLink': "https://github.com/gmorr44/Book-Repository",

    //     'description': 'This program was completed during my scripting and programming computer science course. This class was an introduction in using object-oriented principles, data types, control structures, pointers, memory allocation, and functions. Using these principles, I wrote this program to model the book repository.' ,

    //     'technologies': ['Written in C++', 'Netbeans IDE'],

    //     'projectObjectives': ['Use object-oriented design to model a book repository.', 'Get familiar using pointers and understand the fundamentals of memory management.', 'Use encapsulation in each class and provide getters and setters for the class attributes.']

    // },
 
]


export default ProjectsData
