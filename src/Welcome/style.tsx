import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: Dimensions.get('screen').height / 2,
    width: Dimensions.get('screen').width / 2,
  },
});
