import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, subscriptionReducer, userReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
      profile: profileReducer,
      course: courseReducer,
      subscription: subscriptionReducer,
    //   admin: adminReducer,
    //   other: otherReducer,
  },
});

export default store;

export const server = 'https://course-bundler-7be0.onrender.com/api/v1';
