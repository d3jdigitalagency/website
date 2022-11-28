import { ReactNode } from 'react';

export interface IFeature {
  children?: ReactNode;
}

const Feature = ({ ...props }: IFeature) => {
  return (
    <div className="bg-gray-900 text-white border border-black rounded">
      {props.children}
    </div>
  );
};

export default Feature;
