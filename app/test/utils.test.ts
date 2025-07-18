import { describe, expect, it } from 'vitest';
import { cn } from '@/app/components/ui/utils';

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    const isDisabled = false;
    expect(cn('base-class', isActive && 'conditional-class')).toBe('base-class conditional-class');
    expect(cn('base-class', isDisabled && 'conditional-class')).toBe('base-class');
  });

  it('should handle conflicting Tailwind classes', () => {
    expect(cn('px-4', 'px-8')).toBe('px-8');
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('should handle undefined and null values', () => {
    expect(cn('base-class', undefined, null)).toBe('base-class');
  });

  it('should handle arrays of classes', () => {
    expect(cn(['px-4', 'py-2'], 'text-center')).toBe('px-4 py-2 text-center');
  });

  it('should handle empty input', () => {
    expect(cn()).toBe('');
  });

  it('should handle objects with boolean values', () => {
    expect(
      cn({
        active: true,
        disabled: false,
        visible: true,
      }),
    ).toBe('active visible');
  });
});
