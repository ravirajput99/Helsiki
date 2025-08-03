import React from 'react'

function StatisticLine({text,value}) {
    if(text === 'positive') return <p>{text} {value}%</p>
  return (
    <p>{text} {value}</p>
  )
}

export default StatisticLine