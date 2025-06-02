// Types for work experience data model

export type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance' | 'volunteer';

export type RoleLevel =
  | 'entry'
  | 'junior'
  | 'mid'
  | 'senior'
  | 'staff'
  | 'principal'
  | 'lead'
  | 'manager'
  | 'director'
  | 'vp'
  | 'c-level';

export type CompanySize = 'startup' | 'small' | 'medium' | 'large' | 'enterprise';

export type Industry =
  | 'technology'
  | 'finance'
  | 'healthcare'
  | 'education'
  | 'retail'
  | 'manufacturing'
  | 'consulting'
  | 'media'
  | 'non-profit'
  | 'government'
  | 'other';

export interface Company {
  id: string;
  name: string;
  description?: string;
  industry: Industry;
  size: CompanySize;
  location: string;
  website?: string;
  logo?: string;
}

export interface Role {
  id: string;
  title: string;
  level: RoleLevel;
  department?: string;
  startDate: Date;
  endDate?: Date; // undefined if current role
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  skills: string[];
  // Metrics/quantifiable achievements
  metrics?: {
    description: string;
    value: string; // e.g., "50%", "$2M", "10,000 users"
  }[];
}

export interface WorkStint {
  id: string;
  company: Company;
  employmentType: EmploymentType;
  startDate: Date;
  endDate?: Date; // undefined if currently employed
  location: string; // Can be different from company HQ
  isRemote: boolean;
  roles: Role[]; // Multiple roles during this stint
  // Overall stint information
  keyAccomplishments: string[];
  reasonForLeaving?: string;
  wouldRecommend: boolean;
  notes?: string;
}

export interface WorkExperience {
  stints: WorkStint[];
  totalYearsExperience: number;
  skills: {
    technical: string[];
    soft: string[];
    certifications: string[];
  };
  summary: string;
}

// Helper functions for working with the data

export function getCurrentRole(stint: WorkStint): Role | undefined {
  return stint.roles.find((role) => !role.endDate);
}

export function getCurrentStint(experience: WorkExperience): WorkStint | undefined {
  return experience.stints.find((stint) => !stint.endDate);
}

export function getTotalExperienceYears(stints: WorkStint[]): number {
  const totalMs = stints.reduce((total, stint) => {
    const start = stint.startDate.getTime();
    const end = stint.endDate ? stint.endDate.getTime() : Date.now();
    return total + (end - start);
  }, 0);

  return Math.round((totalMs / (1000 * 60 * 60 * 24 * 365)) * 10) / 10; // Round to 1 decimal
}

export function getRolesByCompany(experience: WorkExperience, companyId: string): Role[] {
  const stint = experience.stints.find((s) => s.company.id === companyId);
  return stint ? stint.roles : [];
}

export function getAllTechnologies(experience: WorkExperience): string[] {
  const technologies = new Set<string>();

  experience.stints.forEach((stint) => {
    stint.roles.forEach((role) => {
      role.technologies.forEach((tech) => technologies.add(tech));
    });
  });

  return Array.from(technologies).sort();
}

export function getExperienceByDateRange(experience: WorkExperience, startDate: Date, endDate: Date): WorkStint[] {
  return experience.stints.filter((stint) => {
    const stintStart = stint.startDate;
    const stintEnd = stint.endDate || new Date();

    return stintStart <= endDate && stintEnd >= startDate;
  });
}

// Sample data structure for reference
export const sampleWorkExperience: WorkExperience = {
  stints: [
    {
      id: 'stint-1',
      company: {
        id: 'company-1',
        name: 'Tech Corp',
        description: 'Leading technology company',
        industry: 'technology',
        size: 'large',
        location: 'San Francisco, CA',
        website: 'https://techcorp.com',
      },
      employmentType: 'full-time',
      startDate: new Date('2020-01-01'),
      endDate: new Date('2023-06-01'),
      location: 'San Francisco, CA',
      isRemote: false,
      roles: [
        {
          id: 'role-1',
          title: 'Software Engineer',
          level: 'mid',
          department: 'Engineering',
          startDate: new Date('2020-01-01'),
          endDate: new Date('2022-01-01'),
          description: 'Developed web applications using React and Node.js',
          responsibilities: [
            'Built responsive web applications',
            'Collaborated with cross-functional teams',
            'Mentored junior developers',
          ],
          achievements: ['Improved application performance by 40%', 'Led migration to TypeScript'],
          technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
          skills: ['Frontend Development', 'Backend Development', 'Team Leadership'],
          metrics: [
            { description: 'Performance improvement', value: '40%' },
            { description: 'Code coverage increase', value: '85%' },
          ],
        },
        {
          id: 'role-2',
          title: 'Senior Software Engineer',
          level: 'senior',
          department: 'Engineering',
          startDate: new Date('2022-01-01'),
          endDate: new Date('2023-06-01'),
          description: 'Led development of core platform features',
          responsibilities: [
            'Architected scalable backend systems',
            'Led technical design reviews',
            'Managed team of 4 engineers',
          ],
          achievements: ['Designed microservices architecture', 'Reduced system latency by 60%'],
          technologies: ['Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
          skills: ['System Architecture', 'Team Management', 'DevOps'],
          metrics: [
            { description: 'Latency reduction', value: '60%' },
            { description: 'Team productivity increase', value: '30%' },
          ],
        },
      ],
      keyAccomplishments: [
        'Successfully delivered 3 major product releases',
        'Mentored 5 junior engineers to promotion',
      ],
      reasonForLeaving: 'Career growth opportunity',
      wouldRecommend: true,
      notes: 'Great learning experience with excellent team culture',
    },
  ],
  totalYearsExperience: 3.5,
  skills: {
    technical: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'],
    soft: ['Leadership', 'Communication', 'Problem Solving', 'Mentoring'],
    certifications: ['AWS Solutions Architect', 'Scrum Master'],
  },
  summary: 'Full-stack software engineer with 3.5 years of experience building scalable web applications',
};
