import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { worker } from './mocks/server';
import { store } from './store';
import { Provider } from 'react-redux';
import HistoryRouter from './components/history-router/history-router';
import { fetchProducts } from './store/app-slice/app-slice';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

async function start() {
  await worker.start({
    onUnhandledRequest: 'bypass'
  });

  root.render(
    <React.StrictMode>
      <HistoryRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </HistoryRouter>
    </React.StrictMode>
  );
}

start();
