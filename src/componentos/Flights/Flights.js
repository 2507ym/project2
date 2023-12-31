import React from 'react'
import { useState,useEffect } from 'react';

const Flights = () => {
  const [flightsDB, setFlightsDB] = useState([1,2,3])
  console.log("flights state:");
  console.log(flightsDB);
  const getFlightsDB = () => {


    fetch('http://localhost:3006/api/customers/getcustomersbyid/:1')
      .then(response => response.json())
      .then(data => {
        // Store the fetched data in an array or use it as needed
        setFlightsDB(data)

        // Use the flightsArray for further processing or rendering
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        //console.log('Error:', error);
      });

  }

  useEffect(getFlightsDB, [])

//   getFlightsDB()
   
  return (
    <div>
        
            <h2>Flight List</h2>
        

       
      <table className="flight-table">
          <thead>
            <tr>
              <th>Flight ID</th>
              <th>Airline ID</th>
              <th>Origin Country ID</th>
              <th>Destination Country ID</th>
              <th>Departure Time</th>
            </tr>
          </thead>
          <tbody>
            {flightsDB.map(flight => (
              <tr key={flight.Id} className="flight-item">
                <td>{flight.Id}</td>
                <td>{flight.First_name}</td>
                {/* <td>{flight.Origin_Country_Id}</td>
                <td>{flight.Destination_Country_Id}</td>
                <td>{flight.Departure_Time}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};


export default Flights;