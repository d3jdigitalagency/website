import Button from './Button';

export interface IPlan {
  title: string;
  description: string;
  price: string;
  options?: Array<string>;
  onClick?: () => {};
}

const Plan = ({ ...props }: IPlan) => {
  return (
    <div className="flex flex-col gap-4 p-8 border-8 border-black text-center">
      <p className="font-primary text-2xl">{props.title}</p>
      <p className="-mt-2">{props.description}</p>
      <p className="font-bold text-4xl my-4">
        £{props.price} <span className="-ml-1 text-sm">+ VAT</span>
      </p>
      <div className="lg:w-1/2 mx-auto font-primary">
        <Button label="Choose Plan" onClick={props.onClick} />
      </div>
      <div className="border-t my-4"></div>
      <div className="">
        <p className="font-primary mb-4">Included</p>
        {props.options?.map((option, index) => {
          return <div key={index}>{option}</div>;
        })}
      </div>
    </div>
  );
};

export default Plan;
