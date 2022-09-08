import createDataContext from './createDataContext';
import { http } from '../api/interceptor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return { ...state, isLoggedIn: action.payload ? true : false, errorMessage: '' };
    case 'SIGNOUT':
      return { ...state, isLoggedIn: false, errorMessage: '' };
    case 'STOP_LOADING':
      return { ...state, isLoading: false };
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'CLEAR_ERROR':
      return { ...state, errorMessage: '' };
    case 'ADD_ERROR':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'SIGNIN', payload: token });
    navigate('TrackList');
  } else {
    navigate('LoginFlow');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'CLEAR_ERROR' });
};

const signup = (dispatch) => async (payload) => {
  try {
    dispatch({ type: 'START_LOADING' });
    const { data } = await http.post('signup', payload);
    dispatch({ type: 'STOP_LOADING' });
    AsyncStorage.setItem('token', data.token);
    dispatch({ type: 'SIGNIN', payload: data.token });
    navigate('TrackList');
  } catch (error) {
    const { data } = error;
    dispatch({ type: 'STOP_LOADING' });
    dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
  }
};

const signin = (dispatch) => async (payload) => {
  try {
    dispatch({ type: 'START_LOADING' });
    const { data } = await http.post('signin', payload);
    dispatch({ type: 'STOP_LOADING' });
    AsyncStorage.setItem('token', data.token);
    dispatch({ type: 'SIGNIN', payload: data.token });
    navigate('TrackList');
  } catch (error) {
    const { data } = error;
    dispatch({ type: 'STOP_LOADING' });
    dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'SIGNOUT' });
  navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin, signout },
  { isLoggedIn: false, isLoading: false, errorMessage: '' },
);
