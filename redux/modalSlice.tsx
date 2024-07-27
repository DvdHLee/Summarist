import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  modalOpen: "signup"
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.modalOpen = "login";
    },
    openSignupModal: (state) => {
      state.modalOpen = "signup";
    },
    closeModal: (state) => {
      state.modalOpen = "none"
    },
  },
});

export const {
  openLoginModal,
  openSignupModal,
  closeModal
} = modalSlice.actions;

export default modalSlice.reducer;
