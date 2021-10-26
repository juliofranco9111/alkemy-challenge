import React from 'react';
import { CardHero } from '../components/CardHero';
import { NavBar } from '../components/NavBar';

export const HomePage = () => {
  const heroes = [1, 2, 3]
  const heroes2 = [4, 5, 6]

  return (
    <>
      <NavBar />
      <div className='home-page'>
        <section className='hero-light'>
          {heroes.map((hero) => (
            <CardHero key={hero} />
          ))}
        </section>
        <section className='hero-dark'>
          {heroes2.map((hero) => (
            <CardHero key={hero} />
          ))}
        </section>
      </div>
    </>
  );
};
