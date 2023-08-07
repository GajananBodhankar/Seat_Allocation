import React, {useEffect} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {Route} from '../Navigation/Routes';
import {style} from './style';
const Welcome = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Route.home);
    }, 2000);
  }, []);
  return (
    <View style={style.maincontainer}>
      <SafeAreaView />
      <Image
        source={require('../Assets/Welcome.png')}
        style={style.img}
        resizeMode="contain"
      />
    </View>
  );
};
export default Welcome;
