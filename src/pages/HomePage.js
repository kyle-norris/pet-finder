import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import PetCard from '../components/PetCard';
import { Link } from "react-router-dom";
import { Grid, Card } from 'semantic-ui-react';

const initial_pets = {
  animals: [
  ]
}

const HomePage = () => {
  const [token, setToken] = useState('Fake Token');
  const [pets, setPets] = useState(initial_pets);
  const [isLoading, setIsLoading] = useState(true);

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

  // use a GET request to get the animals
  useEffect(() => {
    if (token !== 'Fake Token') {
      axios.get(`https://api.petfinder.com/v2/animals?type=rabbit&location=Raleigh, NC&page=1`, {
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
  }, [token])

  if (!isLoading && pets.animals.length > 0) {
    return (
      <>
      <Card.Group centered>
        {pets.animals.map((animal, index) => {
        return (
          
          <PetCard 
            name={animal.name}
            image={animal.photos[0].medium}
            description={animal.description}
          />
        
        )
      })}
      </Card.Group>
      
      </>
    )
  }
  return <h1>Loading...</h1>
}

export default HomePage
