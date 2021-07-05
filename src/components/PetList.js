import React from 'react'
import * as styles from "./PetList.module.css"
import { Card } from 'semantic-ui-react'
import PetCard from '../components/PetCard';

const PetList = (props) => {
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

export default PetList
