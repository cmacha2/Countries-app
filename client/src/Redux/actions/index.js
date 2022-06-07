import { ADD_CHATBOT_INFO, GET_COUNTRIES, GET_COUNTRIES_DETAILS, GET_COUNTRIES_FOR_CONTINENT, GET_COUNTRIES_MATCH, POST_ACTIVITY } from "../actions-types";
import axios from "axios"

export function addChatBotInfo(payload) {
  return { type: ADD_CHATBOT_INFO, payload };
}

export function getCountries(){
  return async function (dispatch){
    const {data} = await axios.get("http://localhost:3001/countries")
    dispatch({type: GET_COUNTRIES, payload:data })
  }
}

export function getCountriesMatch(name){
  return async function (dispatch){
    const {data} = await axios.get(`http://localhost:3001/countries?name=${name}`)
    dispatch({type: GET_COUNTRIES_MATCH, payload:data })
  }
}

export function getCountriesDetails(id){
  return async function (dispatch){
    const {data} = await axios.get(`http://localhost:3001/countries/${id}`)
    dispatch({type: GET_COUNTRIES_DETAILS, payload:data })
  }
}


export function postActivity(body){
  return async function (dispatch){
    const {data} = await axios.post(`http://localhost:3001/activities`,body)
    dispatch({type: POST_ACTIVITY, payload:data })
  }
}

export function filterForContinent(searchContinent){
  return async function (dispatch){
    const {data} = await axios.get("http://localhost:3001/countries")
    dispatch({type: GET_COUNTRIES_FOR_CONTINENT, payload:[ searchContinent,...data] })
  }
}