import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

interface AuthUser {
  uid: string;
  email: string | null;
}

export const signIn = async (email: string, password: string): Promise<AuthUser> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  return {
    uid: user.uid,
    email: user.email,
  };
};