import Button from './Button';

export interface IPlan {
  title: string;
  price: string;
  disclaimer?: string;
  options?: Array<string>;
  onClick?: () => {};
}

const Plan = ({ ...props }: IPlan) => {
  return (
    <div className="flex flex-col gap-4 p-8 bg-white">
      <p className="font-primary text-2xl">{props.title}</p>
      <p className="font-bold text-4xl my-4">
        £{props.price} <span className="-ml-1 text-sm">+ VAT</span>
      </p>
      <p className="-mt-6 mb-4 text-sm text-gray-500">{props.disclaimer}</p>
      <div className="flex w-auto font-primary">
        <Button label="Get started" onClick={props.onClick} />
      </div>
      <div className="border-t my-4"></div>
      <div className="text-left">
        <p className="font-primary mb-4">What is included:</p>
        <ul className="list-disc pl-4">
          {props.options?.map((option, index) => {
            return <li key={index}>{option}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Plan;
