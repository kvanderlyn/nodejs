import React, { ReactNode, useState, useEffect } from 'react';

interface ButtonProps {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}
function OutlineButton(props: ButtonProps) {
  const { children, type, href } = props;
  const classList =
    'rounded-md border-2 border-orange-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300';

  if (href) {
    return (
      <a className={classList} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classList} type={type ? type : 'button'}>
        {children}
      </button>
    );
  }
}

export default OutlineButton;
