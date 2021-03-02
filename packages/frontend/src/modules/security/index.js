const TOKEN_KEY = 'CURRENT_TOKEN';
import Router from 'next/router';

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const updateToken = (token = '') => {
    if (!token || token === '' || token === null) {
        localStorage.removeItem(TOKEN_KEY);
      } else {
        localStorage.setItem(TOKEN_KEY, token);
      }
}

export const useLogout = () => {
    updateToken('');
    Router.push('/');
};