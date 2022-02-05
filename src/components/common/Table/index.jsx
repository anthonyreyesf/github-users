import React from 'react';
import Row from './Row';

export default function Table(props) {
  return (
    <div>
      {props.data && props.data.map(item => (
        <Row imgUrl={item.avatar_url} name={item.login} githubUrl={item.url}/>
      ))}
    </div>
  );
}
