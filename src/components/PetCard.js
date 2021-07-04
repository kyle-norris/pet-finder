import React from 'react'
import {Card} from 'semantic-ui-react'
import * as styles from "./PetCard.module.css"
import { Link } from "react-router-dom";

const PetCard = (props) => {
  return (
    <Link to={{
      pathname: `/pet/${props.index}`,
      state: {
        animal: props.animal
      }
    }
      
      }>
      <Card className={styles.card}>
        <img src={props.animal.photos[0].medium} alt={props.animal.name} className={styles.petImage}/>
        <Card.Content>
          <Card.Header className={styles.cardHeader}>{props.animal.name}</Card.Header>
          <Card.Description>{props.animal.description}</Card.Description>
        </Card.Content>
      </Card>
    </Link>
    
  )
}

export default PetCard
