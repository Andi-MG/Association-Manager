import React, {useState} from "react";
import CreateUserForm from "../newMember/NewMember.tsx";
import './Dashboard.css';
import MemberList from "../memberList/MemberList.tsx";
import NewAnnouncementForm from "../newAnnouncement/NewAnnouncementForm.tsx";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Dashboard: React.FC = () => {
  const [isMemberListOpen, setIsMemberListOpen] = useState(false);
  const [isCreateUserFormOpen, setIsCreateUserFormOpen] = useState(false);
  const [isNewAnnouncementFormOpen, setIsNewAnnouncementFormOpen] = useState(false);

  return (
      <div className="dashboard">
        <h1>Association manager</h1>

        <div className="dashboard-card">
          <button onClick={() => {
            setIsMemberListOpen(true);
          }}>Show Member List
          </button>
          <Modal isOpen={isMemberListOpen} onRequestClose={() => {
            setIsMemberListOpen(false);
          }}
                 contentLabel="Member List">
            <MemberList/>
            <button onClick={() => {setIsMemberListOpen(false);}}>Close</button>
          </Modal>
          <button onClick={() => {
            setIsCreateUserFormOpen(true);
          }}>Create New Member
          </button>
          <Modal isOpen={isCreateUserFormOpen} onRequestClose={() => {
            setIsCreateUserFormOpen(false);
          }}
                 contentLabel="Create New Member">
            <CreateUserForm/>
            <button onClick={() => {setIsCreateUserFormOpen(false);}}>Close</button>
          </Modal>
          <button onClick={() => {
            setIsNewAnnouncementFormOpen(true);
          }}>Create New Announcement
          </button>
          <Modal isOpen={isNewAnnouncementFormOpen} onRequestClose={() => {
            setIsNewAnnouncementFormOpen(false);
          }}
                 contentLabel="Create New Announcement">
            <NewAnnouncementForm/>
            <button onClick={() => {setIsNewAnnouncementFormOpen(false);}}>Close</button>
          </Modal>
        </div>
      </div>
  );
};

export default Dashboard;