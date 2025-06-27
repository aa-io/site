export const LicenseRow = ({
  entity,
  name,
  credential,
  number,
}: {
  entity: string;
  name: string;
  credential: string;
  number: string;
}) => {
  return (
    <div className="group/license text-foreground/65 flex flex-col py-1.5 text-sm leading-relaxed">
      <div className="group-hover/mention:text-foreground grow gap-1.5 md:flex">
        <div className="line-clamp-1 truncate">{name}</div>
      </div>

      <div className="text-muted-foreground flex shrink-0 grow-0 gap-1 tabular-nums">
        <div className="text-muted-foreground grow truncate opacity-65">{entity}</div>
        <div className="flex shrink-0 gap-1">
          <div className="opacity-65">{credential}</div> <div className="line-clamp-1">{number}</div>
        </div>
      </div>
    </div>
  );
};
