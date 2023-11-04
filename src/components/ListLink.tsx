import Link from "next/link";

interface IPropsListLink {
  children: string;
  url: string;
}

export default function ListLink({
  children: description,
  url,
}: IPropsListLink) {
  return <Link className="text-blue-500 text-xl block" href={url}>{description}</Link>;
}
