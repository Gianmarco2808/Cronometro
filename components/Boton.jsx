'use client'
import React, { useState, useEffect } from 'react'
import Relojero from './Relojero.jsx';

function Boton() {
  const [empezar, setEmpezar] = useState(false);
  const [reiniciar, setReiniciar] = useState(false);

  const estadoReloj = () => {
    setEmpezar((prevEmpezar) => !prevEmpezar);
    setReiniciar(true);
  };

  const reiniciarReloj =() =>{
    setEmpezar(false);
    setReiniciar(false);
  }

  useEffect(() => {
    const presionarTecla = (e) => {
      if (e.key === ' ' || e.key === 'Spacebar') {
        estadoReloj();
      }
    };
    document.addEventListener('keydown', presionarTecla);
    return () => {
      document.removeEventListener('keydown', presionarTecla);
    };
  }, []);

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Relojero activarReloj={empezar} reiniciar={reiniciar} />
        <div className='flex justify-center items-center gap-2 w-1/2'>
          <div className='flex justify-center items-center w-full'>
              <button onClick={reiniciarReloj} className='rounded text-white font-bold px-3 w-full border border-gray-100 hover:bg-green-500 hover:border-transparent hover:text-white h-10'>Reiniciar</button>
          </div>
          <div className='flex justify-center items-center w-full'>
              <button onClick={estadoReloj} className='rounded text-white font-bold px-3 w-full border border-gray-100 hover:bg-red-500 hover:border-transparent hover:text-white h-10'>{empezar ? 'Pausar' : 'Iniciar'}</button>
          </div>
        </div>
    </div>
  )
}

export default Boton