import React, { ReactNode } from 'react';

interface NavContainer {
  children: ReactNode;
}
function NavContainer(props: NavContainer) {
  const { children } = props;
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white flex items-center justify-end">
      {children}
    </div>
  );
}

export default NavContainer;
