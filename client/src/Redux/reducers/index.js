import { msgWelcome } from "../../components/ChatBot/bot.js";
import  {GET_ACTIVITIES_POPULATION, GET_ALL_ACTIVITIES, GET_ALL_INFORMATION, GET_FILTER_ACTIVITIES, SortNameAZ, SortNameZA, SortPopulationAZ, SortPopulationZA } from "../actions-types";
import { ADD_CHATBOT_INFO, GET_COUNTRIES, GET_COUNTRIES_SORT, GET_COUNTRIES_DETAILS, GET_COUNTRIES_FOR_CONTINENT, GET_COUNTRIES_MATCH, POST_ACTIVITY} from "../actions-types";

const initialState = {
    botInfo: [{bot:msgWelcome}],
    countries: [],
    // countriesMatch:[],
    countriesDetails:{},
    postActivities:[],
    allActivities:[]
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
          // countries: state.countries.filter((c) => c.continent && c.continent.toLowerCase().includes(searchContinent.toLowerCase()))
        }
      }

      case GET_COUNTRIES_SORT:{
        var getSort;
        if(action.payload.value==='sortName-a-z'){
          getSort = SortNameAZ
        }
        if(action.payload.value === 'sortName-z-a'){
          getSort = SortNameZA
        }
        if(action.payload.value === 'sortPopulation-a-z'){
          getSort = SortPopulationAZ
        }
        if(action.payload.value === 'sortPopulation-z-a'){
          getSort = SortPopulationZA
        }
        return {
          ...state,
           countries:[...state.countries.sort(getSort)]
        }
      }

      case GET_ALL_ACTIVITIES:{
        // console.log(action.payload?.map(c=> c.activities.length && c.activities?.map(c=>c.name)))
        // let countriesWithActivities = action.payload?.filter(c=> c.activities.length!==0)
        // var nameCountry = countriesWithActivities.map(c=>c.name)
        // var countryWithActivies = countriesWithActivities.filter(c=>c.activities)
        // let data = countryWithActivies.map(c=>c.activities.map(c=>c.name))
        // let dataArray = new Set(data[0])
        // let resultado = [...dataArray]
        // let indexSelect = action.payload[0].value
        // console.log()
        // console.log(action.payload)
        // console.log(action.payload[indexSelect].Countries?.map(act=>act)[indexSelect])

        return {
          ...state,
          allActivities:[...action.payload.filter(act=>act.name)] 
        }
      }

      case GET_FILTER_ACTIVITIES:{
        console.log(action.payload)
        return {
          ...state,
        countries: action.payload
        }
      }

      case POST_ACTIVITY:{
        return {
          ...state,
          postActivities:[...state.postActivities.includes()]
        }
      }
    
      default:
        return state;
    } 
  }