import React, { useEffect, useState } from "react";
import { fetchAnnouncements } from "../../adapters/persistance/persistanceService.ts";
import { Announcement } from "../../ports/announcementTypes.ts";
import AnnouncementComponent from "../announcement/Announcement";


const AnnouncementBoard: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAnnouncements = async () => {
    setLoading(true);
    try {
      const announcements = await fetchAnnouncements();
      setAnnouncements(announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadAnnouncements();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        <h1>Announcements</h1>
        <ul>
          {announcements.map(announcement => (
              <AnnouncementComponent key={announcement.id} {...announcement} />
          ))}
        </ul>
      </div>
  );
};

export default AnnouncementBoard;