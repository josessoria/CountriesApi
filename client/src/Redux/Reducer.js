import {
  GET_ALL_COUNTRIES,
  CREATE_ACTIVITY,
  SEARCH_COUNTRY,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRY_DETAIL,
  CLEAN,
  GET_ACTIVITIES,
  FILTERED_CONTINENTS,
  FILTERED_BY_ABC,
  FILTERED_BY_POPULATION,
  FILTERED_ACTIVITY,
} from "./Actions.js";

const initialState = {
  countriesAll: [],
  activityCreate: [],
  buscarCountry: [],
  filtro: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countriesAll: action.payload,
        filtro: action.payload,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        filtro: action.payload,
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        buscarCountry: action.payload,
      };

    case CLEAN:
      return {
        ...state,
        buscarCountry: null,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activityCreate: action.payload,
      };

    case FILTERED_CONTINENTS:
      const allContinents = state.countriesAll;
      const filterContinents =
        action.payload === "All"
          ? allContinents
          : allContinents.filter((e) => e.continente === action.payload);

      return {
        ...state,
        filtro: filterContinents,
      };

    case FILTERED_BY_ABC:
      const sortCountries =
        action.payload === "Asc"
          ? state.countriesAll.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countriesAll.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        filtro: sortCountries,
      };

    case FILTERED_BY_POPULATION:
      const sortPopulation =
        action.payload === "Asc"
          ? state.countriesAll.sort((a, b) => {
              if (a.poblacion > b.poblacion) {
                return -1;
              }
              if (b.poblacion > a.name) {
                return 1;
              }
              return 0;
            })
          : state.countriesAll.sort((a, b) => {
              if (a.poblacion > b.poblacion) {
                return 1;
              }
              if (b.poblacion > a.poblacion) {
                return -1;
              }
              return 0;
            });

      return {
        ...state,
        filtro: sortPopulation,
      };

    case FILTERED_ACTIVITY:
      let filter = [];
      state.countriesAll.map((country) => {
        country.activityCreate.map((activity) => {
          if (activity.nombre === action.payload) {
            return filter.push(country);
          }
        });
      });

      return {
        ...state,
        filtro: filter,
      };

    default:
      return initialState;
  }
}
