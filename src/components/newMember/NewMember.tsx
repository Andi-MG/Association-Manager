import React, { useState } from "react";

interface Member {
  firstName: string;
  lastName: string;
  email: string;
}

const CreateMemberForm: React.FC = () => {
  const [member, setMember] = useState<Member>({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMember((prevMember) => ({ ...prevMember, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Calling to add new member data:", member);
    try {
      const response = await fetch('/api/members', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(member),
      });

      if (response.ok) {
        console.log("Member added to db:", member);
      } else {
        console.error('Something went wrong');
      }
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={member.firstName}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={member.lastName}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="email">Email:</label>
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
