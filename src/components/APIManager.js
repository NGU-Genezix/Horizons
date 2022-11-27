import axios, { AxiosError, AxiosRequestHeaders, AxiosResponse } from 'axios';

// const ip = "https://cors-everywhere-me.herokuapp.com/https://gregoriex.fr/api/";
// const ip = "https://gregoriex.fr/api/";

const ip = "https://cors-everywhere-me.herokuapp.com/http://89.234.183.150/api/";
// const ip = "http://89.234.183.150/api/";

export default class API
{
  getURL(url, secured)
  {
    return (ip + url);
  }

  createHeaders(secured)
  {
    let headers = {
      'Content-Type': "application/json",
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
    };
    if (secured) {
      let token = localStorage.getItem("token");  
      headers['Authorization'] = 'Bearer ' + token;
    }
    return (headers);
  }
  
  parse(data)
  {
    try
    {
      let parse = JSON.parse(data);
      return parse;
    }
    catch (e)
    {
      return data;
    }
  }

  errorParsing(error)
  {
    if (typeof error === "string") {
      const a = error;
      return a;
    } else if (error instanceof Error) {
      return error.message;
    }
    return ("");
}
  //get("login", true or false)
  async get(url, secured)
  {
    if (secured == true && localStorage.getItem("token") == null)
      return [400, "Vous n'êtes pas connecté"];
    try
    {
      let response = await axios({
        method: 'get',
        url: this.getURL(url, secured),
        headers: this.createHeaders(secured),
      });
      return [response.status, this.parse(response.data)];
    }
    catch (e)
    {
      return [400, e.response];
    }
  }
  
  async tchat(url, secured, data)
  {
    console.log(data)
    
    if (secured == true && localStorage.getItem("token") == null)
      return [400, "Vous n'êtes pas connecté"];
    try
    {
      console.log("test")
      //Enlever Data pour le budget
      let Data = {};
      
      if (data != null) {
        Data["type"] = data.type;
        Data["res"] = data.res;
        if (data.dataToSendBack != null) {
          Data["dataToSendBack"] = data.dataToSendBack;
        } else {
          Data["dataToSendBack"] = [];
        }
      }
      console.log(Data)
      console.log(JSON.stringify(Data))
      let response = await axios({
        method: 'post',
        url: this.getURL(url, secured),
        headers: this.createHeaders(secured),
        data: JSON.stringify(Data),
      });
      console.log(response)
      return [response.status, this.parse(response.data)];
    }
    catch (e)
    {
      return [400, e.response];
    }
  }

  async post(url, secured, data)
  {
    console.log(data)
    
    if (secured == true && localStorage.getItem("token") == null)
      return [400, "Vous n'êtes pas connecté"];
    try
    {
      console.log("test")
      //Enlever Data pour le budget
      let Data = {};
      console.log(data)
      if (data != null) {
        console.log(data)
        data.forEach((value, key) => {
          console.log(key)
          Data[key] = value;
          console.log(key)
        })
      }
      console.log(Data)
      let response = await axios({
        method: 'post',
        url: this.getURL(url, secured),
        headers: this.createHeaders(secured),
        data: JSON.stringify(Data),
      });
      console.log(response)
      return [response.status, this.parse(response.data)];
    }
    catch (e)
    {
      return [400, e.response];
    }
  }

  async post_aide(url, secured, data)
  {
    console.log(data)
    
    if (secured == true && localStorage.getItem("token") == null)
      return [400, "Vous n'êtes pas connecté"];
    try
    {
      console.log("test")
      //Enlever Data pour le budget
      let Data = {};
      console.log(data["id"])
      Data["id"] = data["id"]
      let response = await axios({
        method: 'post',
        url: this.getURL(url, secured),
        headers: this.createHeaders(secured),
        data: JSON.stringify(Data),
      });
      console.log(response)
      return [response.status, this.parse(response.data)];
    }
    catch (e)
    {
      return [400, e.response];
    }
  }

  async post_budget(url, secured, data)
  {
    console.log(data)
    
    if (secured == true && localStorage.getItem("token") == null)
      return [400, "Vous n'êtes pas connecté"];
    try
    {
      console.log("test")
      let response = await axios({
        method: 'post',
        url: this.getURL(url, secured),
        headers: this.createHeaders(secured),
        data: JSON.stringify(data),
      });
      console.log(response)
      return [response.status, this.parse(response.data)];
    }
    catch (e)
    {
      return [400, e.response];
    }
  }
};