export interface INavigation {
  items: Array<INavigationItem>;
}

export interface INavigationItem {
  label: string;
  href: string;
}

const Navigation = ({ ...props }: INavigation) => {
  return (
    <ul className="flex gap-12">
      {props.items.map((item: INavigationItem, index) => {
        return (
          <li
            key={index}
            className="cursor-pointer"
            onClick={() => (window.location.href = item.href)}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
