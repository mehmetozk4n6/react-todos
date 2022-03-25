import React from "react";

function Footer({ setShower, tasks }) {
  return (
    <div className="border-top text-secondary">
      <span style={{ fontSize: 12 }}>
        {tasks.filter((task) => task.done === false).length} items left
      </span>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setShower("All");
          }}
        >
          All
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setShower("Active");
          }}
        >
          Active
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setShower("Completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default Footer;
