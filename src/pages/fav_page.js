import React, { useEffect, useState } from "react";
import JSONDATA from "../assets/Test_searchbar.json";
import axios from "axios";
import AideAcceuil from "../components/aide_acceuil";
import { useNavigate, createSearchParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "../styles/fav_page.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Favoris() {
  let history = useNavigate();
  const [ids, setIds] = useState([]);
  const [fav, setFav] = useState([]);
  const [favArray, setFavArray] = useState([]);

  const getFav = async () => {
    JSONDATA.map((val, key) => {
      var newData = {
        id: val.id,
      };
      setIds(ids.push(newData));
    });
    const token = localStorage.getItem("token");

    fetch("https://horizons.page/api/get_fav", {
      method: "GET",
      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setFav(Object.keys(responseData));
        setFavArray(Object.entries(responseData));
      });
  };

  useEffect(() => {
    getFav();
  }, []);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#ffda6d" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#fff2cc" });
  };

  const searchElement = (e) => {
    console.log("chkl", e);
    for (var i = 0; i < favArray.length; i++) {
      if (favArray[i][0] == e) {
        return favArray[i][1];
      }
    }
    return -1;
  };
  return (
    <div style={{backgroundColor: "#77bfa3"}}>
              <div className="Fav">
          <a href="/">
         Accueil
          </a>
        </div>
      <div>
        <h1>Favoris</h1>
      </div>
      {JSONDATA.map((elem, index) => {
        let link = (valeurs, places) => {
          history({
            pathname: "/aide",
            search: createSearchParams({
              val: elem.id,
            }).toString(),
          });
        };
        if (
          fav.includes(elem.id.toString()) &&
          searchElement(elem.id) === true
        ) {
          console.log("c ca tu cherche ");
          return (
            <a onClick={link}>
              <div
                className="mainDiv"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <div className="name">{elem.first_name}</div>
                <div className="price">
                  Jusqu'à <span className="blue">{elem.prix}€</span>
                </div>
              </div>
            </a>
          );
        }
      })}
    </div>  
  );
}