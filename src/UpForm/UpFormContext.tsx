import * as React from 'react';

const UpFormContext = React.createContext<{
  withFloatingLabel: boolean;
  columnNumber?: number;
  rowSpacing?: number;
  columnSpacing?: number
  
}>({
  withFloatingLabel: false,
  columnNumber: 1,
  rowSpacing: 5,
  columnSpacing: 5,
});

export const UpFormContextProvider = UpFormContext.Provider;
export const UpFormContextConsumer = UpFormContext.Consumer;
