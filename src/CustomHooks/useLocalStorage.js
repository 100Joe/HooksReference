const useLocalStorage = (key = '', intialValue = '') => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : intialValue;
    } catch (error) {
      return intialValue;
    }
  });

  const setLocalStorageState = newState => {
    try {
      const newStateValue = typeof newState === 'function' ? newState(state) : newState;
      setState(newStateValue);
      window.localStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (error) {
      console.error(`Unable to store a new value for ${key} in localStorage`);
    }
  };

  return [state, setLocalStorageState];
};

export default useLocalStorage;