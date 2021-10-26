import React from 'react';

export const CardHero = () => {
  const stats = {
    intelligence: 100,
    strength: 26,
    speed: 27,
    durability: 50,
    power: 47,
    combat: 10,
  };

  const returnStats = () => {
    let statics = [];
    for (let i in stats) {
      let object = {
        value: stats[i],
        stat: i,
      };
      statics.push(object);
    }

    return statics;
  };

  return (
    <article className='card-hero'>
      <div className='card-image'>

      
        <img
          src='https://www.superherodb.com/pictures2/portraits/10/100/1358.jpg'
          alt='hero-image'
          />
      
          </div>
      <h1>Batman</h1>
      <div className='card-body'>
        <div>
          <h2>{stats.intelligence}</h2>
          <h4>intelligence</h4>
        </div>
        <div>
          <h2>{stats.strength}</h2>
          <h4>strength</h4>
        </div>
        <div>
          <h2>{stats.speed}</h2>
          <h4>speed</h4>
        </div>
        <div>
          <h2>{stats.durability}</h2>
          <h4>durability</h4>
        </div>
        <div>
          <h2>{stats.power}</h2>
          <h4>power</h4>
        </div>
        <div>
          <h2>{stats.combat}</h2>
          <h4>combat</h4>
        </div>
      </div>

      <div className="hero-buttons">
      <button onClick={()=> console.log('h1')} className='button'>
        Remove
      </button>
      <button className='button-dark'>
        Details
      </button>
      </div>
    </article>
  );
};
