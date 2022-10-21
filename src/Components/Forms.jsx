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
    handleClick,
    optionMap } = useContext(myContext);
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

            {optionMap.filter((e) => {
              const filtroColuna = filters.map((el) => el.coluna);
              return !filtroColuna.includes(e);
            }).map((e) => (<option key={ e } value={ e }>{e}</option>))}
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
