import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App";
function Leagues(){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
          .get("https://api-basketball.p.rapidapi.com/leagues")
          .then((response) => {
            console.log(response.data.data);
            setData(response.data.data);
          })
          .catch((err) => console.log(err));
      }, []);

    return(
        <div className="leagues">

        </div>
    )
}
export default Leagues;