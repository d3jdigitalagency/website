import Button from './Button';

export interface IPlan {
  title: string;
  subtitle: string;
  price: string;
  onClick: () => void;
}

const Plan = ({ ...props }: IPlan) => {
  return (
    <div className="grid gap-4 p-8 bg-white border border-b-4 border-black rounded">
      <p className="font-bold">{props.title}</p>
      <p className="text-3xl font-bold">
        £{props.price} <span className="text-sm">+ VAT</span>
      </p>
      <p className="-mt-2 text-sm text-gray-500">{props.subtitle}</p>
      <Button label="Get started" onClick={props.onClick} />
      <hr className="my-2" />
      <p className="font-bold">What&apos;s included</p>
      <ul className="list-disc pl-4">
        <li>Unlimited requests</li>
        <li>Unlimited support</li>
        <li>Unlimited users</li>
      </ul>
    </div>
  );
};

export default Plan;
