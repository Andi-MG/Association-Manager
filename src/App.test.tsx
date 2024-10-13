import { describe, it} from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App.tsx';

describe('App', () => {
  it('Render app name in its headline', () => {
    render(<App/>);
    const heading = screen.getByRole('heading', { name: 'Association manager' });
    expect(heading).toBeInTheDocument();
  });
});