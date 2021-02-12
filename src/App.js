import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    callApi();
  });

  const callApi = async () => {
    const result = await fetch("http://localhost:3001/members");
    const response = await result.json();
    //console.log('######',response);
    setApiResponse(response);
  };

  return (
    <React.Fragment>
      <div className="navBar"><h2>Activity Details</h2></div>
      <div className="App">
        {apiResponse.map((item) => {
          return (
            <Card
              id={item.id}
              real_name={item.real_name}
              activity_periods={item.activity_periods}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
