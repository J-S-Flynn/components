import React from 'react';
import ReactDom from 'react-dom'; 
import faker from 'faker'; 

const App = () => {
    return (
        <div className="ui container comment">
            <div className="comment">
                <a href="" classNme="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a className="author" href="">
                        Sma
                    </a>
                    <div classNme="metadata">
                        <span classNme="date"> Today at 6:00pm </span>
                    </div>
                    <div classNme="text"> Nice Blog Post  </div>
                </div>
            </div>
        </div>
    );
};

 
ReactDom.render(<App />, document.querySelector('#root'));