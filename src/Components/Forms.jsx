import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function Forms() {
  const {
    name,
    handleName,
    coluna,
    inpNumber,
    handleInpNumber,
    handleColuna,
    operador,
    filters,
    handleOperador,
    handleClick } = useContext(myContext);
  return (
    <>
      <form>
        <label htmlFor="nome">
          Nome:
          <input
            data-testid="name-filter"
            type="text"
            id="nome"
            value={ name }
            onChange={ handleName }
          />
        </label>
        Coluna
        <label htmlFor="select">
          <select
            name="column-filter"
            data-testid="column-filter"
            id="select"
            value={ coluna }
            onChange={ handleColuna }
          >
            <option name="column-filter" value="population">population</option>
            <option name="column-filter" value="orbital_period">orbital_period</option>
            <option name="column-filter" value="diameter">diameter</option>
            <option name="column-filter" value="rotation_period">rotation_period</option>
            <option name="column-filter" value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="select2">
          Operador
          <select
            name="comparison-filter"
            data-testid="comparison-filter"
            id="select2"
            value={ operador }
            onChange={ handleOperador }
          >
            <option name="comparison-filter" value="maior que">maior que</option>
            <option name="comparison-filter" value="menor que">menor que</option>
            <option name="comparison-filter" value="igual a">igual a</option>
          </select>
        </label>
        <input
          type="number"
          data-testid="value-filter"
          value={ inpNumber }
          onChange={ handleInpNumber }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>
      <div>
        {filters.map((el, i) => (
          <div key={ i }>
            <span>
              {el.coluna}
              <br />
              {el.operador}
              <br />
              {el.InpNumber}
            </span>
          </div>
        ))}
      </div>

    </>
  );
}
