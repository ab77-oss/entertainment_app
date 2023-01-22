import CardComp from "../components/CardComp";
import React from 'react'

function Movies() {
    
  return (
    <div>
        <CardComp num={0} placeholder = {"Search for movies"} categ = {"Movies"}  color2={'#5A698F'}  color3={'#FFFFFF'} color4={'#5A698F'} color5={'#5A698F'} cat={"Movie"} />
    </div>
  )
}

export default Movies