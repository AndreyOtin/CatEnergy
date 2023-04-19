import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { worker } from './mocks/server';
import { store } from './store';
import { Provider } from 'react-redux';
import HistoryRouter from './components/history-router/history-router';
import axios from 'axios';
import { Server as MockSocketServer } from 'mock-socket';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

async function start() {
  await worker.start({
    onUnhandledRequest: 'bypass'
  });

  const res = await axios('fakeApi/posts');

  const socketServer = new MockSocketServer('ws://localhost');

  socketServer.on('connection', (socket) => {
    // eslint-disable-next-line no-console
    console.log('sfsadf');

    socket.on('message', (data) => {
      // eslint-disable-next-line no-console
      console.log('sfsadf', data);
    });
  });

  root.render(
    <React.StrictMode>
      <HistoryRouter>
        <Provider store={store}>
          <App data={res.data as []}/>
        </Provider>
      </HistoryRouter>
    </React.StrictMode>
  );
}

start();
