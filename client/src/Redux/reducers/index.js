import { msgWelcome } from "../../components/ChatBot/bot.js";
import { ADD_CHATBOT_INFO, GET_COUNTRIES, GET_COUNTRIES_AFRICA, GET_COUNTRIES_AMERICA, GET_COUNTRIES_ANTARTIDA, GET_COUNTRIES_ASIA, GET_COUNTRIES_DETAILS, GET_COUNTRIES_EUROPA, GET_COUNTRIES_FOR_CONTINENT, GET_COUNTRIES_MATCH, GET_COUNTRIES_OCEANIA, POST_ACTIVITY} from "../actions-types";

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
        const searchContinent = action.payload[0].searchContinent
        console.log(searchContinent)
        return {
          ...state,
           countries: action.payload.filter((c) => c.continent && c.continent.toLowerCase().includes(searchContinent.toLowerCase()))
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
