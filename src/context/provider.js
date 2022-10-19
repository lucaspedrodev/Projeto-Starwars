import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import myContext from './myContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestAPI = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const dados = await response.json();
      const { results } = dados;
      setData(results);
    };
    requestAPI();
  }, []);
  const context = useMemo(() => ({ data }), [data]);
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
