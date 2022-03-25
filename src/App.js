import "./App.css";
import { useState } from "react";
import AddList from "./components/AddList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowList from "./components/ShowList";

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Taste JavaScript",
      done: true,
    },
    {
      text: "Code furiously",
      done: true,
    },
    {
      text: "Promote Mavo",
      done: false,
    },
    {
      text: "Give talks",
      done: false,
    },
    {
      text: "Write tutorials",
      done: true,
    },
    {
      text: "Have a life!",
      done: false,
    },
  ]);

  const [shower, setShower] = useState("All");
  const filtered = (shower) =>
    shower === "All"
      ? tasks
      : shower === "Active"
      ? tasks.filter((task) => task.done === false)
      : tasks.filter((task) => task.done !== false);

  return (
    <div className="App">
      <div>
        <Header />
        <div className="card">
          <AddList tasks={tasks} setTasks={setTasks} />
          <ShowList
            tasks={tasks}
            setTasks={setTasks}
            filtered={filtered}
            shower={shower}
            setShower={setShower}
          />
          <Footer
            tasks={tasks}
            setTasks={setTasks}
            filtered={filtered}
            setShower={setShower}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
