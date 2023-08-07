import {SeatAllotmentRealm, TypeSchema} from '../Realm.';

export function handleBook(data: any) {
  const config = {
    schema: [TypeSchema, SeatAllotmentRealm],
    schemaVersion: 1,
  };
  let returnStrify = '';
  const realm = new Realm(config);
  // realm.write(() => {
  //   realm.delete(realm.objects('SeatAllotmentRealm'));
  // });
  realm.write(() => {
    const realmData = realm.objects('SeatAllotmentRealm')[0]?.data;
    if (realmData) {
      let temp = [...realmData].concat(data);
      const newArray = new Map();
      temp.forEach(element => {
        if (element.booked || !newArray.has(element.id)) {
          newArray.set(element.id, element);
        }
      });
      const arrayPure = Array.from(newArray.values());
      realm.delete(realm.objects('SeatAllotmentRealm'));
      realm.create('SeatAllotmentRealm', {data: arrayPure});
      returnStrify = JSON.stringify(arrayPure);
    } else {
      realm.create('SeatAllotmentRealm', {data: data});
    }
  });

  if (returnStrify) {
    return returnStrify;
  } else {
    return data;
  }

  //   realm.close();
}
