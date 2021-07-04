import React from 'react'
import { useLocation } from 'react-router'
import { Header, Label, Segment, Image } from 'semantic-ui-react'
import * as styles from "./PetDetails.module.css"

const PetDetails = () => {

  const location = useLocation()
  const { animal } = location.state

  return (
    <Segment vertical textAlign='center' className={styles.container}>
      <Header as='h1'>{animal.name}</Header>
      <Image src={animal.photos[0].large} className={styles.mainImage} alt={animal.name} centered></Image>
      <Label.Group>
        {animal.species &&
          <Label>
            {animal.species}
          </Label>
        }
        
        {animal.colors.primary &&
          <Label>
            {animal.colors.primary}
          </Label>
        }
        
      </Label.Group>
      
    </Segment>
  )
}

export default PetDetails
