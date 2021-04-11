import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => {
      setPlants(data)
    });
  }, []);

  function handleTextChange(event){
    setSearch(event.target.value)
  }

  const filteredPlants = plants.filter((plant) => {
    return plant.name.includes(search)
  })

  function handleNewPlant(newPlant){
    const newPlantList = [...plants, newPlant]
    setPlants(newPlantList)
  }

  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant}/>
      <Search onTextChange={handleTextChange}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
