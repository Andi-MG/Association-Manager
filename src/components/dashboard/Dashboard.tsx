import React from "react";
import CreateUserForm from "../newMember/NewMember.tsx";
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
      <div className="dashboard">
        <h1>Association manager</h1>
        <div className="dashboard-card">
          <CreateUserForm></CreateUserForm>
        </div>
        <div className="dashboard-card">
          <CreateUserForm></CreateUserForm>
        </div>
      </div>
  );
};

export default Dashboard;