import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const CLEAN = "CLEAN";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTERED_BY_ABC = "FILTERED_BY_ABC";
export const FILTERED_BY_POPULATION = "FILTERED_BY_POPULATION";
export const FILTERED_CONTINENTS = "FILTERED_CONTINENTS";
export const FILTERED_ACTIVITY = "FILTERED_CONTINENTS";


export const getAllCountries = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/countries");
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export function postActivity(payload) {
  const response = axios.post("http://localhost:3001/activities", payload);
  return response;
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/countries/" + id);
    return dispatch({
      type: GET_COUNTRY_DETAIL,
      payload: json.data,
    });
  };
}

export function getActivities() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/activities");
    return dispatch({
      type: GET_ACTIVITIES,
      payload: json.data,
    });
  };
}

export function clean() {
  return {
    type: CLEAN,
  };
}

export const searchCountr = (name) => async (dispatch) => {
  const res = await axios.get(`http://localhost:3001/countries?name=${name}`);
  dispatch({
    type: SEARCH_COUNTRY,
    payload: res.data,
  });
};

export function filteredByContinents(payload){
  return{
    type:FILTERED_CONTINENTS,
    payload
  }
}

export function filteredByAbc (payload){
  return{
    type:FILTERED_BY_ABC,
    payload
  }
}
export function filteredByPopulation (payload){
  return{
    type:FILTERED_BY_POPULATION,
    payload
  }
}

export function filteredActivity(payload){
  return{
    type: FILTERED_ACTIVITY,
    payload
  }
}
