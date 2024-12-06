import React, { useEffect, useState } from "react";
import { fetchMembers } from "../../adapters/persistance/persistanceService.ts";
import MemberComponent from "../Member/Member";
import { Member } from "../../ports/member";



const MemberList: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  const loadMembers = async () => {
    setLoading(true);
    try {
      const members = await fetchMembers();
      setMembers(members);
    } catch (error) {
      console.error("Error fetching members:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadMembers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        <h2>Member List</h2>
        <ul>
          {members.map(member => (
              <MemberComponent key={member.id} {...member} />
          ))}
        </ul>
      </div>
  );
};

export default MemberList;