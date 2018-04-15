declare module "react-crossfade-image" {
  export interface CrossfadeImageProps {
    delay?: number;
    duration?: number;
    src: string;
    style?: { [key: string]: string };
  }
  export default class CrossfadeImage extends React.Component<CrossfadeImageProps> {
    constructor(props: CrossfadeImageProps);
    public render(): JSX.Element;
  }
}
