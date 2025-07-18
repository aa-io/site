import { describe, expect, it } from 'vitest';
import { WorkRow } from '@/app/components/work-row';
import { WorkExperience } from '@/data/work';
import { render, screen } from '@testing-library/react';

// Mock data for testing
const mockWorkExperience: WorkExperience = {
  company: 'Test Company',
  logo: '/img/logos/test.png',
  roles: [
    {
      title: 'Software Engineer',
      subtitle: 'Frontend Team',
      startDate: '2023',
      endDate: '2024',
    },
    {
      title: 'Senior Software Engineer',
      startDate: '2024',
    },
  ],
};

const mockWorkExperienceWithSlug: WorkExperience = {
  company: 'Test Company',
  logo: '/img/logos/test.png',
  slug: 'test-company',
  roles: [
    {
      title: 'Software Engineer',
      startDate: '2023',
    },
  ],
};

describe('WorkRow component', () => {
  it('should render company name and logo', () => {
    render(<WorkRow {...mockWorkExperience} />);

    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByAltText('Test Company')).toBeInTheDocument();
  });

  it('should render all roles', () => {
    render(<WorkRow {...mockWorkExperience} />);

    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
  });

  it('should render role subtitles when provided', () => {
    render(<WorkRow {...mockWorkExperience} />);

    expect(screen.getByText('Frontend Team')).toBeInTheDocument();
  });

  it('should render date ranges correctly', () => {
    render(<WorkRow {...mockWorkExperience} />);

    // Check for date ranges
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('24')).toBeInTheDocument(); // End date shortened
  });

  it('should render current role without end date', () => {
    render(<WorkRow {...mockWorkExperience} />);

    // The current role should show a dash but no end date
    const currentRoleElement = screen.getByText('Senior Software Engineer').closest('div');
    expect(currentRoleElement).toBeInTheDocument();
  });

  it('should render as a link when slug is provided', () => {
    render(<WorkRow {...mockWorkExperienceWithSlug} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/work/test-company');
  });

  it('should render as a div when no slug is provided', () => {
    render(<WorkRow {...mockWorkExperience} />);

    // Should not render as a link when no slug
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should apply invertDark class when specified', () => {
    render(<WorkRow {...mockWorkExperience} invertDark />);

    const logoElement = screen.getByAltText('Test Company');
    expect(logoElement).toHaveClass('dark:invert');
  });
});
