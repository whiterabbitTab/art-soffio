"use client"

import { Provider } from 'react-redux';
import styles from './ReduxProvider.module.scss';
import { store } from '@/store/store';

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return(
    <Provider store={store}>
      {children}
    </Provider>
  );
};
