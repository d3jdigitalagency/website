import { ReactNode } from 'react';
import Line from './Line';

export interface ISection {
  id: string;
  children?: ReactNode;
}

const Section = ({ ...props }: ISection) => {
  return (
    <div id={props.id} className="relative container py-20">
      {props.children}
      <Line />
    </div>
  );
};

export default Section;
