import { useState } from 'react';

const useLocalStorage = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (err) {
      console.log(err);
      return value;
    }
  });
  
  const setValue = val => {
    try {
      const valueToStore = val instanceof Function ? val(storedValue) : val;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (err) {
      console.log(err);
    }
  };
 
  return [storedValue, setValue];
}

export default useLocalStorage;