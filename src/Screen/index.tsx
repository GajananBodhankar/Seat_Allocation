/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Alert,
  FlatList,
} from 'react-native';
import Realm from 'realm';
import {styles} from './styles';
import RadioGroup from 'react-native-radio-buttons-group';
import {useAppDispatch, useAppSelector} from '../Redux/Store';
import {allocate, bookCnf} from '../Redux/Slice';
import {SeatAllotmentRealm, TypeSchema} from '../Realm.';
import {handleBook} from '../Components/HandleBook';
import {handleColorPress} from '../Components/HandleColorPress';
import {navigate} from '../Navigation/Navigate';
import {Route} from '../Navigation/Routes';

const Index = (props: any) => {
  const genderData = useMemo(
    () => [
      {
        id: '1',
        label: 'Male',
        value: 'Male',
      },
      {
        id: '2',
        label: 'Female',
        value: 'Female',
      },
    ],
    [],
  );
  const [selectedID, setSelectedID] = useState<any>();
  const [gender, setGender] = useState<string>('');
  const [bookarray, setbookarray] = useState<any>([]);
  const {data} = useAppSelector(state => state.SeatReducer);
  const x = props?.route.params;
  const dispatch = useAppDispatch();
  function effectRender() {
    const config = {
      schema: [TypeSchema, SeatAllotmentRealm],
      schemaVersion: 1,
    };
    const realm = new Realm(config);
    realm.write(() => {
      const x = realm.objects('SeatAllotmentRealm')[0]?.data;
      if (x) {
        dispatch(allocate(JSON.stringify(x)));
      }
    });
  }

  useEffect(() => {
    effectRender();
    if (x?.temp) {
      setbookarray(x.temp);
    }
  }, []);
  function handlePress(
    item: any,
    selectedID: any,
    data: any[],
    gender: string,
  ) {
    let temp = handleColorPress(item, selectedID, data, gender);
    if (temp) {
      dispatch(allocate(temp));
    }
  }

  function renderItem(
    item: {id: any; booked?: boolean; gender?: string; color: any},
    index: number,
  ) {
    if (item.id) {
      return (
        <Pressable
          style={[
            styles.pressable,
            {
              backgroundColor:
                item.color === 'blue'
                  ? item.color
                  : item.color === 'pink'
                  ? item.color
                  : item.color === 'fuchsia'
                  ? item.color
                  : 'lightblue',
            },
          ]}
          onPress={() => handlePress(item, selectedID, data, gender)}
        />
      );
    }
    return null;
  }
  function radioPress(value: string) {
    if (value === '1') {
      setGender('Male');
      setSelectedID('1');
    } else {
      setGender('Female');
      setSelectedID('2');
    }
  }
  function handleBookPress(data: any) {
    let array = handleBook(data);
    let flag = false;
    let temp: any[] = bookarray;
    if (array) {
      data.forEach((i: {color: string}) => {
        if (i.color === 'pink') {
          flag = true;
          temp.push(i);
        }
      });
      setbookarray(temp);
      if (flag && gender.length > 0) {
        Alert.alert('Confirm Booking', 'Are you sure?', [
          {
            text: 'cancel',
          },
          {
            text: 'Book',
            onPress: () => {
              dispatch(bookCnf(array));
              setSelectedID('');
              setGender('');
              navigate(Route.end, {temp});
            },
          },
        ]);
      } else if (!flag && gender.length === 0) {
        Alert.alert('Please select seat and gender');
      } else if (gender.length === 0) {
        Alert.alert('Please select gender');
      } else if (!flag) {
        Alert.alert('Please select seat');
      }
    }
  }
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.checkBoxes}>
        <View style={styles.selectedMainView}>
          <View style={styles.selectedView} />
          <Text style={styles.selectedText}>Selected</Text>
        </View>
        <View style={styles.selectedMainView}>
          <View style={styles.bookedView} />
          <Text style={styles.selectedText}>Booked-M</Text>
        </View>
        <View style={styles.selectedMainView}>
          <View style={styles.availableView} />
          <Text style={styles.selectedText}>Available</Text>
        </View>
      </View>
      <View style={styles.selectedMainViewFemale}>
        <View style={styles.bookedViewFemale} />
        <Text style={styles.selectedText}>Booked-F</Text>
      </View>
      <View style={styles.radioStyle}>
        <Text style={styles.genderText}>Please Select Gender</Text>
        <RadioGroup
          radioButtons={genderData}
          layout="row"
          selectedId={selectedID}
          onPress={value => radioPress(value)}
        />
      </View>
      <View style={styles.blockView}>
        <View style={styles.mainBlockOne}>
          <View style={styles.block}>
            <Text style={styles.textBlock}>A</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.textBlock}>B</Text>
          </View>
        </View>
        <View style={styles.mainBlockOne}>
          <View style={styles.block}>
            <Text style={styles.textBlock}>C</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.textBlock}>D</Text>
          </View>
        </View>
      </View>
      <View style={styles.seatMainView}>
        <View style={styles.seatSubView}>
          <View style={styles.mainPressable}>
            <FlatList
              data={data?.slice(0, 5)}
              renderItem={({item, index}) => renderItem(item, index)}
            />
          </View>
          <View style={styles.mainPressable}>
            <FlatList
              data={data?.slice(5, 10)}
              renderItem={({item, index}) => renderItem(item, index)}
            />
          </View>
        </View>
        <View style={styles.seatSubView}>
          <View style={styles.mainPressable}>
            <FlatList
              data={data?.slice(10, 15)}
              renderItem={({item, index}) => renderItem(item, index)}
            />
          </View>
          <View style={styles.mainPressable}>
            <FlatList
              data={data?.slice(15)}
              renderItem={({item, index}) => renderItem(item, index)}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={styles.bookPressable}
        onPress={() => handleBookPress(data)}>
        <Text style={styles.bookText}>Book</Text>
      </Pressable>
    </View>
  );
};
export default Index;
