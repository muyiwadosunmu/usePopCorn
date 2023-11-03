import React from "react";
import "./index.css";
// import { useState } from "react";
import ReactDOM from "react-dom";
// import StarRating from "./StarRating";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//80c76d3f
/*
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
*/

// ReactDOM.render(
//   <React.StrictMode>
//     <StarRating
//       maxRating={5}
//       messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//     />
//     <StarRating size={24} color="red" className="test" defaultRating={3} />
//     <Test />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
