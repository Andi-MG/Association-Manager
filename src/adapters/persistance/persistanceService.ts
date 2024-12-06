import { collection, getDocs, orderBy, query, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.ts";
import { Member, NewMember } from "../../ports/member";

export const fetchMembers = async (): Promise<Member[]> => {
  const membersQuery = query(
      collection(db, "members"),
      orderBy("lastName")
  );
  const querySnapshot = await getDocs(membersQuery);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Member[];
};

export const addMember = async (member: NewMember): Promise<void> => {
  await addDoc(collection(db, "members"), member);
};