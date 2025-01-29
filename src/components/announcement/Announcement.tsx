import React from "react";
import "./Announcement.css";

interface AnnouncementProps {
  id: string;
  title: string;
  content: string;
  imgUrl: string;
  internal: boolean;
}

const Announcement: React.FC<AnnouncementProps> = ({ id, title, content, imgUrl,  internal}) => {
  return (
      <div key={id} className="announcement">
        <h2>{title}</h2>
        <p>{content}</p>
        {imgUrl != "" && <img src={imgUrl} alt={title} />}
        {internal && <p>Internal</p>}
      </div>
  );
};

export default Announcement;