// const values = {
//   name: '',
//   surname: '',
//   country: '',
//   gender: '',
// };

export default function otherFun(state = {}, { type, meta, payload }) {
  switch (type) {
    case '@@redux-form/CHANGE':
      // const { field } = meta;
      console.log(7777, meta.field);
      return { ...state, values: { ...state.values, id: 1234 } };
    case '@@redux-form/START_SUBMIT':
      console.log(88888, meta);
      return { ...state, values: { ...state.values } };
    case 'LOAD_PROFILE':
      return { values: payload };
    default:
      return state;
  }
}
