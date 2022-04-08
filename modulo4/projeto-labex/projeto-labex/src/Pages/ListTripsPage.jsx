import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);

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
   trips.map()

  return (
  
  <div>

  </div>
  )
};

export default ListTripsPage;
