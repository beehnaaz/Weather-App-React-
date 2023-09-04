import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <SearchEngine city="Tehran" />
      <footer>
        The project is created by Behnaz and it is {""}
        <a
          href="https://github.com/beehnaaz/Weather-App-React-"
          target="_blank"
        >
          open sourced on Github
        </a>
      </footer>
    </div>
  );
}
