import { ReactNode } from 'react';
import { button_colors } from '~/utils/enums';

interface ButtonProps {
  children?: ReactNode;
  bgColor?: button_colors;
  className?: Object;
  type?: 'button' | 'submit' | 'reset';
  shape?: 'rounded' | 'pill' | 'square';
}

export default function Button(props: ButtonProps) {
  const { children, bgColor, className, type, shape } = props;
  const buttonColor = getColor(bgColor)
  return <button className={`${buttonColor} mx-2 px-2 py-1 text-white`} type={type ? type : 'button'}>{props.children}</button>;
}

function getColor(bgColor: button_colors | undefined) {
  const primary = 'bg-sky-500';
  if (bgColor === button_colors.primary || !bgColor) {
    return primary;
  }
  return bgColor;
}
