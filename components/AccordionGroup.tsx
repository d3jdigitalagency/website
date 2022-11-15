import { ReactNode } from 'react';

export interface IAccordionGroup {
  children: ReactNode;
}

const AccordionGroup = ({ ...props }: IAccordionGroup) => {
  return <>{props.children}</>;
};

export default AccordionGroup;
