import {
  useContext,
  useEffect,
  createContext,
  useReducer,
  useCallback,
} from 'react';
const URL = 'http://localhost:9000';
const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: '',
};
function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };
    case 'cities/loaded':
      return { ...state, isLoading: false, cities: action.payload };

    case 'city/loaded':
      return { ...state, isLoading: false, currentCity: action.payload };

    case 'city/created':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case 'cities/deleted':
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter(city => city.id !== action.payload),
        currentCity: {},
      };

    case 'rejected':
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error('Unknown action type');
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: 'loading' });
      try {
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        dispatch({ type: 'cities/loaded', payload: data });
      } catch (err) {
        dispatch({ type: 'rejected', payload: `${err} Error loading cities` });
      }
    }
    fetchCities();
  }, []);
  // causes infinite in City components Effect dependency array, so i use useCallback hook to make it stable
  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;
      dispatch({ type: 'loading' });
      try {
        const res = await fetch(`${URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: 'city/loaded', payload: data });
      } catch (err) {
        dispatch({ type: 'rejected', payload: `${err} Error loading city` });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    dispatch({ type: 'loading' });
    try {
      const res = await fetch(`${URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch({ type: 'city/created', payload: data });
      console.log('data', data);
    } catch (err) {
      dispatch({ type: 'rejected', payload: `${err} Error creating city` });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: 'loading' });
    try {
      await fetch(`${URL}/cities/${id}`, {
        method: 'DELETE',
      });

      dispatch({ type: 'cities/deleted', payload: id });
    } catch (err) {
      dispatch({ type: 'rejected', payload: `${err} Error deleting city` });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error('CitiesContext was use outside the CitiesProvider');
  return context;
};

export { CitiesProvider, useCities };
