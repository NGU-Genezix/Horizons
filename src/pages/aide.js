import React, {useState, useEffect} from 'react';
import { useNavigate, createSearchParams, useSearchParams, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/page_aide.css";
import JSONDATA from '../assets/code_postal.json'
import JSONDATA2 from '../assets/Test_searchbar.json'
import Select from 'react-select'
import axios from "axios";
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaRegHeart } from "react-icons/fa";
import API from '../components/APIManager';
import Contact from '../components/contact'
import N_Navbar from '../components/new_nav'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
// import { Linking, Pressable, Text, View } from "react-native";
// import { useTailwind } from "tailwind-rn/dist";
// import RNPickerSelect from 'react-native-picker-select';
// import { Picker } from "@react-native-picker/picker";
// import { Link } from "@react-navigation/native";
// import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function Aide() {
  const location_ = useLocation()
  const [params] = useSearchParams();
  const [tmp, setTmp] = useState(0);

  const data =
  JSONDATA2.filter((val) => {
    return val
    }).map((val2, key) => {
    if (val2.id == params.get("val")) {
      console.log(params.get("val") - 1)
      return val2
    }
  })

  console.log(data)

  const places = ["mairie", "point d'information local dédié aux personnes âgées", "Services du département"]
  
  const [heartColor, setHeartColor] = useState("black")//A changer avec requete api
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
  const [isCheckedEtud, setIsCheckedEtud] = useState(true);

  const regex = /<li [^>]*class="result-item"[^>]*><a href="([^"]*)" data-xiti-name="([^"]*)"[^>]*>/g
  const regexG = /<li [^>]*class="result-item"[^>]*><a href="([^"]*)" data-xiti-name="([^"]*)"[^>]*>/

  const getUser = () => {
    let res = new API().get("get_user", true).then(function(result) {
        console.log("ça passe1")
        if (result[0] == 200) {
          console.log("ça passe")
          let body_content = {
            id: params.get("val")
          }
          let res2 = new API().post_aide("add_historique", true, body_content).then(function(resu) {
            console.log("___")
            console.log(resu)
            console.log("___")
          })
      }

    })}

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(elem, {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      delay: 0.4,
      duration: 0.6,
      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center"
      }
    })
  }

  useEffect(() => {
    getUser()
    slideInTop("#conteneur")

  }, [])
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
  
  const heartClicked = () => {
    heartColor === 'red' ? setHeartColor('black') : setHeartColor('red')
  }
  
  return (
    <div className="App">
      <div className="main">
        <N_Navbar></N_Navbar>
        <div id="conteneur">
          <h1 className="titles">
            {data[params.get("val") - 1].first_name}
          </h1>
          <div className='inline'>
            <div className="block1">
              <span className='blockt'><input type="checkbox" value="Etudiant" checked={isCheckedEtud} />{data[params.get("val") - 1].type}</span>
            </div>
            <div className="block2" >
              <span className='blockt'>Jusqu'à <span className='blue'>{data[params.get("val") - 1].prix}€</span></span>
            </div>
          </div>
          <div className='trait'></div>
          <div id="conteneur1">
            <div><FaRegHeart onClick={() => heartClicked()} fontSize={40} color={heartColor} style={{marginLeft:'50%',}}/>Ajouter Aux Favoris</div>
          </div>
          <div className='box3'>
            {data[params.get("val") - 1].descriptif}
          </div>
          <div className='box4'>
            Liens utiles: <a href={data[params.get("val") - 1].lien_aide}>{data[params.get("val") - 1].lien_aide}</a>
          </div>
          <div className='trait'></div>
        <p className="titles2">Chercher l'établissement le plus près de chez vous pour vos démarches:</p>
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
            if (k < 5) {
            return (
              <div className='etablissement'>
                    <div>
                      {v.name}
                    </div>
                    <div>
                      <a href={v.link}>Cliquez pour plus d'information</a>
                    </div>
              </div>
          )}})}
        </div>
        )}
      </div>
      </div>
      <Contact></Contact>
    </div>
  )
}