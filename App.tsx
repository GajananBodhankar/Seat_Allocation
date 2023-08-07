/* eslint-disable react/self-closing-comp */
import React, {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import ContextData from './src/Realmdb/Screens/Context';
import RootNavg from './src/Realmdb/Screens/RootNavg';
import {Alert, NativeModules, Pressable, Text, View} from 'react-native';
import Index from './src/Screen';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';
import RootNavigation from './src/Navigation';

export const User = createContext({
  mainData: [],
  setMainData: (i: any) => {},
});

const App = () => {
  // const {memodata} = ContextData();
  // return (
  //   <User.Provider value={memodata}>
  //     <RootNavg />
  //   </User.Provider>
  // );
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
