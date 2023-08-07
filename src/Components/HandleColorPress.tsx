import {Alert} from 'react-native';

export function handleColorPress(
  item: any,
  selectedID: any,
  data: any[],
  gender: any,
) {
  let index = data.findIndex(i => i == item);
  if (!selectedID) {
    Alert.alert('Please select gender');
  } else {
    let temp = data.filter(i => i == item);
    if (temp[0].color == '') {
      if (index > 4 && index < 10 && data[index - 5].color == 'blue') {
        if (data[index - 5].gender == gender) {
          temp[0] = {
            ...temp[0],
            color: 'pink',
            gender: gender,
            booked: true,
          };
          temp.splice(0, 1, temp[0]);
        } else {
          Alert.alert(`Seat allocated for ${data[index - 5].gender}`);
        }
      } else if (
        index > 4 &&
        index < 10 &&
        (data[index - 5].color == '' || data[index - 5].color == 'pink')
      ) {
        temp[0] = {
          ...temp[0],
          color: 'pink',
          gender: gender,
          booked: true,
        };
        temp.splice(0, 1, temp[0]);
      } else if (index < 5 && data[index + 5].color == 'blue') {
        if (data[index + 5].gender == gender) {
          temp[0] = {
            ...temp[0],
            color: 'pink',
            gender: gender,
            booked: true,
          };
          temp.splice(0, 1, temp[0]);
        } else {
          Alert.alert(`Seat allocated for  ${data[index + 5].gender}`);
        }
      } else if (
        index < 5 &&
        (data[index + 5].color == '' || data[index + 5].color == 'pink')
      ) {
        temp[0] = {
          ...temp[0],
          color: 'pink',
          gender: gender,
          booked: true,
        };
        temp.splice(0, 1, temp[0]);
      } else if (index > 9 && index < 15 && data[index + 5].color == 'blue') {
        if (data[index + 5].gender == gender) {
          temp[0] = {
            ...temp[0],
            color: 'pink',
            gender: gender,
            booked: true,
          };
          temp.splice(0, 1, temp[0]);
        } else {
          Alert.alert(`Seat allocated for  ${data[index + 5].gender}`);
        }
      } else if (
        index > 9 &&
        index < 15 &&
        (data[index + 5].color == '' || data[index + 5].color == 'pink')
      ) {
        temp[0] = {
          ...temp[0],
          color: 'pink',
          gender: gender,
          booked: true,
        };
        temp.splice(0, 1, temp[0]);
      } else if (index > 14 && index < 20 && data[index - 5].color == 'blue') {
        if (data[index - 5].gender == gender) {
          temp[0] = {
            ...temp[0],
            color: 'pink',
            gender: gender,
            booked: true,
          };
          temp.splice(0, 1, temp[0]);
        } else {
          Alert.alert(`Seat allocated for  ${data[index - 5].gender}`);
        }
      } else if (
        index > 14 &&
        index < 20 &&
        (data[index - 5].color == '' || data[index - 5].color == 'pink')
      ) {
        temp[0] = {
          ...temp[0],
          color: 'pink',
          gender: gender,
          booked: true,
        };
        temp.splice(0, 1, temp[0]);
      } else {
        Alert.alert(`Seat not allocated for ${gender}`);
      }
    } else if (temp[0].color == 'pink') {
      temp[0] = {
        ...temp[0],
        color: '',
        gender: gender,
        booked: false,
      };
      temp.splice(0, 1, temp[0]);
    }
    let mainData: {
      id: string;
      booked: boolean;
      gender: string;
      color: string;
    }[] = [];
    data.map(i => {
      if (i == item) {
        mainData.push(temp[0]);
      } else {
        mainData.push(i);
      }
    });
    return mainData;
  }
}
