'use client';
import { useLoginContext } from '@/lib/context/loginContext';
export default function Page() {
  const { isLoggedIn, userData } = useLoginContext();

	return (
    <>
      {isLoggedIn ? (
        <h1>Hello,{userData.username}!</h1>
      ) : (
        <h1>Hello, Please login or signup!</h1>
      )}
    </>
  );
}
