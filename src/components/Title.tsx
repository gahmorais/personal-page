interface IPropsTitle {
  children: string;
}

export default function Title({ children }: IPropsTitle) {
  return <h1 className="text-5xl text-blue-600">{children}</h1>;
}
