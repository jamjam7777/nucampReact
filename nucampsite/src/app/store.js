import { commentsReducer} from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnerSlice';
import { promotionReducer } from '../features/promotions/promotionsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionReducer
  },
}); 
