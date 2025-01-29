import React, {useState} from "react";
import {addMember} from "../../adapters/persistance/persistanceService";
import {NewMember} from "../../ports/memberTypes.ts";

const CreateMemberForm: React.FC = () => {
  const [member, setMember] = useState<NewMember>({
    alias: "",
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    role: 0,
    active: false,
    hasKey: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setMember((prevMember) => ({...prevMember, [name]: value}));
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
        alias: "",
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        role: 0,
        active: false,
        hasKey: false
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
        <label htmlFor="alias">Alias</label>
        <input
            type="text"
            id="alias"
            name="alias"
            value={member.alias}
            onChange={handleChange}
        />
        <br/>

        <label htmlFor="firstName">First Name</label>
        <input
            type="text"
            id="firstName"
            name="firstName"
            value={member.firstName}
            onChange={handleChange}
        />
        <br/>

        <label htmlFor="lastName">Last Name</label>
        <input
            type="text"
            id="lastName"
            name="lastName"
            value={member.lastName}
            onChange={handleChange}
        />
        <br/>

        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            name="email"
            value={member.email}
            onChange={handleChange}
        />
        <br/>

        <label htmlFor="role">Role</label>
        <input list="roles" name="role" onChange={handleChange}/>
        <datalist id="roles">
          <option key='0' value="Member"/>
          <option key='1' value="President"/>
          <option key='2' value="VicePresident"/>
          <option key='3' value="Secretary"/>
          <option key='4' value="Treasurer"/>
          <option key='5' value="InChargeOfBoardgames"/>
          <option key='6' value="InChargeOfWargames"/>
          <option key='7' value="InChargeOfRoleplayingGames"/>
        </datalist>
        <br/>

        <button type="submit">Create Member</button>
      </form>
  );
};

export default CreateMemberForm;