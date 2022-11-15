import { ReactNode } from 'react';

export interface IPageSection {
  className?: string;
  id: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageSection = ({ ...props }: IPageSection) => {
  return (
    <div
      className={props.className + ' flex flex-col gap-12 py-16 px-8 bg-noise'}
      id={props.id}
    >
      {props.title ? (
        <h2 className="font-primary text-4xl text-center">{props.title}</h2>
      ) : null}
      {props.subtitle ? (
        <p className="md:w-1/2 text-2xl md:mx-auto -mt-8 text-center">
          {props.subtitle}
        </p>
      ) : null}
      {props.children}
    </div>
  );
};

export default PageSection;
