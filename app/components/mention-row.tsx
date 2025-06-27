import Link from 'next/link';

export const MentionRow = ({
  link,
  title,
  date,
  description,
}: {
  link: string;
  title: string;
  date: string;
  description: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group/mention text-foreground/65 flex items-start gap-3 py-1.5 pr-3 text-sm"
    >
      <div className="shrink-0 grow-0">
        <div className="text-muted-foreground tabular-nums">{date}</div>
      </div>

      <div className=" "></div>
      <div className="flex grow gap-1.5">
        <div className="group-hover/mention:text-foreground leading-relaxed">
          <span>{title}</span>
          {description && <span className="text-muted-foreground ml-3 opacity-65">{description}</span>}
        </div>
      </div>
    </Link>
  );
};
