// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import ShowGreeting from './components/Greeting';
import { StrictMode } from "react";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShowGreeting />} />
            </Routes>
        </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));