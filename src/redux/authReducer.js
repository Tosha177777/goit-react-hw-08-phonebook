const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const {
  registerThunk,
  loginThunk,
  refreshThunk,
  logoutThunk,
} = require('./operations');

const INITIAL_STATE = {
  token: null,
  user: {
    email: null,
    name: null,
  },
  isSignedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      //-------------------Registration----------
      // .addCase(registerThunk.pending, state => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isSignedIn = true;
      })
      // .addCase(registerThunk.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      //-----------LOGIN------------------
      // .addCase(loginThunk.pending, state => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isSignedIn = true;
      })
      // .addCase(loginThunk.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      //-----------Refresh------------------
      // .addCase(refreshThunk.pending, state => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSignedIn = true;
      })
      // .addCase(refreshThunk.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      //-----------LogOut------------------
      .addCase(logoutThunk.fulfilled, (state, action) => {
        return INITIAL_STATE;
      })
      .addMatcher(
        isAnyOf(
          logoutThunk.pending,
          loginThunk.pending,
          refreshThunk.pending,
          registerThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          logoutThunk.rejected,
          loginThunk.rejected,
          refreshThunk.rejected,
          registerThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
