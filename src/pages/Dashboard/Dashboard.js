import React from "react";

import ListOfBoards from "./ListOfBoards";
import Sidebar from "./Sidebar";

import './Dashboard.css'
import HeaderBoards from "../../global/HeaderBoards";

function Dashboard() {


  return (
    <div>
      <HeaderBoards color="#026AA7" />
      <div className="body-dashboard">
        <Sidebar />
        <ListOfBoards />
      </div>
    </div>
  );
}

export default Dashboard;
