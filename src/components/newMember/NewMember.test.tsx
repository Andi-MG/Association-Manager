import { describe, it} from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './NewMember.tsx';

describe('NewMember form', () => {
  it('has a field for the name', () => {
    render(<App/>);
    const inputField = screen.getByRole('textbox', { name: 'First Name:' });
    expect(inputField).toBeInTheDocument();
  });
  it('has a field for the last names', () => {
    render(<App/>);
    const inputField = screen.getByRole('textbox', { name: 'Last Name:' });
    expect(inputField).toBeInTheDocument();
  });
  it('has a field for the email', () => {
    render(<App/>);
    const inputField = screen.getByRole('textbox', { name: 'Email:' });
    expect(inputField).toBeInTheDocument();
  });
  it('has a button to create new members', () => {
    render(<App/>);
    const inputField = screen.getByRole('button', { name: 'Create Member' });
    expect(inputField).toBeInTheDocument();
  });
});