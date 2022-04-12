import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cards, ContainerCards } from "./styleGlobal";

const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  const gotoTripsAplication = (id) => {

    navigate(`/trips/application/${id}`);
  }

  


  //  axios.get(url,body,header).then((res)=>{}).catch((err)=>{}) = Estrura de consumo de api
  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/karine-silva-gebru/trips"
      )
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  useEffect(() => {
    getTrips();
  }, []);
  const viagens = trips.map((trip) => {
    return (
      <Cards key={trip.id} onClick = {() => gotoTripsAplication(trip.id)}>
      
        <p>{trip.name}</p>
        <p>{trip.description}</p>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>

      </Cards>
    );
  });
  console.log(trips);
  return <ContainerCards>{viagens}</ContainerCards>;
};

export default ListTripsPage;
