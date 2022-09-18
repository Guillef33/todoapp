import React from "react";

import HeaderDashboard from "./HeaderDashboard";
import ListOfBoards from "./ListOfBoards";
import Sidebar from "./Sidebar";

import './Dashboard.css'

function Dashboard() {


  return (
    <div>
      <HeaderDashboard />
      <div className="body-dashboard">
        <Sidebar />
        <ListOfBoards />
      </div>

    </div>
  );
}

export default Dashboard;
