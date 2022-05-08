import React from 'react';

const SingleComment = () => {

    return (
        <div className="comment">              
                <a href="" className="avatar">
                    <img src="" alt="avatar" />
                </a>
                      
                <div className="content">
                    <a className="author" href="">
                        Tobi
                    </a>
                    <div className="metadata">
                        <span className="date"> Today at 6:00pm </span>
                    </div>
                    <div className="text"> 
                      Nice Blog Post! 
                    </div>
                </div>
            </div>
    );
};

export default SingleComment; 