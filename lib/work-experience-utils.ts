import { Role, WorkExperience, WorkStint } from './work-experience';

// Formatting utilities for displaying work experience

export function formatDateRange(startDate: Date, endDate?: Date): string {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';

  return `${start} - ${end}`;
}

export function calculateDuration(startDate: Date, endDate?: Date): string {
  const end = endDate || new Date();
  const diffInMonths = Math.round((end.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30.44));

  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''}`;
  }

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  let duration = `${years} year${years !== 1 ? 's' : ''}`;
  if (months > 0) {
    duration += ` ${months} month${months !== 1 ? 's' : ''}`;
  }

  return duration;
}

export function formatRoleTitle(role: Role): string {
  const department = role.department ? ` - ${role.department}` : '';
  return `${role.title}${department}`;
}

export function formatCompanyInfo(stint: WorkStint): string {
  const location = stint.isRemote ? 'Remote' : stint.location;
  return `${stint.company.name} • ${location}`;
}

// Data transformation utilities

export function getResumeFormat(experience: WorkExperience): ResumeWorkExperience[] {
  return experience.stints.map((stint) => ({
    company: stint.company.name,
    location: stint.isRemote ? 'Remote' : stint.location,
    roles: stint.roles.map((role) => ({
      title: role.title,
      dateRange: formatDateRange(role.startDate, role.endDate),
      duration: calculateDuration(role.startDate, role.endDate),
      description: role.description,
      achievements: role.achievements,
      technologies: role.technologies,
    })),
    dateRange: formatDateRange(stint.startDate, stint.endDate),
    duration: calculateDuration(stint.startDate, stint.endDate),
    employmentType: stint.employmentType,
  }));
}

export interface ResumeWorkExperience {
  company: string;
  location: string;
  roles: {
    title: string;
    dateRange: string;
    duration: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }[];
  dateRange: string;
  duration: string;
  employmentType: string;
}

// Analysis utilities

export function getCareerProgression(experience: WorkExperience): CareerProgression[] {
  const allRoles = experience.stints.flatMap((stint) =>
    stint.roles.map((role) => ({
      ...role,
      company: stint.company.name,
      stint: stint,
    })),
  );

  return allRoles
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
    .map((role, index) => ({
      role: role.title,
      company: role.company,
      level: role.level,
      startDate: role.startDate,
      endDate: role.endDate,
      duration: calculateDuration(role.startDate, role.endDate),
      isPromotion: index > 0 && role.stint.id === allRoles[index - 1].stint.id,
      technologies: role.technologies,
      achievements: role.achievements,
    }));
}

export interface CareerProgression {
  role: string;
  company: string;
  level: string;
  startDate: Date;
  endDate?: Date;
  duration: string;
  isPromotion: boolean;
  technologies: string[];
  achievements: string[];
}

export function getTechnologyEvolution(experience: WorkExperience): TechnologyUsage[] {
  const techUsage = new Map<string, TechnologyUsage>();

  experience.stints.forEach((stint) => {
    stint.roles.forEach((role) => {
      role.technologies.forEach((tech) => {
        if (!techUsage.has(tech)) {
          techUsage.set(tech, {
            technology: tech,
            firstUsed: role.startDate,
            lastUsed: role.endDate || new Date(),
            roles: [],
            totalDuration: 0,
          });
        }

        const usage = techUsage.get(tech)!;
        usage.roles.push({
          title: role.title,
          company: stint.company.name,
          startDate: role.startDate,
          endDate: role.endDate,
        });

        // Update first and last used dates
        if (role.startDate < usage.firstUsed) {
          usage.firstUsed = role.startDate;
        }
        if ((role.endDate || new Date()) > usage.lastUsed) {
          usage.lastUsed = role.endDate || new Date();
        }

        // Calculate total duration
        const duration = (role.endDate || new Date()).getTime() - role.startDate.getTime();
        usage.totalDuration += duration;
      });
    });
  });

  return Array.from(techUsage.values())
    .map((tech) => ({
      ...tech,
      totalYears: Math.round((tech.totalDuration / (1000 * 60 * 60 * 24 * 365)) * 10) / 10,
    }))
    .sort((a, b) => b.totalYears - a.totalYears);
}

export interface TechnologyUsage {
  technology: string;
  firstUsed: Date;
  lastUsed: Date;
  roles: {
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date;
  }[];
  totalDuration: number;
  totalYears?: number;
}

// Search and filter utilities

export function searchExperience(experience: WorkExperience, query: string): WorkStint[] {
  const searchTerm = query.toLowerCase();

  return experience.stints.filter((stint) => {
    // Search in company information
    if (
      stint.company.name.toLowerCase().includes(searchTerm) ||
      stint.company.description?.toLowerCase().includes(searchTerm)
    ) {
      return true;
    }

    // Search in roles
    return stint.roles.some(
      (role) =>
        role.title.toLowerCase().includes(searchTerm) ||
        role.description.toLowerCase().includes(searchTerm) ||
        role.responsibilities.some((resp) => resp.toLowerCase().includes(searchTerm)) ||
        role.achievements.some((ach) => ach.toLowerCase().includes(searchTerm)) ||
        role.technologies.some((tech) => tech.toLowerCase().includes(searchTerm)) ||
        role.skills.some((skill) => skill.toLowerCase().includes(searchTerm)),
    );
  });
}

export function filterByTechnology(experience: WorkExperience, technology: string): WorkStint[] {
  return experience.stints.filter((stint) =>
    stint.roles.some((role) => role.technologies.some((tech) => tech.toLowerCase() === technology.toLowerCase())),
  );
}

export function filterByDateRange(experience: WorkExperience, startDate: Date, endDate: Date): WorkStint[] {
  return experience.stints.filter((stint) => {
    const stintStart = stint.startDate;
    const stintEnd = stint.endDate || new Date();

    return stintStart <= endDate && stintEnd >= startDate;
  });
}

// Validation utilities

export function validateWorkExperience(experience: WorkExperience): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check for overlapping stints
  const sortedStints = [...experience.stints].sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

  for (let i = 0; i < sortedStints.length - 1; i++) {
    const current = sortedStints[i];
    const next = sortedStints[i + 1];

    const currentEnd = current.endDate || new Date();
    if (currentEnd > next.startDate) {
      warnings.push(`Overlapping stints detected: ${current.company.name} and ${next.company.name}`);
    }
  }

  // Check for gaps in employment
  for (let i = 0; i < sortedStints.length - 1; i++) {
    const current = sortedStints[i];
    const next = sortedStints[i + 1];

    if (current.endDate) {
      const gapDays = (next.startDate.getTime() - current.endDate.getTime()) / (1000 * 60 * 60 * 24);
      if (gapDays > 30) {
        warnings.push(
          `Employment gap of ${Math.round(gapDays)} days between ${current.company.name} and ${next.company.name}`,
        );
      }
    }
  }

  // Validate role dates within stints
  experience.stints.forEach((stint) => {
    stint.roles.forEach((role) => {
      if (role.startDate < stint.startDate) {
        errors.push(`Role "${role.title}" at ${stint.company.name} starts before the stint`);
      }

      if (role.endDate && stint.endDate && role.endDate > stint.endDate) {
        errors.push(`Role "${role.title}" at ${stint.company.name} ends after the stint`);
      }
    });
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}
