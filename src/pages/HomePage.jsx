import axios from 'axios';
import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';

export default function HomePage() {

    const [object, setObject] = useState({});
  const getUser = async () => {
    const res = await fetch(
      'https://superheroapi.com/api.php/10224541060347055/3/image'
    )
      .then((res) => res.json())
      .then((r) => setObject(r))
      .catch((err) => console.log('error', err.message));
  };

  //getUser();


  


  return (
    <>
      <Navbar />

      <div className='container d-flex mt-5'>
        <aside className='col-2 border'>
          <nav className='d-flex flex-column'>
            <a href='#'>hola</a>
            <a href='#'>mundo</a>
            <a href='#'>si</a>
          </nav>
        </aside>
        <div className='col-10 border'>
          <div className='row row-cols-1 row-cols-md-2 g-4'>
           
          </div>
        </div>
      </div>
    </>
  );
}
