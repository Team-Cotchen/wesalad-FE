import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   id: null,
  currentStep: 1,
  modalVisible: false,
  // nickName: undefined,
  // likeLanguages: [],
};

const JoinSlice = createSlice({
  name: 'JoinStep',
  initialState,
  reducers: {
    nextStep: (state, action) => ({
      ...state,
      currentStep: state.currentStep + 1,
    }),
    setModalVisible: (state, action) => ({
      ...state,
      modalVisible: action.payload,
    }),
  },
});

/*
nextStep: (state, action) => ({
      ...state,
      currentStep: state.currentStep + 1,
    }),
    previousStep: (state, action) => ({
      ...state,
      currentStep: state.currentStep - 1,
    }),
    clearStep: () => initialState,
    setSignUpUser: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    setModalVisible: (state, action) => ({
      ...state,
      modalVisible: action.payload,
    }),
*/

export const { nextStep, setModalVisible } = JoinSlice.actions;

export default JoinSlice;
