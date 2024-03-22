import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper" style={{width: "300px", height: '100vh'}}>
      <div className="sidebar-heading">MF POC</div>
      <div className="list-group list-group-flush">
        <a href="/vehicles" className="list-group-item list-group-item-action bg-light">Vehicles</a>
        <a href="/work-order" className="list-group-item list-group-item-action bg-light">Work Order</a>
        <a href="/admin-console" className="list-group-item list-group-item-action bg-light">Admin console</a>
        <a href="/peoples" className="list-group-item list-group-item-action bg-light">People</a>
      </div>
    </div>
  );
};

export default Sidebar;