import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function Table() {
  const { data, name } = useContext(myContext);
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>climate</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {data.filter((el) => el.name.toUpperCase().includes(name.toUpperCase()))
          .map((e) => (
            <tr key={ e.name }>
              <th>{ e.name }</th>
              <th>{ e.created }</th>
              <th>{ e.diameter }</th>
              <th>{ e.edited }</th>
              <th>{ e.films }</th>
              <th>{ e.gravity }</th>
              <th>{ e.climate }</th>
              <th>{ e.orbital_period }</th>
              <th>{ e.population }</th>
              <th>{ e.rotation_period }</th>
              <th>{ e.surface_water }</th>
              <th>{ e.terrain }</th>
              <th>{ e.url }</th>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
