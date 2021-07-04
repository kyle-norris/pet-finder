import React from 'react'
import { useLocation } from 'react-router'
import { Header, Container, Segment, Image } from 'semantic-ui-react'

const PetDetails = () => {

  const location = useLocation()
  const { animal } = location.state

  return (
    <Segment vertical textAlign='center'>
      <Header as='h1'>{animal.name}</Header>
      <Image src={animal.photos[0].large} centered rounded></Image>
      
    </Segment>
  )
}

export default PetDetails
