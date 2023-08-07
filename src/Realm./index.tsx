export const TypeSchema = {
  name: 'Type',
  properties: {
    id: 'string',
    booked: 'bool',
    gender: 'string',
    color: 'string',
  },
};

export const SeatAllotmentRealm = {
  name: 'SeatAllotmentRealm',
  properties: {
    data: {type: 'list', objectType: 'Type'},
  },
};
