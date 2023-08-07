import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  checkBoxes: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  selectedView: {
    height: 20,
    width: 20,
    backgroundColor: 'pink',
    borderRadius: 4,
  },
  selectedMainView: {
    flexDirection: 'row',
  },
  selectedMainViewFemale: {
    flexDirection: 'row',
    paddingTop: 10,
    alignSelf: 'center',
    paddingRight: 10,
  },
  selectedText: {
    paddingLeft: 5,
    fontSize: 18,
    paddingRight: 15,
    color: 'black',
  },
  bookedView: {
    height: 20,
    width: 20,
    backgroundColor: 'blue',
    borderRadius: 4,
  },
  bookedViewFemale: {
    height: 20,
    width: 20,
    backgroundColor: 'fuchsia',
    borderRadius: 4,
  },
  availableView: {
    height: 20,
    width: 20,
    backgroundColor: 'lightblue',
    borderRadius: 4,
  },
  block: {
    borderBottomColor: 'lightblue',
    borderBottomWidth: 3,
    width: 50,
    marginHorizontal: 10,
  },
  textBlock: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    padding: 15,
    paddingVertical: 25,
  },
  blockView: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  mainBlockOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seatMainView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 40,
  },
  pressable: {
    height: 50,
    width: 50,

    borderRadius: 10,
    marginVertical: 10,
  },
  seatSubView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainPressable: {
    marginHorizontal: 10,
  },
  radioStyle: {
    paddingTop: 20,
    alignSelf: 'center',
  },
  genderText: {
    textAlign: 'center',
    color: 'black',
    paddingVertical: 10,
    fontSize: 18,
  },
  bookPressable: {
    marginTop: 20,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#f03758',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  bookText: {
    color: 'white',
    fontSize: 16,
  },
});
