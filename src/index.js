import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const admin = require('firebase-admin');
// const serviceAccount = require('./service-account.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();