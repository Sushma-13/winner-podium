import ReactDOM from "react-dom/client";
import { WinnersPodium } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <WinnersPodium
      options={{
        container: {
          style: {
            color: "white",
          },
        },
        podiumHeight: 70,
        podiumWidth: 200,
        backgroundColor: "rgb(2 193 189)",
        is3D: true,
        topViewHeight: 30,
      }}
    />
  </div>
);
