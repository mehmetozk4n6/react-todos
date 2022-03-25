import React from "react";

function ShowList({ tasks, setTasks, filtered, shower }) {
  return (
    <div>
      <ul>
        {filtered(shower).map((task, index) => (
          <li key={index}>
            <div className="showList">
              <input
                type="checkbox"
                checked={task.done}
                onChange={(e) =>
                  setTasks(
                    tasks.map((el) =>
                      el.text === task.text
                        ? { ...el, done: e.target.checked }
                        : el
                    )
                  )
                }
              />
              <input
                type="text"
                value={task.text}
                className={task.done ? "linedtext" : ""}
                onChange={(e) => {
                  setTasks(
                    tasks.map((el) =>
                      el.text === task.text
                        ? { ...el, text: e.target.value }
                        : el
                    )
                  );
                }}
              />
              <button
                className="btn btn-outline-light p-2"
                onClick={(e) =>
                  setTasks(tasks.filter((el) => el.text !== task.text))
                }
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
