import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/page_aide.css";
import JSONDATA from '../assets/code_postal.json'
import Select from 'react-select'
import axios from "axios";
// import { Linking, Pressable, Text, View } from "react-native";
// import { useTailwind } from "tailwind-rn/dist";
// import RNPickerSelect from 'react-native-picker-select';
// import { Picker } from "@react-native-picker/picker";
// import { Link } from "@react-navigation/native";
// import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function Aide() {
  const location_ = useLocation()
  const data = location_.state.val
  const places = location_.state.places
  // const handleChange = (event) => {
  //   setPlace(event.target.value)
  // }

  // let search_list = JSONDATA.filter((val) => {
  //                     return val
  //                   }).map((val, key) => {  
  //                       var tmp = {value: val.fields.code_postal, label: val.fields.code_postal}
  //                       setPlace(place.concat(tmp))
  //                   })

  //   const showList = () => {
  //     console.log(search_list)
  //   }
  const [addrs, setaddrs] = useState([]);
  const [place, setPlace] = useState(places[0]);
  const [location, setLocation] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);

  const regex = /<li [^>]*class="result-item"[^>]*><a href="([^"]*)" data-xiti-name="([^"]*)"[^>]*>/g
  const regexG = /<li [^>]*class="result-item"[^>]*><a href="([^"]*)" data-xiti-name="([^"]*)"[^>]*>/



  // useEffect(() => {
  //   if (addrs.length === 0)
  //     searchForaddr(place, location)
  // }, [addrs, place, location])

  const he = require('he')
  if (places.length === 0)
  return (
    <div>
      <input type="text">Cette aide doit être completer en ligne</input>
    </div>
  )
  
  const searchAddr = (url) => {
    // axios.get('https://lannuaire.service-public.fr/recherche?whoWhat=' + place + '&where=' + location)
    axios.get(url, {'headers' : {'Content-Type': "application/json",
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",}})
    .then(res => {
      const html = res.data;
      const newList = html.match(regex)?.map((v) => {
        const vv = v.match(regexG);
        // console.log(vv);
        // console.log(vv);
        if (vv) {
          return ({ name: he.decode(vv[2].replace("Recherche::Annuaire::", '')), link: vv[1] })
        }
      })
      setaddrs(newList)
      console.log(newList)
      setIsDisplayed(true)
    })
  }

  // const searchForaddr = (place, location) => {
  //   axios({
  //     method: 'get',
  //     url: 'https://lannuaire.service-public.fr/recherche?whoWhat=' + place + '&where=' + location,
  //   }).then(res => {
  //     const html = res.data;
  //     const newList = html.match(regex)?.map((v) => {
  //       const vv = v.match(regexG);
  //       // console.log(vv);
  //       console.log(newList);
  //       if (vv) {
  //         return ({ name: he.decode(vv[2].replace("Recherche::Annuaire::", '')), link: vv[1] })
  //       }
  //     })
  //     // newList && setaddrs(newList)
  //   })
  // }

  const checkAddr = () => {
    console.log("________")
    console.log(addrs)
    console.log("________")
  }

  return (
    <div className="App">
        <Navbar />
        <div id="conteneur">
          <h1 className="titles">
            {data.first_name}
          </h1>
          <div id="conteneur1">
            <div className='box1'>
              {data.type}
            </div>
            <div className='box2'>
              Jusqu'à {data.prix}€
            </div>
          </div>
          <div className='box3'>
            {data.descriptif}
          </div>
          <div className='box4'>
            Liens utiles: <a href={data.lien_aide}>{data.lien_aide}</a>
          </div>
        <p className='box5'>Chercher l'établissement le plus près de chez vous pour vos démarches:</p>
        <div className='box6'>
        Ville / Commune :
        <input type="text" onChange={(e) => {
          setLocation(e.target.value)
          // searchForaddr(place, e.target.value)
        }} /></div>
        <div className='box7'>
          Type d'établissement :
        <select
          selectedValue={place}
          onChange={(e) => {
            setPlace(e.target.value);
            // searchForaddr(value, location);
          }}
        >
          {places.map((v, k) => <option key={k} label={v} value={v} />)}
        </select></div>
        {/* <a href={'https://lannuaire.service-public.fr/recherche?whoWhat=' + place + '&where=' + location}> */}
          <button className='box8' onClick={() => {searchAddr("https://cors-everywhere-me.herokuapp.com/https://lannuaire.service-public.fr/recherche?whoWhat="+ place +"&where=" + location)}}>Chercher</button>
        {/* </a> */}
        {(isDisplayed) && (
        <div>
          {addrs.map((v, k) => {
            return (<div>
              {v.name}    |
              <a href={v.link}>+ d'information</a>
            </div>)
          })}
        </div>
        )}
      </div>
    </div>
  )
}