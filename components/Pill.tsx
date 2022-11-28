export interface IPill {
  label: string;
}

const Pill = ({ ...props }: IPill) => {
  return (
    <div>
      <div className="inline-block py-1 px-3 text-sm uppercase border border-black rounded-full">
        {props.label}
      </div>
    </div>
  );
};

export default Pill;
