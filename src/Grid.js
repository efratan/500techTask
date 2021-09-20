import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map(item => <th>{item.title}</th>)}
      </tr>
    </thead>
    <tbody>
      {data.map(data =>
        <tr>
          {config.map((item) => item.component ? item.component({data:data[item.field]}) :
            <td>{data[item['field']]}</td>
          )}
        </tr>)}
    </tbody>
  </table>
);

export default Grid;