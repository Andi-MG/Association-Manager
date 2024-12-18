import React, { useState } from "react";
import { addMember } from "../../adapters/persistance/persistanceService";
import "./NewMember.css";
import { NewMember } from "../../ports/member";

const CreateMemberForm: React.FC = () => {
  const [member, setMember] = useState<NewMember>({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMember((prevMember) => ({ ...prevMember, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      console.log("Request already in progress:", member);
      return;
    }
    setIsSubmitting(true);
    console.log("Calling to add new member data:", member);
    try {
      await addMember(member);
      console.log("Member added to db");
      setMember({
        firstName: "",
        lastName: "",
        email: ""
      });
    } catch (error) {
      console.error('Error adding member:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(event).catch(console.error);
  };

  return (
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
            type="text"
            id="firstName"
            name="firstName"
            value={member.firstName}
            onChange={handleChange}
        />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
            type="text"
            id="lastName"
            name="lastName"
            value={member.lastName}
            onChange={handleChange}
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            name="email"
            value={member.email}
            onChange={handleChange}
        />
        <br />

        <button type="submit">Create Member</button>
      </form>
  );
};

export default CreateMemberForm;