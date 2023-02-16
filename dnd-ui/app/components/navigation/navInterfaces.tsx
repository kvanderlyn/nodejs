export interface navLink {
  name: string;
  link: string;
  active?: boolean;
}

export interface colorInterface {
  object:{color: string, text: string, hover: string},
  inverted:{color: string, text: string, hover: string},
  text:string
}