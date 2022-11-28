import { ReactNode } from 'react';

export interface IBanner {
  children?: ReactNode;
}

const Banner = ({ ...props }: IBanner) => {
  return (
    <div className="p-4 bg-black text-white text-center text-sm">
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Banner;
