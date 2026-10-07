interface IPropsListTitle {
  children: string;
}

export default function ListTitle({ children }: IPropsListTitle) {
  return <p className="text-2xl font-semibold font-sans">{children}</p>;
}
