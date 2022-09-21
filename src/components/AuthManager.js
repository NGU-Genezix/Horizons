import * as React from 'react';
import API from './APIManager';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';
// import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';

// WebBrowser.maybeCompleteAuthSession();
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
};
  
export default class AuthManager
{
    Instance = null;
    setConxion = null ;  
    
    /**
     * @returns {AuthManager}
     */
    getInstance()
    {
        if (AuthManager.Instance == null) {
            AuthManager.Instance = new AuthManager();
        }
        return this.Instance;
    }
    
    constructor()
    {
    }

    async connect(email, password)
    {
        let datas = new Map();
        datas.set("email", email);
        datas.set("password", password);
        let response = await new API().post("login", false, datas);
        if (response[0] != 200 && response[1])
        {
            let error = response[1];
            if (error.data && error.data.message && error.data.message.includes("Invalid credentials."))
                return [501, "Email ou mot de passe invalides"];
        }
        if (response[1].token != null)
        {
            localStorage.setItem("token", response[1].token);
            if (this.isConnected()){
              this.setConxion && this.setConxion(true);
              return [200, ""];
            }
            else
                return [400, "Token erreur"];
        }
        return [response[0], "Connection erreur"];
    }

    async register(element)
    {
        let datas = new Map();
        datas.set("email", element.email);
        datas.set("password", element.password);
        datas.set("firstname", element.firstname);
        datas.set("lastname", element.lastname);
        datas.set("statut", element.statut);
        datas.set("birthday", element.birthday);
        datas.set("sex", element.sex);
        console.log(datas)
        let response = await new API().post("register", false, datas);
        if (response[0] != 200 && response[1])
        {
            let error = response[1];
            if (error && error.data && error.data.detail && error.data.detail.includes("Duplicate entry"))
                return [501, "Email déjà utilisée"];
        }
        if (response[1] instanceof Array)
            return [response[0], response[1][0]];
        return [response[0], "Inscription erreur"];
    }

    async updateuser(element)
    {
        let datas = new Map();
        datas.set("firstName", element.firstname);
        datas.set("lastName", element.lastname);
        console.log("__" + datas)
        let response = await new API().post("update_user", true, datas);
        if (response[0] != 200 && response[1])
        {
            let error = response[1];
            if (error && error.data && error.data.detail && error.data.detail.includes("Duplicate entry"))
                return [501, "Email déjà utilisée"];
        }
        if (response[1] instanceof Array)
            return [response[0], response[1][0]];
        return [response[0], "Inscription erreur"];
    }

    disconnect()
    {
        this.setConxion && this.setConxion(false);
        localStorage.removeItem("token")
    }

    isConnected()
    {
        if (localStorage.getItem("token") == null || localStorage.getItem("token") == '')
            return (false);
        return (true);
    }

    // gooogle()
    // {
    //     const [request, response, promptAsync] = Google.useAuthRequest({
    //         expoClientId: '1004295464735-362d948b56qt32s7iqof8hb51eut96p0.apps.googleusercontent.com',
    //     });
    //     React.useEffect(() => {
    //         if (response?.type === 'success') {
    //           const { authentication } = response;
    //           console.log(authentication);
    //         }
    //     }, [response]);
    //     promptAsync();
    // }
};