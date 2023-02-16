import { navLink } from './navInterfaces';

interface NavButtonProps {
  item: navLink;
  activeStyles?: string;
  regularStyles?: string;
  rounded?: boolean;
}

export default function NavButton(props: NavButtonProps) {
  const { item, activeStyles, regularStyles, rounded } = props;
  const active = activeStyles ? activeStyles : 'bg-gray-900 text-white';
  const inactive = regularStyles
    ? regularStyles
    : 'text-gray-300 hover:bg-gray-700 hover:text-white font-medium';
  return (
    <a
      key={item.name}
      href={item.link}
      className={` px-3 py-2  ${rounded ? 'rounded-md' : ''} text-sm ${
        item.active ? active : inactive
      }`}
      aria-current={item.active ? 'page' : undefined}
    >
      {item.name}
    </a>
  );
}
