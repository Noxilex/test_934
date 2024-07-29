import React from 'react';
import { render, screen } from '@testing-library/react';
import Pizzerias from './PizzeriaTable';

describe('Pizzerias table', () => {
  it('should render without crashing', () => {
    render(<Pizzerias />);
  });

  it('should render the correct number of columns', () => {
    
  });

  it('should contain pizzerias with data for the selected year', () => {
    
  })

  it('should have a yearly CA equal to the sum of all months per row', () => {

  })

  it('should have a mean yearly CA equal to the sum of all yearly CA divided by the number of pizzerias', () => {
    
  })
});