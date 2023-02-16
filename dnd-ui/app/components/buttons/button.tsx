import { ReactNode } from 'react';
import { colorConfig } from '~/utils/colorConfig';
import { button_colors } from '~/utils/enums';
import { colorInterface } from '../navigation/navInterfaces';


interface ButtonProps {
  children?: ReactNode;
  bgColor?: button_colors;
  className?: Object;
  primary?: colorInterface;
  type?: 'button' | 'submit' | 'reset';
  shape?: 'rounded' | 'rounded-full' | 'square';
  inverted?: boolean;
  borderless?: boolean;
}

export default function Button(props: ButtonProps) {
  const { children, bgColor, className, type, shape, inverted, borderless } = props;
  const buttonColor = getColor(bgColor)
  const buttonShape = shape ? shape : 'rounded-full'
  const buttonStyle = inverted ? 'inverted' : 'object'
  const hover = bgColor? colorConfig[bgColor][buttonStyle].hover : colorConfig.default[buttonStyle].hover
  const shadow = `drop-shadow-sm`
  const defaultStyles =className? className : `mx-2 px-4 ${buttonColor[buttonStyle].text} focus:ring-2 ring-offset-2 hover:text-white`
  return <button className={`${buttonColor[buttonStyle].color} ${borderless? '' : 'border-2'} ${shadow} ${buttonShape} ${defaultStyles} ${hover}`} type={type ? type : 'button'}>{props.children}</button>;
}

function getColor(bgColor: button_colors | undefined) {
  // if (bgColor === button_colors.primary || !bgColor) {
  //   return colorConfig.sky;
  // }
  if(bgColor !== undefined){
    return colorConfig[bgColor];
  } else {
    return colorConfig.default
  }
  
}
