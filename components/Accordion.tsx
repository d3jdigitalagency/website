import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { ReactNode, useState } from 'react';

export interface IAccordion {
  title: string;
  children: ReactNode;
}

const Accordion = ({ ...props }: IAccordion) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="mb-4 border-b-2 border-black">
      <div
        className="flex justify-between mb-4 font-bold cursor-pointer"
        onClick={() => setOpened(!opened)}
      >
        <p>{props.title}</p>
        {opened ? (
          <ChevronUpIcon className="w-6 h-6" />
        ) : (
          <ChevronDownIcon className="w-6 h-6" />
        )}
      </div>
      <div
        className={`flex flex-col gap-4 pb-4 ${!opened ? 'hidden' : 'block'}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
