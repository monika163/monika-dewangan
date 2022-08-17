import typing_ninja_img from './assets/projects/typing-ninja.PNG';
import shoping_cart_img from './assets/projects/shoping-cart.PNG';
import memory_game_img from './assets/projects/memory-game.PNG';
import weather_app_img from './assets/projects/weather-app.PNG';
// import todolist from './assets/projects/todolist';
import todolist from "./assets/projects/todolist.PNG"

const Icons = {
    react: <i className="devicon-react-original colored"></i>,
    javaScript: <i className="devicon-javascript-plain colored"></i>,
    HTML: <i className="devicon-html5-plain colored"></i>,
    CSS: <i className="devicon-css3-plain colored"></i>,
    node: <i className="devicon-nodejs-plain colored"></i>,
    express: <i className="devicon-express-original colored"></i>,
    mongoDB: <i className="devicon-mongodb-plain colored"></i>,
    bootstrap: <i className="devicon-bootstrap-plain colored"></i>,
    redux: <i className="devicon-redux-original colored"></i>,
    CPlusPlus: <i className="devicon-cplusplus-plain colored"></i>
}
export default [
    {
        name: "ToDoList App",
        description: "Basic Todo app using React, Redux",
        image:todolist,
        liveDemoLink: "https://monika163.github.io/ToDoApp/",
        codeLink: "https://github.com/monika163/ToDoApp",
        teckStack: [Icons.javaScript, Icons.HTML, Icons.CSS,Icons.react, Icons.redux, Icons.bootstrap]
    },

    {
        name: "Weather App",
        description: "Created weather app using OpenWeather API.",
        image: weather_app_img,
        liveDemoLink: "https://monika163.github.io/WeatherApp/",
        codeLink: "https://github.com/monika163/WeatherApp",
        teckStack: [Icons.javaScript, Icons.HTML, Icons.CSS,Icons.react]
    },

    {
        name: "ECommerce Cart App",
        description: "Created basic ECommerce cart App using React and Bootstarp, Material UI.",
        image: shoping_cart_img,
        liveDemoLink: "https://monika163.github.io/ECommerse-Cart-App/",
        codeLink: "https://github.com/monika163/ECommerse-Cart-App",
        teckStack: [Icons.javaScript, Icons.HTML, Icons.CSS,Icons.react, Icons.redux, Icons.bootstrap]
    },
    // {
    //     name: "Todo App",
    //     description: "Basic Todo app using MERN stack",
    //     image: todolist,
    //     liveDemoLink: "#",
    //     codeLink: "#",
    //     teckStack: [Icons.react, Icons.node, Icons.express, Icons.mongoDB, Icons.redux]
    // },
 
    // {
    //     name: "ToDoList App",
    //     description: "Test your typing speed.",
    //     image: typing_ninja_img,
    //     liveDemoLink: "#",
    //     codeLink: "#",
    //     teckStack: [Icons.react]
    // },
   
    // {
    //     name: "Memory Game",
    //     description: "Simple memory game app using React.",
    //     image: memory_game_img,
    //     liveDemoLink: "#",
    //     codeLink: "#",
    //     teckStack: [Icons.react]
    // }
   
]