import React, { useEffect, useState, useRef } from "react";
import {useLoaderData} from "react-router-dom";
 function GitHub() {
   const data = useLoaderData();
   console.log(data);
   // const [data, setData] = useState([]);
   // const [data, setData] = useState([]);
   // const [data, setData] = useState([]);
   // const [data, setData] = useState([]);
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://random-data-api.com/api/v2/users")
    //     .then((response) => response.json())
    //     .then((data) => {
    //     setData(data);
    //      console.log(data);
    //     });
    
    // },[]);
    return (
        <div className="tect-center m-4 bg-gray-600 text-white p-4 text-3xl">UserName: {data["first_name"]}</div>
    )
 }
 export default GitHub;

 export const nameInfo = async () => {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const data = response.json();
    return data;
  };