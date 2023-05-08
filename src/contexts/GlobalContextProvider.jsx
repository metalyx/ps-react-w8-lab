import React, { createContext, useState } from 'react';
import { initialProducts } from '../constants';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const val = useState(initialProducts);
    return (
        <GlobalContext.Provider value={val}>{children}</GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
