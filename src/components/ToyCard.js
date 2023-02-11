import React from "react";

function ToyCard({toys, toDelete, onUpdateToys}) {
  let id = toys.id

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        toDelete(toys);
      });
  }
  function handleLikeClick() {
    const updateObj = {
      likes: toys.likes + 1,
    };

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(onUpdateToys);
  }

  return (
    <div className="card">
      <h2>{toys.name}</h2>
      <img
        src={toys.image}
        alt={toys.name}
        className="toy-avatar"
      />
      <p>{toys.likes} Likes </p>
      <button onClick= {handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick= {handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
