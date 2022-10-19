import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function Forms() {
  const { name, handleName } = useContext(myContext);
  return (
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
    </form>
  );
}
