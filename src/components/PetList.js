import React from 'react'
import { Card } from 'semantic-ui-react'
import PetCard from '../components/PetCard'
import PropTypes from 'prop-types'

function PetList (props) {
  return (
    <Card.Group centered>
        {props.animals.map((animal, index) => {
          return (
          <Card key={index}>
            <PetCard
            animal={animal}
            token={props.token}
          />
          </Card>

          )
        })}
      </Card.Group>
  )
}

PetList.propTypes = {
  animals: PropTypes.array.isRequired,
  token: PropTypes.string
}

export default PetList
