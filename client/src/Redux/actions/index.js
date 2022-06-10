import { ADD_CHATBOT_INFO, CURRENT_PAGE, GET_ALL_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_DETAILS, GET_COUNTRIES_FOR_CONTINENT, GET_COUNTRIES_MATCH, GET_COUNTRIES_SORT, GET_FILTER_ACTIVITIES, HANDLER_PAGINATION, POST_ACTIVITY, SHOW_ALL_ACTIVITIES } from "../actions-types";
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

export function showAllActivies(){
  return async function (dispatch){
    const {data} = await axios.get("http://localhost:3001/allActivities")
    dispatch({type: SHOW_ALL_ACTIVITIES, payload:data})
  }
}

export function getAllActivies(){
  return async function (dispatch){
    const {data} = await axios.get("http://localhost:3001/countries")
    dispatch({type: GET_ALL_ACTIVITIES, payload:data})
  }
}

// export function getFilterActivities(nameActivity){
//   return async function (dispatch){
//     const {data} = await axios.get(`http://localhost:3001/activities/${nameActivity}`)
//     dispatch({type: GET_FILTER_ACTIVITIES, payload:[nameActivity,...data]})
//   }
// }
export function getFilterActivities(nameActivity){
  return{type: GET_FILTER_ACTIVITIES, payload:nameActivity}
}

export function setCurrentPage(currentPage){
  return {
    type:CURRENT_PAGE,
    payload:currentPage
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


export function getCountriesSort(data){
  return {
    type:GET_COUNTRIES_SORT,
    payload:data
  }
}
