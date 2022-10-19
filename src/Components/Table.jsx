import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function Table() {
  const { data } = useContext(myContext);
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
        {data.map((e) => (
          <tr key={ e.name }>
            <td>{ e.name }</td>
            <td>{ e.created }</td>
            <td>{ e.diameter }</td>
            <td>{ e.edited }</td>
            <td>{ e.films }</td>
            <td>{ e.gravity }</td>
            <td>{ e.climate }</td>
            <td>{ e.orbital_period }</td>
            <td>{ e.population }</td>
            <td>{ e.rotation_period }</td>
            <td>{ e.surface_water }</td>
            <td>{ e.terrain }</td>
            <td>{ e.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
