import React from 'react'

const Results = ({ data }) => (
  <ul>
    {data.map(item => <li key={item.id}>{item.city} || {item.adress} || {item.image} </li>)}
  </ul>
)

export default Results