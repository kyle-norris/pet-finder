import React from 'react'
import * as styles from "./PetList.module.css"
import { Card } from 'semantic-ui-react'
import PetCard from '../components/PetCard';

const PetList = (props) => {
  return (
    <Card.Group centered>
        {props.animals.map((animal, index) => {
        return (
          <Card>
            <PetCard 
            index={index}
            animal={animal}
          />
          </Card>
          
        
        )
      })}
      </Card.Group>
  )
}

export default PetList
