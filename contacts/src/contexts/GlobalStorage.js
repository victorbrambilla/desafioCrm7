import React from 'react';
import { dataService } from '../services/dataService';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [loading, setloading] = React.useState(false);
  const [contacts, setContacts] = React.useState([]);

  const getCont = () => {
    setloading(true);
    dataService
      .getContacts()
      .then((data) => {
        //console.log(data);
        setloading(false);
        setContacts(data);
      })
      .catch((err) => {
        setloading(false);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <GlobalContext.Provider value={{ loading, setloading, getCont, contacts }}>
      {children}
    </GlobalContext.Provider>
  );
};
