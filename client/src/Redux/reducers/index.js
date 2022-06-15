import { msgWelcome } from "../../components/ChatBot/bot.js";
import  {CURRENT_PAGE, GET_ACTIVITIES_POPULATION, GET_ALL_ACTIVITIES, GET_ALL_INFORMATION, GET_FILTER_ACTIVITIES, HANDLER_PAGINATION, SHOW_ALL_ACTIVITIES, SortNameAZ, SortNameZA, SortPopulationAZ, SortPopulationZA } from "../actions-types";
import { ADD_CHATBOT_INFO, GET_COUNTRIES, GET_COUNTRIES_SORT, GET_COUNTRIES_DETAILS, GET_COUNTRIES_FOR_CONTINENT, GET_COUNTRIES_MATCH, POST_ACTIVITY} from "../actions-types";

const initialState = {
    botInfo: [{bot:msgWelcome}],
    countries: [],
    allCountries:[],
    countriesDetails:{},
    postActivities:[],
    allActivities:[],
    currentPage:0,
    status:0
  }; 

  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_CHATBOT_INFO:{
        return {
          ...state,
          currentPage:0,
          botInfo: [...state.botInfo, action.payload]
        }
      }
      case GET_COUNTRIES:{
        const [countries,status] = action.payload
        return {
          ...state,
          currentPage:0,
          countries:countries,
          allCountries:countries,
          status:status,
        }
      }
      case GET_COUNTRIES_MATCH:{
        console.log(action.payload)
        if(action.payload>=400){
          return {
            ...state,
            currentPage:0,
            countries:[],
            status:404
          }
        }
        const [countries,status] = action.payload
        return {
          ...state,
          currentPage:0,
          countries:countries,
          status:status
        }
      }

      case GET_COUNTRIES_DETAILS:{
        return {
          ...state,
          currentPage:0,
          countriesDetails: action.payload
        }
      }

      case GET_COUNTRIES_FOR_CONTINENT:{
        const searchContinent = action.payload[0].value
        console.log(searchContinent)
        console.log(searchContinent)
        return {
          ...state,
          currentPage:0,
          countries: action.payload.slice(0).filter((c) => c.continent && c.continent.toLowerCase().includes(searchContinent.toLowerCase()))
          // countries: state.countries.filter((c) => c.continent && c.continent.toLowerCase().includes(searchContinent.toLowerCase()))
        }
      }

      case GET_COUNTRIES_SORT:{
        console.log(action.payload)
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
          currentPage:0,
           countries:[...state.countries.sort(getSort)]
        }
      }

      case SHOW_ALL_ACTIVITIES:{
        return {
          ...state,
          currentPage:0,
          allActivities:[...action.payload.filter(act=>act.name)] 
        }
      }

      case GET_ALL_ACTIVITIES:{

        return {
          ...state,
          currentPage:0,
          countries:[...action.payload.filter(c=>c.Activities.length)] 
        }
      }

      // case GET_FILTER_ACTIVITIES:{
      //   console.log(action.payload)
      //   return {
      //     ...state,
      //   countries: action.payload
      //   }
      // }

      case GET_FILTER_ACTIVITIES:{
        var filterActivities = state.countries.filter((p) => {
          let activities = p.Activities.filter( (a) => a.name.includes(action.payload));
          if (activities && activities.length > 0) {
              return true;
          }
          return false;
         });
        if(action.payload==='allCountries'){
          filterActivities = state.countries.filter(c=>c.Activities.length)
        }
        return {
          ...state,
          currentPage:0,
        countries: filterActivities
        }
      }

      case CURRENT_PAGE:{
        console.log(action.payload)
        return{
          ...state,
          currentPage:action.payload
        }
      }


      case POST_ACTIVITY:{
        return {
          ...state,
          currentPage:0,
          postActivities:action.payload
        }
      }
    
      default:
        return state;
    } 
  }