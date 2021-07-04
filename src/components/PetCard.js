import React from 'react'
import {Card} from 'semantic-ui-react'
import * as styles from "./PetCard.module.css"

const PetCard = (props) => {
  return (
    <Card className={styles.card}>
      <img src={props.image} alt={props.name} className={styles.petImage}/>
      <Card.Content>
        <Card.Header className={styles.cardHeader}>{props.name}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default PetCard
