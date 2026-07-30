import Currency from "../assets/images/currency.png";
import Todo from "../assets/images/todo.png";
import task_management from "../assets/images/best-to-do-list-apps.jpg"
export const projects = [
  {
    id: 1,
    title: "Currency Converter",
    image: Currency,
    status:"Live",
    description: "Currency converter built using React and API.",
    tech: ["React", "Tailwind", "API"],
    github: "https://github.com/ahmed0-17/Currency-converter",
    live: "https://currency-converter-ten-taupe-33.vercel.app/",
  },

  {
    id: 2,
    title: "Todo App",
    image: Todo,
    status:"Live",
    description: "Todo app using Context API and Local Storage.",
    tech: ["React", "Context API", "Tailwind"],
    github: "https://github.com/ahmed0-17/Todo-App",
    live: "https://todoapp-fawn-phi.vercel.app/",
  },
    {
    id: 3,
    title: "Task Management App",
    image: task_management ,
    status:"In progress",
    description: "Task Management app using Redux toolkit and Local Storage.",
    tech: ["React", "Context API", "Tailwind"],
    github: "https://github.com/username/project",
    live: "https://project.vercel.app",
  },
 
];