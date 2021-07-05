import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router'
import { Header, Segment, Image, Divider, Table, Label, Container } from 'semantic-ui-react'
import * as styles from "./PetDetailsPage.module.css"
import axios from 'axios';

const PetDetails = () => {

  const [animal, setAnimal] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation()
  const { animalID, token } = location.state

  useEffect(() => {
    if (token !== 'Fake Token') {
      axios.get(`https://api.petfinder.com/v2/animals/${animalID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setAnimal(response.data.animal)
          setIsLoading(false)
          console.log(response.data.animal)
        })
        .catch(error => {
          console.log('There was an error getting the pet details!', error);
      })
    }
  }, [animalID, token])

  if (isLoading === false) {
      return (
      <Segment vertical textAlign='center' className={styles.container}>
        <Header as='h1'>{animal.name} ({animal.status})</Header>
        <Image src={animal.photos[0].large} className={styles.mainImage} alt={animal.name} centered></Image>

        <Divider hidden />

        <Label.Group>
          {animal.tags.map((tag, index) => {
            return(
              <Label color='blue' key={index}>
                {tag}
              </Label>
            )
          })}
        </Label.Group>

        <Divider hidden />

        <Container>
          {animal.description}
        </Container>


        <Divider hidden section>
          <Header>
            Details
          </Header>
        </Divider>

        <div className={styles.tableContainer}>
          <Table definition textAlign='center' className={styles.table}>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={6}>Species</Table.Cell>
                <Table.Cell>{animal.species}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Primary Breed</Table.Cell>
                <Table.Cell>{animal.breeds.primary}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Color</Table.Cell>
                <Table.Cell>{animal.colors.primary}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Gender</Table.Cell>
                <Table.Cell>{animal.gender}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Age</Table.Cell>
                <Table.Cell>{animal.age}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>

        <Divider hidden section>
          <Header>
            Health
          </Header>
        </Divider>

        <div className={styles.tableContainer}>
          <Table definition textAlign='center' className={styles.table}>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={6}>Spayed/Neutered</Table.Cell>
                <Table.Cell>{animal.attributes.spayed_neutered ? 'yes' : 'no'}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>House Trained</Table.Cell>
                <Table.Cell>{animal.attributes.house_trained ? 'yes' : 'no'}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Declawed</Table.Cell>
                <Table.Cell>{animal.attributes.declawed ? 'yes' : 'no'}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Special Needs</Table.Cell>
                <Table.Cell>{animal.attributes.special_needs ? 'yes' : 'no'}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Shots Current</Table.Cell>
                <Table.Cell>{animal.attributes.shots_current ? 'yes' : 'no'}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        
        
      </Segment>
    )
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
  
}

export default PetDetails
