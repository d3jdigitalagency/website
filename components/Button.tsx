export interface IButton {
  label: string;
  type?: 'primary' | 'secondary';
  onClick?: () => {};
}

const Button = ({ ...props }: IButton) => {
  function getButtonClass() {
    let buttonClass = 'py-4 px-8 cursor-pointer font-primary ';
    switch (props.type) {
      case 'primary':
      default:
        buttonClass += 'bg-primary text-black';
        break;
      case 'secondary':
        buttonClass += 'bg-black text-white';
        break;
    }
    return buttonClass;
  }

  return (
    <div className={getButtonClass()} onClick={props.onClick}>
      {props.label}
    </div>
  );
};

export default Button;
