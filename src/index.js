import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  'user': {
    'firstName': 'Héctor',
    'lastName': 'Acosta',
    'email': 'hacost@hotmail.com',
    'password': '123',
  },
  'playing': {},
  'myList': [],
  'products': [
    {
      'id': '1',
      'name': 'Jumex lata 355ml (24 piezas )',
      'price': 195,
      'category': 'Jugos',
      'cover': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      'id': '2',
      'name': 'Marias gamesa (con 22 piezas)',
      'price': 177,
      'category': 'Galletas',
      'cover': 'http://dummyimage.com/800x600.png/302140/ffffff',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      'id': '3',
      'name': 'Arcoiris ( con 16 piezas)',
      'price': 160,
      'category': 'Galletas',
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      'id': '4',
      'name': 'Chiles san marcos rajas de 215gr (24 piezas)',
      'price': 220,
      'category': 'Chiles enlatados',
      'cover': 'http://dummyimage.com/800x600.png/B36F20/ffffff',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      'id': '5',
      'name': 'La costeña rajas de 220gr (48 piezas)',
      'price': 470,
      'category': 'Chiles enlatados',
      'cover': 'http://dummyimage.com/800x600.png/CCC539/ffffff',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
