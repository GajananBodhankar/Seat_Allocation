import {Dimensions, Platform, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 70 : 20,
    paddingHorizontal: 20,
  },
  pressable: {
    width: 50,
  },
  image: {
    height: 50,
    width: 50,
  },
  contents: {
    height: Dimensions.get('screen').height / 2,

    paddingHorizontal: 10,
  },
  flatlistView: {
    paddingHorizontal: 20,
  },
  congrats: {
    color: 'green',
    fontSize: 22,
    fontWeight: '600',
    paddingVertical: 30,
  },
  details: {
    fontSize: 20,
    paddingBottom: 20,
  },
  txt: {
    fontSize: 18,
  },
});
