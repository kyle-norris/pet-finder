import React from 'react'
import { Card } from 'semantic-ui-react'
import * as styles from './PetCard.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function PetCard (props) {
  return (
    <Link to={{
      pathname: `/pet/${props.animal.id}`,
      state: {
        animalID: props.animal.id,
        token: props.token
      }
    }

      }>
      <Card className={styles.card}>
        { props.animal.photos[0] !== undefined
          ? <img src={props.animal.photos[0].medium} alt={props.animal.name} className={styles.petImage}/>
          : <div className={styles.petImage}>
            No Photo Available
          </div>
        }

        <Card.Content>
          <Card.Header className={styles.cardHeader}>{props.animal.name}</Card.Header>
          <Card.Description>{props.animal.description}</Card.Description>
        </Card.Content>
      </Card>
    </Link>

  )
}

PetCard.propTypes = {
  animal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photos: PropTypes.array,
    name: PropTypes.string,
    description: PropTypes.string
  }),
  token: PropTypes.string
}

export default PetCard
