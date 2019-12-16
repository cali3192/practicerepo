import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

// ToDo : The Components that I created
import SearchParams from "./testComponents/SearchParam";
import Test from "./testComponents/Test.jsx";
import Counter from "./testComponents/Counter";

// import Details from "./Details";
// import SearchParams from "./SearchParams";

const App = () => {
  const theme = useState("darkblue");
  return (
    // <>
    //   <Link to="/">Adopt</Link>
    // </>

    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>

        <SearchParams />

        <Test />

        <Counter />
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
