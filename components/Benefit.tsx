import { ReactNode } from 'react';

export interface IBenefit {
  icon?: ReactNode;
  title: string;
  description: string;
}

const Benefit = ({ ...props }: IBenefit) => {
  return (
    <div className="text-center">
      {props.icon ? <div className="mb-4">{props.icon}</div> : null}
      <p className="text-xl mb-4 font-bold">{props.title}</p>
      <p className="md:w-1/2 md:mx-auto">{props.description}</p>
    </div>
  );
};

export default Benefit;
