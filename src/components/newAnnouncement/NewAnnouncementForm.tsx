import React, { useState } from "react";
import { addAnnouncement } from "../../adapters/persistance/persistanceService";
import {NewAnnouncement} from "../../ports/announcementTypes.ts";

const NewAnnouncementForm: React.FC = () => {
  const [announcement, setAnnouncement] = useState<NewAnnouncement>({
    title: "",
    content: "",
    imgUrl: "",
    internal: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => {
    const { name, value } = event.target;
    setAnnouncement((prevAnnouncement) => ({ ...prevAnnouncement, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      console.log("Request already in progress:", announcement);
      return;
    }
    setIsSubmitting(true);
    console.log("Calling to add new announcement data:", announcement);
    try {
      await addAnnouncement(announcement);
      console.log("Announcement added to db");
      setAnnouncement({
        title: "",
        content: "",
        imgUrl: "",
        internal: false
      });
    } catch (error) {
      console.error('Error adding announcement:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(event).catch(console.error);
  };

  return (
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title</label>
        <input
            type="text"
            id="title"
            name="title"
            value={announcement.title}
            onChange={handleChange}
        />
        <br/>

        <label htmlFor="content">Content</label>
        <textarea
            id="content"
            name="content"
            value={announcement.content}
            onChange={handleChange}
        />
        <br/>

        <label htmlFor="imgUrl">Image Url</label>
        <input
            type="url"
            id="imgUrl"
            name="imgUrl"
            value={announcement.imgUrl}
            onChange={handleChange}
        />
        <br/>

        <label htmlFor="internal">Internal</label>
        <input
            type="checkbox"
            id="internal"
            name="internal"
            checked={announcement.internal}
            onChange={handleChange}
        />
        <br/>

        <button type="submit">Create announcement</button>
      </form>
  );
};

export default NewAnnouncementForm;