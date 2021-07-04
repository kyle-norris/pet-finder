import React from 'react'
import {Card} from 'semantic-ui-react'
import * as styles from "./PetCard.module.css"

const PetCard = (props) => {
  return (
    <Card
    >
      <img src={props.image} alt={props.name} height={200} className={styles.petImage}/>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default PetCard
