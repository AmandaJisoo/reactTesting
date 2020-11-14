
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App'
import Root from './reducers/Root'
//import our own reducer directory -> default index.js in reducer directory
//whatever we exported in index.js
// import reducers from 'reducers'

ReactDOM.render(
    //App component will be passed as a child to the Root component
    <Root>
      <App />
    </Root>,
    document.getElementById('root')
);
// registerServiceWorker();