import { ReactNode } from 'react';

export interface IBenefit {
  icon?: ReactNode;
  title?: string;
  description?: string;
}

const Benefit = ({ ...props }: IBenefit) => {
  return (
    <div className="text-center">
      {props.icon ? <div className="mb-4">{props.icon}</div> : null}
      {props.title ? (
        <p className="text-xl mb-4 font-bold">{props.title}</p>
      ) : null}
      {props.description ? <p>{props.description}</p> : null}
    </div>
  );
};

export default Benefit;
