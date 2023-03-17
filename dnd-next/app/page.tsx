import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import bgImage from '../public/images/dungeons-deep.jpg';
import logo from '../public/logos/stacked_white.svg';
import OutlineButton from './components/buttons/OutlineButton';
import NavContainer from './components/topNav/container';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="w-full relative">
      <Image
        alt="Adventurer looks to the horizon where dragons circle the ancient keep"
        src={bgImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        className="bg-center z-0"
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="relative pt-6 px-6 lg:px-8">
        <NavContainer>
          <OutlineButton href="/dashboard">Login</OutlineButton>
        </NavContainer>

        <div className="mx-auto max-w-2xl py-32 sm:py-64 lg:py-56">
          <div>
            <Image alt="Logo" height={150} src={logo} quality={100} />
            <p className="px-2 py-1 mt-6 text-lg leading-8 text-gray-300 ">
              <span className="bg-black p-2">
                A new way to manage your characters and campaigns.
              </span>
              <br />
              <span className="bg-black p-2">
                Your books, your game, your way.
              </span>
            </p>
            <div className="mt-10  flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md border-2 border-orange-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
              >
                Get started
              </a>
              <a
                href="#about"
                className="text-base border-b-2 border-transparent font-semibold leading-7 text-gray-100 hover:border-white"
              >
                Learn more <span aria-hidden="true">🠣</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
