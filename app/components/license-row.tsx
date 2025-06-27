import Link from 'next/link';
import { IconArrowUpRight } from '@tabler/icons-react';

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
    <div className="group/license text-foreground/65 flex items-start gap-3 py-3 text-sm leading-relaxed">
      <div className="group-hover/mention:text-foreground grow gap-1.5 md:flex">
        <div className="line-clamp-1 truncate">{name}</div>
        <div className="text-muted-foreground truncate opacity-65">{entity}</div>
      </div>

      <div className="text-muted-foreground shrink-0 grow-0 text-right tabular-nums">
        {credential} {number}
      </div>
    </div>
  );
};
