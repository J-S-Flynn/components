import React from 'react';
import ReactDom from 'react-dom'; 
import SingleComment from './components/SingleComment';
import NinjaOne from './images/ninjaOne.png';
import NinjaTwo from './images/ninjaTwo.jpeg';
import NinjaThre from './images/ninjaThre.jpeg';



const App = () => {
    return (
        <div className="ui container comments">
            <SingleComment />
        </div>
    );
};

 
ReactDom.render(<App />, document.querySelector('#root'));