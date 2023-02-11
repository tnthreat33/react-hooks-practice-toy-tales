import React, {useState} from "react";

function ToyForm({addToy}) {
    const [formData, setFormData] = useState({
      name: "",
      image: "",
    });
  
    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const newToy = {
        ...formData,
        likes: 0,
      };
  
      fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newToy),
      })
        .then((r) => r.json())
        .then(addToy);
    }





    
  return (
    <div className="container">
      <form onSubmit = {handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange ={handleChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
        onChange ={handleChange}
        value={formData.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
