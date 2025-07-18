import { describe, expect, it } from 'vitest';
import { WorkExperience, WorkExperienceRole, workItems } from '@/data/work';

describe('Work data validation', () => {
  it('should have valid work items array', () => {
    expect(workItems).toBeInstanceOf(Array);
    expect(workItems.length).toBeGreaterThan(0);
  });

  it('should have valid work experience structure', () => {
    workItems.forEach((workItem: WorkExperience) => {
      // Required fields
      expect(workItem).toHaveProperty('company');
      expect(workItem).toHaveProperty('logo');
      expect(workItem).toHaveProperty('roles');

      // Company should be a non-empty string
      expect(typeof workItem.company).toBe('string');
      expect(workItem.company.length).toBeGreaterThan(0);

      // Logo should be a non-empty string
      expect(typeof workItem.logo).toBe('string');
      expect(workItem.logo.length).toBeGreaterThan(0);

      // Roles should be an array with at least one item
      expect(workItem.roles).toBeInstanceOf(Array);
      expect(workItem.roles.length).toBeGreaterThan(0);

      // Optional fields
      if (workItem.slug) {
        expect(typeof workItem.slug).toBe('string');
        expect(workItem.slug.length).toBeGreaterThan(0);
      }

      if (workItem.invertDark !== undefined) {
        expect(typeof workItem.invertDark).toBe('boolean');
      }
    });
  });

  it('should have valid role structure', () => {
    workItems.forEach((workItem: WorkExperience) => {
      workItem.roles.forEach((role: WorkExperienceRole) => {
        // Required fields
        expect(role).toHaveProperty('title');
        expect(role).toHaveProperty('startDate');

        // Title should be a non-empty string
        expect(typeof role.title).toBe('string');
        expect(role.title.length).toBeGreaterThan(0);

        // StartDate should be a valid year string
        expect(typeof role.startDate).toBe('string');
        expect(role.startDate).toMatch(/^\d{4}$/);

        // Optional fields
        if (role.subtitle) {
          expect(typeof role.subtitle).toBe('string');
          expect(role.subtitle.length).toBeGreaterThan(0);
        }

        if (role.endDate) {
          expect(typeof role.endDate).toBe('string');
          expect(role.endDate).toMatch(/^\d{4}$/);
        }
      });
    });
  });

  it('should have valid date ranges', () => {
    workItems.forEach((workItem: WorkExperience) => {
      workItem.roles.forEach((role: WorkExperienceRole) => {
        const startYear = parseInt(role.startDate);

        // Start date should be reasonable (after 1990, not in future)
        expect(startYear).toBeGreaterThan(1990);
        expect(startYear).toBeLessThanOrEqual(new Date().getFullYear());

        if (role.endDate) {
          const endYear = parseInt(role.endDate);

          // End date should be reasonable
          expect(endYear).toBeGreaterThan(1990);
          expect(endYear).toBeLessThanOrEqual(new Date().getFullYear());

          // End date should be after or equal to start date
          expect(endYear).toBeGreaterThanOrEqual(startYear);
        }
      });
    });
  });

  it('should have valid logo paths', () => {
    workItems.forEach((workItem: WorkExperience) => {
      // Logo should start with /img/logos/
      expect(workItem.logo).toMatch(/^\/img\/logos\/.+\.(png|jpg|jpeg|svg)$/);
    });
  });

  it('should have unique company names', () => {
    const companyNames = workItems.map((item) => item.company);
    const uniqueNames = [...new Set(companyNames)];
    expect(companyNames.length).toBe(uniqueNames.length);
  });

  it('should have unique slugs when provided', () => {
    const slugs = workItems.filter((item) => item.slug).map((item) => item.slug);
    const uniqueSlugs = [...new Set(slugs)];
    expect(slugs.length).toBe(uniqueSlugs.length);
  });

  it('should have at least one current role (no end date)', () => {
    const hasCurrentRole = workItems.some((workItem) => workItem.roles.some((role) => !role.endDate));
    expect(hasCurrentRole).toBe(true);
  });
});
