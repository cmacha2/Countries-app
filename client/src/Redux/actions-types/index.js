export const ADD_CHATBOT_INFO = "ADD_CHATBOT_INFO"
export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_COUNTRIES_MATCH = "GET_COUNTRIES_MATCH"
export const GET_COUNTRIES_DETAILS = "GET_COUNTRIES_DETAILS"
export const POST_ACTIVITY = "POST_ACTIVITY"
export const GET_COUNTRIES_FOR_CONTINENT = "GET_COUNTRIES_FOR_CONTINENT"
export const  GET_COUNTRIES_SORT = "GET_COUNTRIES_SORT"
export const SHOW_ALL_ACTIVITIES = "SHOW_ALL_ACTIVITIES"
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES"
export const GET_FILTER_ACTIVITIES = "GET_FILTER_ACTIVITIES"
export const CURRENT_PAGE = "CURRENT_PAGE"
export const SWITCH_THEME = "SWITCH_THEME"

export function SortNameAZ(a, b){
    return a.name.localeCompare(b.name);
}

export function SortNameZA(a, b){
    return b.name.localeCompare(a.name);
}

export function SortPopulationAZ(a,b){
    return a.population-b.population
}

export function SortPopulationZA(a,b){
    return b.population-a.population
}