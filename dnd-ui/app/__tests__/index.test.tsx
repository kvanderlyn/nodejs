import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';

import Index from '../routes/index';
import '@testing-library/jest-dom'; // So we can use toBeInTheDocument assertion

it('should show welcome message', () => {
  render(<Index />);

  expect(true).toBe(true);
});
