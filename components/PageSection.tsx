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
    <div className={props.className + ' py-36 px-8 bg-noise'} id={props.id}>
      <div className="container flex flex-col gap-12">
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
    </div>
  );
};

export default PageSection;
