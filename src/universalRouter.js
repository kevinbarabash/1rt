import React from 'react';
import Router from 'react-router';
import routes from './views/routes';
import { Provider } from 'react-redux';
import {maybeLoadPath} from './actions/topicTreeActions';

const getFetchData = (component) => {
  return component.fetchData || (component.DecoratedComponent && component.DecoratedComponent.fetchData);
};

export function createTransitionHook(store) {
  return (nextState, transition, callback) => {
    Promise.all(
      nextState.branch
        .map(route => getFetchData(route.component))
        .filter(x => !!x)
        .map(fetchData => fetchData(store, nextState.params))
        .reduce((ret, cur) => ret.concat(cur))
        .map(path => maybeLoadPath(store, path))
    ).then(() => {
      callback(); // can't just pass callback to then() because callback assumes first param is error
    }, (error) => {
      callback(error);
    });
  };
}

export default function universalRouter(location, history, store) {
  return new Promise((resolve, reject) => {
    Router.run(routes, location, [createTransitionHook(store)], (error, initialState, transition) => {
      if (error) {
        return reject(error);
      }

      if (transition && transition.redirectInfo) {
        return resolve({
          transition,
          isRedirect: true
        });
      }

      if (history) {  // only on client side
        initialState.history = history;
      }

      const component = (
        <Provider store={store} key="provider">
          {() => <Router {...initialState} children={routes}/>}
        </Provider>
      );

      return resolve({
        component,
        isRedirect: false
      });
    });
  });
}
