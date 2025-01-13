import { collection, getDocs, orderBy, query, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.ts";
import { Member, NewMember } from "../../ports/memberTypes.ts";
import { Announcement, NewAnnouncement} from "../../ports/announcementTypes.ts";

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

export const addAnnouncement = async (announcement: NewAnnouncement): Promise<void> => {
  await addDoc(collection(db, "announcements"), announcement);
};

export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  const announcementQuery = query(
      collection(db, "announcements")
  );
  const querySnapshot = await getDocs(announcementQuery);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Announcement[];
};
