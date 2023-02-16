import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  UserCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { colorInterface, navLink } from './navInterfaces';
import NavButton from './navButton';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function TopNav(props: {
  navigation: navLink[];
  colorPalette: colorInterface;
  logo?: React.ReactNode;
}) {
  const { navigation, colorPalette, logo } = props;
  const userLinks = [
    { name: 'Profile', link: '#' },
    { name: 'Settings', link: '/settings' },
    { name: 'Logout', link: '#' },
  ];
  const mobileNavPanel = (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.link}
            className={`${
              item.active
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            } block px-3 py-2 rounded-md text-base font-medium`}
            aria-current={item.active ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  );
  const mobileButton = (open: boolean) => {
    return (
      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    );
  };

  const bannerText = (
    <p className="inline-flex align-text-top">
      <ExclamationTriangleIcon className="h-4 mr-1" aria-hidden="true" />
      We are experiencing some technical difficulties right now. Please try
      again later.
    </p>
  );
  const banner = (
    <div
      className={`mx-auto px-2 py-1 sm:px-6 lg:px-8 ${
        colorPalette?.object?.color || 'sky'
      } text-xs ${colorPalette?.object?.text || 'white'}`}
    >
      {bannerText}
    </div>
  );
  const userMenuItem = (item: navLink) => {
    return (
      <Menu.Item key={item.name}>
        {({ active }) => (
          <a
            href={item.link}
            className={classNames(
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700'
            )}
          >
            {item.name}
          </a>
        )}
      </Menu.Item>
    );
  };

  return (
    <Fragment>
      {banner}
      <Disclosure as="nav" className="bg-slate-800">
        {({ open }) => (
          <Fragment>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {mobileButton(open)}
                </div>
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {logo ? logo : ''}
                  </div>
                  <div className="hidden md:ml-6 md:block">
                    <div className="flex space-x-4">
                      {navigation.map((item, i) => <NavButton item={item} key={i} regularStyles='text-white border-b-2 border-transparent hover:border-b-white' activeStyles={`${colorPalette.text} font-bold  ${colorPalette.inverted.color} border-b-2`}/>)}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex text-white bg-gray-800 text-sm">
                        <span className="sr-only">Open user menu</span>
                        <UserCircleIcon
                          className="block h-5 w-6"
                          aria-hidden="true"
                        />
                        <span className=" border-b-2 border-transparent hover:border-b-white focus:border-b-white">
                          Sam
                        </span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userLinks.map((navItem) => userMenuItem(navItem))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            {mobileNavPanel}
          </Fragment>
        )}
      </Disclosure>
    </Fragment>
  );
}
