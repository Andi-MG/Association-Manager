import React from "react";

interface MemberProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const Member: React.FC<MemberProps> = ({ id, firstName, lastName, email }) => {
  return (
      <div key={id} className="member">
        <p>{firstName} {lastName}</p>
        <p>{email}</p>
      </div>
  );
};

export default Member;