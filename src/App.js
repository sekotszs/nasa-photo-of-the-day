import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
function App() {
  //statehook
  const [data, setData] = useState();
  //use effect
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=P2IystmmxACWr100aeIWjSp7AwLgDIShoV8aaofL&date=2012-03-14")
    .then(response =>{
      // console.log(response)
      setData(response.data);
    })
    .catch(error => {console.log('the data sucks rn',error)
  })
  }, [])
  if (!data) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <Header title={data.title}/>
      <Body image={data.url} description={data.explanation} />
      <Footer copyright={data.copyright} date={data.date} />
    </div>
  );
}

export default App;

