import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registation => {
        console.log('ServiceWorker registed!');
      })
      .catch(err => {
        console.log('ServiceWorker error!');
      });
  });
}

ReactDom.render(<App />, document.getElementById('app'));
