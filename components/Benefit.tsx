import { ReactNode } from 'react';

export interface IBenefit {
  icon: ReactNode;
  title: string;
  description: string;
}

const Benefit = ({ ...props }: IBenefit) => {
  return (
    <div className="text-center">
      <div className="mb-4">{props.icon}</div>
      <p className="mb-4 text-xl font-bold">{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Benefit;
