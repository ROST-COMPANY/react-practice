import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInput: { id: "", pw: "" },
  isModalVisible: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.userInput.id = action.payload;
    },

    setPw: (state, action) => {
      state.userInput.pw = action.payload;
    },

    setIsModalVisible: (state, action) => {
      state.isModalVisible = action.payload;
    },
  },
});

export const { setId, setPw, setIsModalVisible } = loginSlice.actions;
export default loginSlice.reducer;
