interface IPropsListText {
  children: string;
}
export default function ListText({ children }: IPropsListText) {
  return <p className="text-2xl font-semibold font-sans">{children}</p>;
}
