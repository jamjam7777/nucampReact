import { commentsReducer} from '../features/comments/commentsSlice';
import logger from 'redux-logger';
import { partnersReducer } from '../features/partners/partnerSlice';
import { promotionReducer } from '../features/promotions/promotionsSlice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
}); 
