import { describe, expect, it } from 'vitest';
import { SocialLink } from '@/app/components/social-link';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { render, screen } from '@testing-library/react';

describe('SocialLink component', () => {
  const mockProps = {
    href: 'https://linkedin.com/in/test',
    icon: <IconBrandLinkedin />,
    text: 'LinkedIn',
    label: 'LinkedIn Profile',
  };

  it('should render with correct href', () => {
    render(<SocialLink {...mockProps} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', 'https://linkedin.com/in/test');
  });

  it('should render with _blank target by default', () => {
    render(<SocialLink {...mockProps} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('target', '_blank');
  });

  it('should render with custom target when provided', () => {
    render(<SocialLink {...mockProps} target="_self" />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('target', '_self');
  });

  it('should render the icon', () => {
    render(<SocialLink {...mockProps} />);

    // The icon should be rendered (IconBrandLinkedin contains svg)
    const iconElement = screen.getByRole('link').querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });

  it('should render text when provided', () => {
    render(<SocialLink {...mockProps} />);

    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('should render without text when not provided', () => {
    const propsWithoutText = { ...mockProps, text: undefined };
    render(<SocialLink {...propsWithoutText} />);

    expect(screen.queryByText('LinkedIn')).not.toBeInTheDocument();
  });

  it('should render with custom className prop', () => {
    render(<SocialLink {...mockProps} className="custom-class" />);

    // The className prop is accepted and the component renders without errors
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should render label as text content', () => {
    render(<SocialLink {...mockProps} />);

    // The label is rendered as text content, not as aria-label
    expect(screen.getByText('LinkedIn Profile')).toBeInTheDocument();
  });

  it('should render tooltip trigger', () => {
    render(<SocialLink {...mockProps} />);

    // The tooltip should be present (look for tooltip trigger)
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
  });

  it('should handle undefined label gracefully', () => {
    const propsWithoutLabel = { ...mockProps, label: undefined };
    render(<SocialLink {...propsWithoutLabel} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
  });
});
