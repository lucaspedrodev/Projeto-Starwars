import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import myContext from './myContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [coluna, setColuna] = useState('population');
  const [operador, setOperador] = useState('maior que');
  const [inpNumber, setInpNumber] = useState(0);
  const [filters, setFilters] = useState([]);

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleColuna = ({ target }) => {
    setColuna(target.value);
  };

  const handleOperador = ({ target }) => {
    setOperador(target.value);
  };
  const handleInpNumber = ({ target }) => {
    setInpNumber(target.value);
  };

  const filterNumber = () => {
    const filteredNumber = data.filter((el) => {
      switch (operador) {
      case 'maior que': return Number(el[coluna]) > Number([inpNumber]);
      case 'menor que': return Number(el[coluna]) < Number([inpNumber]);
      default: return Number(el[coluna]) === Number(inpNumber);
      }
    });
    return filteredNumber;
  };

  const handleClick = () => {
    setData(filterNumber());
    setFilters((state) => [
      ...state,
      { operador, coluna, inpNumber },
    ]);
  };

  useEffect(() => {
    const requestAPI = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const dados = await response.json();
      const { results } = dados;
      setData(results);
    };
    requestAPI();
  }, []);
  const context = useMemo(
    () => ({ data,
      name,
      coluna,
      operador,
      inpNumber,
      handleClick,
      filters,
      filterNumber,
      handleInpNumber,
      handleOperador,
      handleColuna,
      handleName }),
    [data, name, coluna, operador, inpNumber, filters],
  );
  return (
    <myContext.Provider value={ context }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
