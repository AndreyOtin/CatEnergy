import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { RootReducer } from '../../index';
import { browserHistory } from '../../../components/history-router/history-router';

export const redirectBack = createAction('nav/redirectBack');

export const redirect: Middleware<unknown, RootReducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === redirectBack.type) {
          browserHistory.back();
        }

        return next(action);
      };
