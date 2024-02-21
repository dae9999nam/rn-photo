import { getAuth, signInWithEmailPassword } from 'firebase/auth';

export const signIn = async ({ email, password }) => {
  const { user } = await signInWithEmailPassword(getAuth(), email, password);
  return user;
};
