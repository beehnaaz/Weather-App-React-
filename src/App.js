import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App container">
      <SearchEngine city="Tehran" />
      <footer>
        The project is created by Behnaz and it is {""}
        <a
          href="https://github.com/beehnaaz/Weather-App-React-"
          target="_blank"
        >
          open sourced on Github
        </a>
        <div Class="btn btn-primary">Hello</div>
      </footer>
    </div>
  );
}
