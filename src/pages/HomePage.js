import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import PetList from '../components/PetList';
import { Divider } from 'semantic-ui-react';

// Used for initial rendering
const initial_pets = {
  animals: [
  ]
}

// Pet Types
const petTypes = ['Rabbit', 'Dog', 'Cat', 'Horse', 'Bird', 'Scales, Fins & Other', 'Barnyard']


const HomePage = () => {
  const [token, setToken] = useState('Fake Token');
  const [pets, setPets] = useState(initial_pets);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState('Raleigh, NC')
  const [petType, setPetType] = useState(petTypes[0])

  // Get the token used for authentication
  useEffect(() => {
    const body = {
      grant_type: 'client_credentials',
      client_id: process.env.REACT_APP_API_KEY_ID,
      client_secret: process.env.REACT_APP_API_KEY_SECRET
    };
    axios.post('https://api.petfinder.com/v2/oauth2/token', body)
      .then(response => {
        setToken(response.data.access_token);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the token!', error);
    });
  }, [])

  // use a GET request to get the animals after we receive the token
  useEffect(() => {
    if (token !== 'Fake Token') {
      axios.get(`https://api.petfinder.com/v2/animals?type=${petType}&location=${location}&page=1`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setPets(response.data)
          setIsLoading(false)
        })
        .catch(error => {
          console.log('There was an error getting the pets data!', error);
      })
    }
  }, [token, location, petType])

  if (!isLoading && pets.animals.length > 0) {
    return (
      <>
      <Divider hidden></Divider>
      <PetList animals={pets.animals} token={token}/>
      </>
    )
  }
  return <h1>Loading...</h1>
}

export default HomePage
