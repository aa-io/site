export const Role = ({
  title,
  subtitle,
  startDate,
  endDate,
}: {
  title: string;
  subtitle?: string;
  startDate: string;
  endDate?: string;
}) => {
  const willShowEndDate = endDate && endDate !== startDate;
  const isCurrentRole = !endDate;
  return (
    <div key={title} className="flex justify-between gap-1 py-1 first:pt-0 last:pb-0">
      <div className="flex gap-2">
        <div className="font-medium">{title}</div>
        {subtitle && <div className="text-muted-foreground hidden sm:block">{subtitle}</div>}
      </div>
      <div className="text-muted-foreground flex w-24 gap-0.5 tabular-nums">
        <div>{startDate}</div>
        {(isCurrentRole || willShowEndDate) && <div>–</div>}
        {willShowEndDate && <div>{endDate?.slice(2, 4)}</div>}
      </div>
    </div>
  );
};

export const WorkRow = ({
  company,
  logo,
  roles,
}: {
  company: string;
  logo: string;
  roles: Array<{
    title: string;
    subtitle?: string;
    startDate: string;
    endDate?: string;
  }>;
}) => {
  return (
    <div className="flex cursor-default flex-col items-start gap-3 border-t-[0.5px] py-4 transition-all md:flex-row">
      <div className="flex w-30 items-center gap-3">
        <img src={logo} alt={company} className="h-4 w-4" />
        <h3 className="font-medium">{company}</h3>
      </div>
      <div className="flex grow flex-col self-stretch">
        {roles.map((role) => (
          <Role key={role.title} {...role} />
        ))}
      </div>
    </div>
  );
};
