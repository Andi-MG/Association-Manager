import React from "react";

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
        <p>{title}</p>
        <p>{content}</p>
        {imgUrl != "" && <img src={imgUrl} alt={title} />}
        {internal && <p>Internal</p>}
      </div>
  );
};

export default Announcement;