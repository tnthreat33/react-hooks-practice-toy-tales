import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, toDelete, onUpdateToys}) {
  return (
    <div id="toy-collection">
      {toys.map((toy)=>(<ToyCard key={toy.id} toys={toy} toDelete={toDelete} onUpdateToys = {onUpdateToys}/>))}

      </div>
  );
}

export default ToyContainer;
