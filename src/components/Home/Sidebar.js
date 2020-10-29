import React from "react";
import "./Sidebar.css";
import { useStateValue } from "../../DataLayer";
import { useParams } from "react-router-dom";

function Sidebar() {
  const { category } = useParams();
  const [{ categories }, dispatch] = useStateValue();
  console.log("category params", category);

  return (
    <div className="sidebar">
      {/* <h1>Sidebar component</h1> */}

      <div className="sidebar__categories">
        {categories.map(({ name, id }) => (
          <h2 className={name.toLowerCase() == category && `active`} key={id}>
            {name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
