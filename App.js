import React from "react";
import ReactDOM from "react-dom";
import App from "./clock";

function MyApp() {
  return (
    <div>
      <App />
    </div>
  );
}

// Render the MyApp component to the DOM
ReactDOM.render(<MyApp />, document.getElementById("root"));
export default App;