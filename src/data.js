import To_Do_List from "/Users/rileyraso/Desktop/React_portfolio/portfolio_website/src/Media/To-Do-List.png";
import Salary_Search from "/Users/rileyraso/Desktop/React_portfolio/portfolio_website/src/Media/Engineering-Salary-Search.png";
import MTF from "/Users/rileyraso/Desktop/React_portfolio/portfolio_website/src/Media/MTF.png";

export const projects = [
  {
    title: "JavaScript Software Engineering Salary Search",
    subtitle: "Solo Project",
    description:
      "Created a tool to search for the average software engineering salaries (divided into percentiles) for each country, Used api.teleport.org's API for the salary data and Used the framework ajax to communicate with api.teleport.org.Written in JavaScript, CSS3, and HTML",
    image: Salary_Search,
    link: "https://rileyjraso.github.io/JS_SoftwareEngineerSalarySearch/",
  },
  {
    title: "JavaScript To-Do list",
    subtitle: "Solo Project",
    description:
      "Created a to-do list that utilizes subtasks to break up large items into manageable actions. Has the ability to save data locally to store when webpage is not open. it can restore state when webpage is reloaded, Written in JavaScript, CSS3, and HTML",
    image: To_Do_List,
    link: "https://rileyjraso.github.io/JS_TodoList/",
  },
  {
    title: "Python MTF Encoder and Decoder Application",
    subtitle: "Solo Project",
    description:
      "A program created in Python for Encoding and Decoding move to front text files. Written in Python uses Unittest for testing of methods, After creating unit tests a final coverage of 90% was achieved",
    image: MTF,
    link: "https://github.com/RileyJRaso/MTF_Encoder_and_Decoder",
  },
  {
    title: "",
    subtitle: "",
    description:
      "",
    image: "",
    link: "",
  },
];
