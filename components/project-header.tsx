import Image from 'next/image';
import { companies } from '@/lib/work-experience-data';

interface ProjectHeaderProps {
  companyId: string;
}

export function ProjectHeader({ companyId }: ProjectHeaderProps) {
  const company = companies.find((c) => c.id === companyId);

  if (!company) return null;

  return (
    <div className="mb-8 flex items-center gap-4">
      {company.logo && (
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          width={60}
          height={60}
          className="rounded-md object-contain"
          style={{ viewTransitionName: `company-logo-${company.id}` } as React.CSSProperties}
        />
      )}
      <div>
        <h1 className="text-3xl font-bold">{company.name}</h1>
        <p className="text-muted-foreground">{company.description}</p>
      </div>
    </div>
  );
}
