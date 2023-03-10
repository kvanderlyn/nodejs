import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import dice from '~/images/backgrounds/dice_bg.jpg';
import logo from '~/images/logos/stacked_white.svg';
import inlineLogo from '~/images/logos/inline_white.svg';
import TopNav from '~/components/navigation/topNav';
import { colorConfig } from '~/utils/colorConfig';
import { Link } from '@remix-run/react';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = (
    <TopNav
      navigation={[]}
      bgColor="bg-transparent"
      logo={
        <Link to={'/'}>
          <img className="h-6" src={inlineLogo} alt="campaign companion logo" />
        </Link>
      }
      colorPalette={colorConfig.red}
    />
  );

  return (
    <div className="h-screen w-screen bg-gray-900 overflow-auto">
      <div
        className="isolate bg-center bg-cover"
        style={{ backgroundImage: `url(${dice})` }}
      >
        {nav}
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="">
              <img src={logo} />
              <p className="px-2 py-1 mt-6 text-lg leading-8 text-gray-300 ">
                <span className="bg-black p-2">
                  A new way to manage your characters and campaigns.
                </span>
                <br />
                <span className="bg-black p-2">
                  Your books, your game, your way.
                </span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
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
      <main className='isolate text-white' style={{marginTop: '-100px'}}>
        <div className="mx-auto max-w-6xl pt-8 px-6 lg:px-8 bg-gray-900 rounded-tl-2xl h-80 py-3 border-2 border-b-0 border-r-0 border-orange-600">
          <a id="about">
          <h1 className="text-3xl font-thin">Why <em>Another</em> App?</h1>
          </a>
        </div>
      </main>
    </div>
  );
}
