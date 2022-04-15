import To_Do_List from "../src/Media/To-Do-List.png";
import Salary_Search from "../src/Media/Engineering-Salary-Search.png";
import MTF from "../src/Media/MTF.png";
import Goal_Tracking from "../src/Media/Goal_Tracking.png";
import Big_Query_Github from "../src/Media/Big_Query_Github.png";
import Stock_Graph from "../src/Media/Stock_Graph.png";


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
    title: "Goal Tracking Python Script",
    subtitle: "Solo Project",
    description:
      "software intended to interact with a SQL database to store time spent on goals of the user. the software will also display the data in a way readable to most users, Writes and reads from Database through SQL queries done through python. Models data using the matplotlib library",
    image: Goal_Tracking,
    link: "https://github.com/RileyJRaso/Goal-Tracking",
  },
  {
    title: "Github BigQuery Analysis Python Script",
    subtitle: "Solo Project",
    description:
      "a python script for getting Github data from bigquery and display to user in a readable way, Utilized a public data set from Google BigQuery for the data on Github repos. Wrote a SQL query to get the top X languages or committers in Github repos, where X is passed in by user.",
    image: Big_Query_Github,
    link: "https://github.com/RileyJRaso/Github_bigquery__analysis",
  },
  {
    title: "S&P 500 Stock Data Analysis Python Script",
    subtitle: "Solo Project",
    description:
      "a python script for getting Stock data from kaggle and display to user in a readable way, Parse data stored in a .csv file and worked with data using a pandas DataFrame when processing. Wrote data manipulation functions using pandas features such as .loc and .DataFrame",
    image: Stock_Graph,
    link: "https://github.com/RileyJRaso/S-P-500-stock-data-Analysis",
  },
];
