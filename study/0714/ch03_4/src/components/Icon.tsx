import type { FC } from "react";

export type IconProps = {
  name: string;
  style?: React.CSSProperties;
  className?: string;
};

// export const Icon: FC<IconProps> = (props) => {
//   return <span className="material-icons" />;
// };

export const Icon: FC<IconProps> = ({ name, style }) => {
  return (
    <span className="material-icons" style={style}>
      {name}
    </span>
  );
};
