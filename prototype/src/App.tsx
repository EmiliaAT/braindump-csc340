import "./App.css";
import Header from "./common/header/Header";

export default function App() {
  return (
    <div className="app-body">
      <Header onTestA={() => console.log("Test [A]")} onTestB={() => console.log("Test [B]")} />
    </div>
  );
}
