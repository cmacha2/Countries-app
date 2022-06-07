import { msgWelcome } from "../../components/ChatBot/bot.js";
import { ADD_CHATBOT_INFO, GET_COUNTRIES, GET_COUNTRIES_DETAILS, GET_COUNTRIES_MATCH, POST_ACTIVITY} from "../actions-types";

const initialState = {
    botInfo: [{bot:msgWelcome}],
    countries: [],
    // countriesMatch:[],
    countriesDetails:[],
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
          countriesDetails:[...state.countriesDetails, action.payload]
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
