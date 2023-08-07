import {View, Text} from 'react-native';
import {style} from './style';

export function renderItem(item: any, index) {
  if (item.booked) {
    if (item.id < 6) {
      return (
        <View style={style.flatlistView}>
          <Text style={style.txt}>
            A-{item.id} {item.gender}
          </Text>
        </View>
      );
    } else if (item.id > 5 && item.id < 11) {
      return (
        <View style={style.flatlistView}>
          <Text style={style.txt}>
            B-{item.id} {item.gender}
          </Text>
        </View>
      );
    } else if (item.id > 10 && item.id < 16) {
      return (
        <View style={style.flatlistView}>
          <Text style={style.txt}>
            C-{item.id} {item.gender}
          </Text>
        </View>
      );
    } else if (item.id > 15) {
      return (
        <View style={style.flatlistView}>
          <Text style={style.txt}>
            D-{item.id} {item.gender}
          </Text>
        </View>
      );
    }
  }
  return null;
}
