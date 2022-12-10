import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AppState,
  SetLogin,
  SetFriends,
  SetPosts,
  SetPost
} from 'types/typings';

const initialState: AppState = {
  mode: 'light',
  user: null,
  token: null,
  posts: []
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },

    setLogin: (state, action: PayloadAction<SetLogin>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },

    setFriends: (state, action: PayloadAction<SetFriends>) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error('User friends non-existent');
      }
    },

    setPosts: (state, action: PayloadAction<SetPosts>) => {
      state.posts = action.payload.posts;
    },

    setPost: (state, action: PayloadAction<SetPost>) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          return action.payload.post;
        }

        return post;
      });

      state.posts = updatedPosts;
    }
  }
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;

export default authSlice.reducer;
