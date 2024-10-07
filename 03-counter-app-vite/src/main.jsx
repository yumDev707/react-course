import React from 'react';
import ReactDom from 'react-dom/client';

import {HelloWorldApp} from './HelloWorldApp';
import {FirstApp} from './FirstApp';
import {CounterApp} from './CounterApp';
import './styles.css';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* De esta forma enviamos prop (properties). El valor subtitle envía núms enteros. */}
        {/* <FirstApp title="It is Yum!" subtitle={123}/> */}
        {/* <FirstApp /> */}
        <CounterApp value={100}/>
    </React.StrictMode>
);