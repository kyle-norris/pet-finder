import React, { useState, useEffect } from 'react'

import axios from 'axios'
import PetList from '../components/PetList'
import { Divider, Dropdown, Header } from 'semantic-ui-react'
import * as styles from './HomePage.module.css'

// Used for initial rendering
const initialPets = {
  animals: [
  ]
}

const petTypes = [
  { key: 'Rabbit', value: 'Rabbit', text: 'Rabbit' },
  { key: 'Dog', value: 'Dog', text: 'Dog' },
  { key: 'Cat', value: 'Cat', text: 'Cat' },
  { key: 'Horse', value: 'Horse', text: 'Horse' },
  { key: 'Bird', value: 'Bird', text: 'Bird' },
  { key: 'Scales, Fins & Other', value: 'Scales, Fins & Other', text: 'Scales, Fins & Other' },
  { key: 'Barnyard', value: 'Barnyard', text: 'Barnyard' }
]

const locations = [
  { key: 'Raleigh, NC', value: 'Raleigh, NC', text: 'Raleigh, NC' },
  { key: 'Charlotte, NC', value: 'Charlotte, NC', text: 'Charlotte, NC' },
  { key: 'Durham, NC', value: 'Durham, NC', text: 'Durham, NC' }
]

const HomePage = () => {
  // Set states for the homepage
  const [token, setToken] = useState('Fake Token') // used for authentication
  const [pets, setPets] = useState(initialPets)
  const [isLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useState(locations[0])
  const [petType, setPetType] = useState(petTypes[0])

  // Get the token used for authentication
  useEffect(() => {
    const body = {
      grant_type: 'client_credentials',
      client_id: process.env.REACT_APP_API_KEY_ID,
      client_secret: process.env.REACT_APP_API_KEY_SECRET
    }
    axios.post('https://api.petfinder.com/v2/oauth2/token', body)
      .then(response => {
        setToken(response.data.access_token)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('There was an error fetching the token!', error)
      })
  }, [])

  // use a GET request to get the animals after we receive the token
  useEffect(() => {
    if (token !== 'Fake Token') {
      axios.get(`https://api.petfinder.com/v2/animals?type=${petType.value}&location=${location.value}&page=1`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setPets(response.data)
          setIsLoading(false)
        })
        .catch(error => {
          console.log('There was an error getting the pets data!', error)
        })
    }
  }, [token, location, petType])

  function handleLocationChange (e, data) {
    const newLocation = locations.find(x => x.key === data.value)
    setLocation(newLocation)
  }

  function handlePetTypeChanged (e, data) {
    const newPetType = petTypes.find(x => x.key === data.value)
    setPetType(newPetType)
  }

  if (!isLoading && pets.animals.length > 0) {
    return (
      <>
        <div className={styles.heading}>
          <Header as='h1' textAlign='center'>Pet Finder App</Header>
        </div>

        <div className={styles.dropdownContainer}>
          <Dropdown search fluid selection value={location.text} onChange={handleLocationChange} options={locations}/>
          <Dropdown search fluid selection value={petType.text} onChange={handlePetTypeChanged} options={petTypes}/>
        </div>

        <Divider hidden></Divider>
        <PetList animals={pets.animals} token={token}/>
      </>
    )
  }
  return <h1>Loading...</h1>
}

export default HomePage
