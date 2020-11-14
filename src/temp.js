import React from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
//import reducers directory and default is index.js
import reducers from 'reducers';

//this is useful for test
// props.childern : allow us to wrap different items , it is an APP 
export default ({ children, initalState={} }) => {
    
    const store= createStore(reducers, 
                            initalState, 
                            applyMiddleware(reduxPromise));
    return (
        <Provider store={store}>
            {children} 
        </Provider>
    );
};