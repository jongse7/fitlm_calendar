import { useState } from "react";
import "./App.css";
import CalendarPage from "./page/CalendarPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-5 bg-semi-light-color w-screen h-screen">
      <CalendarPage />
    </div>
  );
}

export default App;
