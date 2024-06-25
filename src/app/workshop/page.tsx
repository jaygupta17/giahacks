"use client"
import React from 'react';
import { Container, Grid } from '@mui/material';
import CardComponent from '../../components/CardComponent';

const events = [
  {
    id: 1,
    name: 'Instagram Delhi',
    description: 'Culture & Heriatge',
    date: '2024-03-10',
    location: 'Odeon Social , Delhi',
    image: 'https://tse3.mm.bing.net/th?id=OIP.t4jZszEEsWuyP3wqPk_BJgHaFj&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Nizamuddin Cycle Tour',
    description: 'Culture & Heriatge',
    date: '2024-09-07',
    location: 'Khan Market , Delhi',
    image: 'https://tse3.mm.bing.net/th?id=OIP.liUptjXBP87On1WfJBxWBAHaED&pid=Api&P=0&h=180',
  },
  {
    id: 3,
    name: 'Divine Delhi',
    description: 'Culture & Heriatge',
    date: '2024-10-09',
    location: 'Odeon Paan, Delhi',
    image: 'https://tse2.mm.bing.net/th?id=OIP.kbC8SSAhcN2kcH-8OigWmgHaE0&pid=Api&P=0&h=180',
  },
  {
    id: 4,
    name: 'Workshop Walks',
    description: 'Heritage & Nature Walk',
    date:'2024-03-06',
    location: 'Sunder Nursery , Delhi',
    image: 'https://tse1.mm.bing.net/th?id=OIP.UEJtW7f-MrYmaVfCHHyIegHaEV&pid=Api&P=0&h=180',
  },
  {
    id: 5,
    name: 'Heritage Conservation Workshop by ASI',
    description: 'Heritage & Conservation',
    date: '2024-08-09',
    location: 'ASI Headquarters, Delhi',
    image: 'https://tse3.mm.bing.net/th?id=OIP.j_ImlW9jm04gJaNcst4CCgHaEK&pid=Api&P=0&h=180',
  },
];

function App() {
  return (
    <Container>
      <h1>Upcoming Events</h1>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <CardComponent event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
