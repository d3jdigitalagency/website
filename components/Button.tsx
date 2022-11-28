export interface IButton {
  label: string;
  onClick?: () => void;
}

const Button = ({ ...props }: IButton) => {
  return (
    <div>
      <button
        type="button"
        className="py-2 px-8 text-left bg-white border border-b-4 border-black rounded hover:bg-gray-200 transition-colors"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
