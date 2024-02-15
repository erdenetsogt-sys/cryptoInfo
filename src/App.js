import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.js";
import { Home } from "./Pages/Home.js";
import { CoinPage } from "./Pages/CoinPage.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins/:id" element={<CoinPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
