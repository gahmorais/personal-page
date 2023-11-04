import { ReactNode } from "react";

interface IPropsListItem {
  children: ReactNode;
}

export default function ListItem({ children }: IPropsListItem) {
  return <li className="space-y-2">{children}</li>;
}
