import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl'; /* react-intl imports */
import { AppContainer } from 'react-hot-loader'
import "animate.css";
import store from './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zh_CN from "./locales/zh_CN"     // import defined messages in Chinese
import en_US from "./locales/en_US"
addLocaleData([...en, ...zh]);  // 引入多语言环境的数据 

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));
// store.dispatch(deleteFromCart('Coffee 500gm'));

unsubscribe();
// 将store作为prop传入，即可使应用中的所有组件使用store
let messages = {}
messages['en'] = en_US;
messages['zh'] = zh_CN;

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider 
    locale={store.getState().language.language}
    messages={messages[store.getState().language.language]}>
      <AppContainer>
        <App />
      </AppContainer>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
