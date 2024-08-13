import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {

  function handleDelete(toy) {
    let newToyList = toys.filter((item) => item !== toy);

    fetch("http://localhost:3001/toys/" + toy.id, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then(() => setToys(newToyList));
  }

  const toyCards = toys.map(toy => (<ToyCard key={toy.id} toy={toy} handleDelete={handleDelete} />));

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
