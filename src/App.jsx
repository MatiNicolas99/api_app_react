import React, { useEffect, useState } from "react";
import { Nav } from "./componentes/Nav"
import { Characters } from "./componentes/Characters";
import { Pagination } from "./componentes/Pagination";

export const App = () => {
  const [characters, setCharacter] = useState([])
  const [info, setInfo] = useState({})
  const [texto, setTexto] = useState('')

  const initUrl = "https://rickandmortyapi.com/api/character";

  const fecthData = async (url) => {
    try {
      const fetch_datos = await fetch(url);
      const data = await fetch_datos.json();
      const resultados = setCharacter(data.results);
      const informacion = setInfo(data.info);  
    } catch (error) {
      console.log(error)
    }
  };
  const filtroPersonajes = characters.filter(personaje => personaje.name.toLowerCase().includes(texto.toLocaleLowerCase()))
  
  const onPrevious = () => {
    fecthData(info.prev);
  }
  const onNext = () => {
    fecthData(info.next);
  }
  useEffect(() => {
    fecthData(initUrl);
  }, [])

  return (
    <>
      <Nav texto={texto} setTexto={setTexto} />
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={filtroPersonajes} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>
  )
}
