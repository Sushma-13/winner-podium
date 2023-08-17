import React from "react";
import ReactDOM from "react-dom/client";
import Podium from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Podium
      options={{
        container: { style: { border: "1px solid black" }, className: "" },
        podiumHeight: 70,
        podiumWidth: 200,
        backgroundColor: "rgb(2 193 189)",
        is3D: true,
        topViewHeight: 30,
        header: <h1>This is a winner Podium</h1>,
        footer: <h4>Description</h4>,
        winners: {
          rank1: <h4>Name-1</h4>,
          rank2: <h4>Name-2</h4>,
          rank3: <h4>Name-3</h4>,
        },
      }}
    />
  </React.StrictMode>
);
