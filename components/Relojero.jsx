'use client'
import React, { useState, useEffect } from 'react'

function Relojero({ activarReloj, reiniciar }) {

 const [horas, setHoras] = useState(0);
 const [minutos, setMinutos] = useState(0);
 const [segundos, setSegundos] = useState(0);
 const [miliSegundos, setMiliSegundos] = useState(0);

 useEffect(() => {
  if (!reiniciar) {
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
    setMiliSegundos(0);
  }
}, [reiniciar]);


 useEffect(() => {
  if (activarReloj) {
    const actualizarTiempo = () => {
        setMiliSegundos((prevMiliSegundos) => (prevMiliSegundos + 1) % 100)
        if (miliSegundos === 99) {
          setSegundos((prevSegundos) => (prevSegundos + 1) % 60);
          if (segundos === 59) {
            setMinutos((prevMinutos) => (prevMinutos + 1) % 60);
            if (minutos === 59) {
              setHoras((prevHoras) => (prevHoras + 1) % 24);
            }
          }
        }
    };
    const interval = setTimeout(actualizarTiempo, 10);
    return () => clearTimeout(interval);
  }
}, [horas, minutos, segundos, miliSegundos, activarReloj]);

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex gap-2 pb-7 w-full max-w-[500px]'>
        <label className='text-yellow-600 font-bold text-7xl' htmlFor="">{horas.toString().padStart(2, '0')}</label>
        <label className='text-yellow-600 font-bold text-7xl' htmlFor="">:</label>
        <label className='text-yellow-600 font-bold text-7xl' htmlFor="">{minutos.toString().padStart(2, '0')}</label>
        <label className='text-yellow-600 font-bold text-7xl' htmlFor="">:</label>
        <label className='text-yellow-600 font-bold text-7xl' htmlFor="">{segundos.toString().padStart(2, '0')}</label>
        <label className='text-yellow-600 font-bold text-7xl' htmlFor="">:</label>
        <label className='text-yellow-600 font-bold text-7xl' htmlFor="">{miliSegundos.toString().padStart(2, '0')}</label>
      </div>
    </div>
  )
}

export default Relojero