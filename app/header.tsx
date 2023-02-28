'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/todo.png';
import { useLoginContext } from '@/lib/context/loginContext';

export default function Header() {
  const { isLoggedIn } = useLoginContext();

  return (
    <header className="bg-gradient-to-r from-[#2c2972] to-[#642254]">
      <nav className="py-5">
        <div className=" container mx-auto flex items-center justify-between">
          <Link href="/">
            <Image className="w-10" alt="logo" src={logo}></Image>
          </Link>
          <div className="flex justify-end gap-4 pr-2">
            {!isLoggedIn ? (
              <>
                <Link href="/users/login">Login</Link>
                <Link href="/users/signup">Signup</Link>
              </>
            ) : (
              <Link href="/users/signup">Logout</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
