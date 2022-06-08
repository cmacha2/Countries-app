import { msgWelcome } from "../../components/ChatBot/bot.js";
import { ADD_CHATBOT_INFO, GET_COUNTRIES, GET_COUNTRIES_SORT, GET_COUNTRIES_DETAILS, GET_COUNTRIES_FOR_CONTINENT, GET_COUNTRIES_MATCH, POST_ACTIVITY} from "../actions-types";

const initialState = {
    botInfo: [{bot:msgWelcome}],
    countries: [],
    // countriesMatch:[],
    countriesDetails:{},
    activities:[]
  }; 

  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_CHATBOT_INFO:{
        return {
          ...state,
          botInfo: [...state.botInfo, action.payload]
        }
      }
      case GET_COUNTRIES:{
        return {
          ...state,
          countries:action.payload
        }
      }
      case GET_COUNTRIES_MATCH:{
        return {
          ...state,
          countries:action.payload
        }
      }

      case GET_COUNTRIES_DETAILS:{
        return {
          ...state,
          countriesDetails: action.payload
        }
      }

      case GET_COUNTRIES_FOR_CONTINENT:{
        const searchContinent = action.payload[0].value
        console.log(searchContinent)
        return {
          ...state,
           countries: action.payload.filter((c) => c.continent && c.continent.toLowerCase().includes(searchContinent.toLowerCase()))
        }
      }

      case GET_COUNTRIES_SORT:{
        let typeSort = action.payload.value
        function SortArray(x, y){
          return x.name.localeCompare(y.name);
        }
        if(typeSort==='sort-a-z'){
        //  var names = state.countries.map(c=>c.name)
          var typeSorts = state.countries.sort(SortArray)
          console.log(typeSorts) 
        }
        // typeSort = el otro ordenamiento etc 
        return {
          ...state,
           countries:[...typeSorts]
        }
      }

      case POST_ACTIVITY:{
        return {
          ...state,
          activities:[...state.activities, action.payload]
        }
      }
    
      default:
        return state;
    } 
  }