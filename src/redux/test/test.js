// actions type
const LOAD_DATA = 'sales-zone/test/LOAD_DATA'
const initialState = [];

export const populateStore = (data) => ({
  type: LOAD_DATA,
  payload: data
})

// reducer
const testData = (state = initialState, action) => {
  switch(action){
    case LOAD_DATA:
      return action.payload;
    default:
      return state;
  };
};

export default testData;