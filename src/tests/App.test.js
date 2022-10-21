import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('testando',() => {
  test('testa a chamada da api', async() => {
    render(<App />);
    const api = jest.fn()
    api()
    expect(api).toHaveBeenCalled()
  });

  test('testa se os inputs aparecem na tela', async() => {
    render(<App />);
    const nameInput = screen.getByRole('textbox', {  name: /nome:/i})
    const colunaInput = screen.getByTestId('column-filter');
    const operadorInput = screen.getByRole('combobox', {  name: /operador/i});
    const numberInput = screen.getByRole('spinbutton');
    
    userEvent.type(nameInput, 'Tatooine')
    userEvent.type(colunaInput, 'population')
    userEvent.type(operadorInput, 'maior que')
    userEvent.type(numberInput, '0')
 
    
        expect(nameInput).toBeInTheDocument();
    expect(colunaInput).toBeInTheDocument();
    expect(operadorInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
    

    expect(nameInput).toHaveValue('Tatooine');
    expect(colunaInput).toHaveValue('population')
    expect(operadorInput).toHaveValue('maior que')
    expect(numberInput).toHaveValue(0);

   
  });

  test('testa o botão de filtro', async() => {
    render(<App />)
    const colunaInput = screen.getByTestId('column-filter');
    const operadorInput = screen.getByTestId('comparison-filter')
    const numberInput = screen.getByRole('spinbutton')

    userEvent.selectOptions(colunaInput, 'diameter')
    userEvent.selectOptions(operadorInput, 'menor que')
    userEvent.type(numberInput, '250')

    expect(colunaInput).toHaveValue('diameter')
    expect(operadorInput).toHaveValue('menor que')
    expect(numberInput).toHaveValue(250);

    const button = screen.getByRole('button', {  name: /filtrar/i});

    userEvent.click(button);

    const planet = await screen.findByText(/Tatooine/i, {}, {timeout: 4000 })

    expect(planet).toBeInTheDocument();

    userEvent.selectOptions(colunaInput, 'rotation_period')
    userEvent.selectOptions(operadorInput, 'menor que')
    userEvent.type(numberInput, '400')
    userEvent.click(button);

    userEvent.selectOptions(colunaInput, 'surface_water');
    userEvent.selectOptions(operadorInput, 'maior que');
    userEvent.type(numberInput, '700');
    userEvent.click(button);

    userEvent.selectOptions(colunaInput, 'orbital_period');
    userEvent.selectOptions(operadorInput, 'igual a');
    userEvent.type(numberInput, '300');
    userEvent.click(button);
    
    expect(operadorInput).toHaveValue('igual a')
  });

})

