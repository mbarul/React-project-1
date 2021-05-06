import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('FormField', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <Dashboard />
        <AddUser />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Marek' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '39%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '2.3' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Marek');
  });
});
