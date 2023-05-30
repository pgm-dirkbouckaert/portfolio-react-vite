import { createContext, useContext, useState } from 'react';

export const ActiveNavItemContext = createContext();

export const useActiveNav = () => useContext(ActiveNavItemContext);

export const ActiveNavItemProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState('navitem-who-am-i');

  return (
    <ActiveNavItemContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </ActiveNavItemContext.Provider>
  );
};
