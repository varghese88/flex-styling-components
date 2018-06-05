import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Text} from './text';
import Flex from './flex';
import './style';
import './index.css';
const virtualDOm =() => (
    <Flex className="App">
        <Text>10</Text>
        <Flex>12</Flex>
        <Flex>13</Flex>
    </Flex>
)

ReactDOM.render(virtualDOm(), document.getElementById('root'));
registerServiceWorker();
