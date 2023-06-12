## Redux Setup

```sh
npm install @reduxjs/toolkit react-redux
```

### @reduxjs/toolkit

Consists of few libraries

- redux (core library, state management)
- immer (allows to mutate state)
- redux-thunk (handles async actions)
- reselect (simplifies reducer functions)

### Extras

- redux devtools
- combine reducers

### react-redux

Connects our app to redux

### Setup Store

- Create store.js

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

### Setup Provider

- index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

That's it, you are good to go!
