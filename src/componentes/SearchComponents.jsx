import React, { useState, useEffect } from "react";

export const SearchComponents = ({texto, setTexto}) => {

    const handleInputChange = ( { target } ) => {
        setTexto(target.value);
    }

  return (
    <>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Personajes" aria-label="Search" value={texto} onChange={handleInputChange}/>
   </form>
   </>
  )
}
