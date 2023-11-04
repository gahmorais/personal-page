interface IPropsBigTitle {
  children: string;
}

export default function BigTitle({ children }: IPropsBigTitle) {
  return <h1 className="text-5xl text-blue-600">{children}</h1>;
}
