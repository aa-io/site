import { Building2, Calendar, ExternalLink, MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { WorkExperience, WorkStint } from '@/lib/work-experience';

interface WorkExperienceTimelineProps {
  experience: WorkExperience;
}

export function WorkExperienceTimeline({ experience }: WorkExperienceTimelineProps) {
  // Define which companies have dedicated project pages
  const availableProjectPages = ['catch', 'noyo'];

  // Sort stints by start date (most recent first)
  const sortedStints = [...experience.stints].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const formatDateRange = (start: Date, end?: Date) => {
    const startStr = formatDate(start);
    const endStr = end ? formatDate(end) : 'Present';
    return `${startStr} - ${endStr}`;
  };

  const getStintDuration = (stint: WorkStint): string => {
    const start = stint.startDate;
    const end = stint.endDate || new Date();
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);

    if (diffYears < 1) {
      const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
      return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    }

    const years = Math.floor(diffYears);
    const months = Math.ceil((diffYears - years) * 12);

    if (months === 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    }

    return `${years} year${years > 1 ? 's' : ''}, ${months} month${months > 1 ? 's' : ''}`;
  };

  return (
    <TooltipProvider>
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
          <p className="text-muted-foreground">
            {Math.round(experience.totalYearsExperience)} years of professional experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="bg-border absolute top-0 bottom-0 left-8 w-px" />

          <div className="space-y-12">
            {sortedStints.map((stint) => (
              <div key={stint.id} className="relative">
                {/* Timeline dot */}
                <div className="bg-primary border-background absolute left-6 h-5 w-5 rounded-full border-4 shadow-sm" />

                <div className="ml-16 space-y-6">
                  {/* Company header */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      {availableProjectPages.includes(stint.company.id) ?
                        <Link href={`/projects/${stint.company.id}`}>
                          <h3 className="hover:text-primary cursor-pointer text-xl font-semibold transition-colors">
                            {stint.company.name}
                          </h3>
                        </Link>
                      : <h3 className="text-xl font-semibold">{stint.company.name}</h3>}
                      {stint.company.website && (
                        <a
                          href={stint.company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Visit
                        </a>
                      )}
                    </div>

                    <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {stint.company.description}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {stint.location}
                        {stint.isRemote && ' (Remote)'}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDateRange(stint.startDate, stint.endDate)} • {getStintDuration(stint)}
                      </div>
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="space-y-4">
                    {stint.roles.map((role) => (
                      <div key={role.id} className="space-y-3 rounded-lg border p-4">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="font-medium">{role.title}</h4>
                            <div className="text-muted-foreground text-sm">
                              {formatDateRange(role.startDate, role.endDate)}
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm capitalize">
                            {role.level} • {role.department}
                          </p>
                        </div>

                        <p className="text-sm">{role.description}</p>

                        {role.achievements.length > 0 && (
                          <div className="space-y-2">
                            <h5 className="text-muted-foreground text-sm font-medium">Key Achievements</h5>
                            <ul className="list-inside list-disc space-y-1 pl-2 text-sm">
                              {role.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {role.technologies.length > 0 && (
                          <div className="space-y-2">
                            <h5 className="text-muted-foreground text-sm font-medium">Technologies</h5>
                            <div className="flex flex-wrap gap-1">
                              {role.technologies.map((tech, idx) => (
                                <Tooltip key={idx}>
                                  <TooltipTrigger asChild>
                                    <span className="bg-secondary text-secondary-foreground inline-flex items-center rounded-md px-2 py-1 text-xs">
                                      {tech}
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{tech}</p>
                                  </TooltipContent>
                                </Tooltip>
                              ))}
                            </div>
                          </div>
                        )}

                        {role.metrics && role.metrics.length > 0 && (
                          <div className="space-y-2">
                            <h5 className="text-muted-foreground text-sm font-medium">Impact</h5>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              {role.metrics.map((metric, idx) => (
                                <div
                                  key={idx}
                                  className="bg-muted/50 flex items-center justify-between rounded px-2 py-1 text-sm"
                                >
                                  <span className="text-muted-foreground">{metric.description}</span>
                                  <span className="font-medium">{metric.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Key accomplishments for the stint */}
                  {stint.keyAccomplishments.length > 0 && (
                    <div className="space-y-2">
                      <h5 className="text-muted-foreground text-sm font-medium">Overall Accomplishments</h5>
                      <ul className="list-inside list-disc space-y-1 pl-2 text-sm">
                        {stint.keyAccomplishments.map((accomplishment, idx) => (
                          <li key={idx}>{accomplishment}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills summary */}
        <div className="space-y-4 pt-8">
          <Separator />
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Skills & Expertise</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-muted-foreground text-sm font-medium">Technical Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {experience.skills.technical.slice(0, 15).map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary inline-flex items-center rounded-md px-2 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {experience.skills.technical.length > 15 && (
                    <span className="bg-muted text-muted-foreground inline-flex items-center rounded-md px-2 py-1 text-xs">
                      +{experience.skills.technical.length - 15} more
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-muted-foreground text-sm font-medium">Leadership & Soft Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {experience.skills.soft.slice(0, 10).map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-secondary text-secondary-foreground inline-flex items-center rounded-md px-2 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {experience.skills.soft.length > 10 && (
                    <span className="bg-muted text-muted-foreground inline-flex items-center rounded-md px-2 py-1 text-xs">
                      +{experience.skills.soft.length - 10} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {experience.skills.certifications.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-muted-foreground text-sm font-medium">Certifications & Recognition</h4>
                <div className="flex flex-wrap gap-1">
                  {experience.skills.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="bg-accent text-accent-foreground inline-flex items-center rounded-md px-2 py-1 text-xs"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
