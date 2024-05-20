'use client'
import React from 'react'
import CountUp from 'react-countup'

type Props = {}

const AnimatedCounter = ({amount}: {amount:number}) => {
  return (
    <div className="w-full">
      <CountUp end={amount} decimal=',' prefix='$' />
    </div>
  )
}

export default AnimatedCounter