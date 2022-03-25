import React from "react";

function Footer() {
  return (
    <div className="border-top text-secondary">
      <span style={{ fontSize: 12 }}> items left</span>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary">All</button>
        <button className="btn btn-outline-primary">Active</button>
        <button className="btn btn-outline-primary">Completed</button>
      </div>
    </div>
  );
}

export default Footer;
