import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {style} from './style';
import {Route} from '../Navigation/Routes';
import {navigate} from '../Navigation/Navigate';
import {renderItem} from './renderItem';

const End = (props: any) => {
  const {temp} = props.route.params;
  useEffect(() => console.log(temp), []);

  function handlePress() {
    navigate(Route.home, {temp});
  }
  return (
    <View style={style.mainContainer}>
      <SafeAreaView />
      <Pressable style={style.pressable} onPress={handlePress}>
        <Image source={require('../Assets/Back.png')} style={style.image} />
      </Pressable>
      <View style={style.contents}>
        <Text style={style.congrats}>
          Congratulations, Your seat has booked!!
        </Text>
        <Text style={style.details}>Details are:</Text>
        <FlatList
          data={temp}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
      <SafeAreaView />
    </View>
  );
};
export default End;
