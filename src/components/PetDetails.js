import React from 'react'
import { useLocation } from 'react-router'

const PetDetails = () => {

  const location = useLocation()
  const { animal } = location.state

  return (
    <div>
      {animal.name}
    </div>
  )
}

export default PetDetails
