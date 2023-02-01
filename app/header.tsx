import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/todo.png';

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-[#2c2972] to-[#642254]'>
      <nav className="py-5">
        <div className=" container mx-auto flex items-center justify-between">
          <Link href="/">
            <Image className="w-10" alt="logo" src={logo}></Image>
          </Link>
          <div className="flex justify-end gap-4 pr-2">
            <Link href="/todos">Todos</Link>
            <Link href="/todos">Todos</Link>
            <Link href="/todos">Todos</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
