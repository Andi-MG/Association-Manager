import React from "react";
import CreateUserForm from "../newMember/NewMember.tsx";
import './Dashboard.css';
import MemberList from "../memberList/MemberList.tsx";
import NewAnnouncementForm from "../newAnnouncement/NewAnnouncementForm.tsx";

const Dashboard: React.FC = () => {
  return (
      <div className="dashboard">
        <h1>Association manager</h1>
        <div className="dashboard-card">
          <MemberList></MemberList>
        </div>
        <br/>
        <div className="dashboard-card">
          <CreateUserForm></CreateUserForm>
        </div>
        <div className="dashboard-card">
          <NewAnnouncementForm></NewAnnouncementForm>
        </div>
      </div>
  );
};

export default Dashboard;