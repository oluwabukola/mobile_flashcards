import React, { useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux';
import Main from './Page';
import { setLocalNotification } from './utils/notifications';



const persistor = persistStore(store);


const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    accent: 'black'
  },
};



const App = () => {

  useEffect (()=>{
    setLocalNotification()
  })


  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <PaperProvider theme={theme}>
        <Main />
      </PaperProvider>
    </PersistGate>
  </Provider>

  );
}


export default App;
