interface IPropsListLink {
  children: string;
  url: string;
}

export default function ListLink({
  children: description,
  url,
}: IPropsListLink) {
  return (
    <a
      className="text-blue-500 text-xl block"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {description}
    </a>
  );
}
