import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div className='question-ans'>
                <h2>Q: How React Work</h2>
                <hr />
                <p><strong>A:</strong> React is Facebook toolkit for creating Web and Mobile apps.Allowing writing all the logic that has to run in browsers and apps to be written in a language Javascript that is optimized for logic. introduced a Virtual DOM component that avoids problems with previous toolkit that caused apps to run slow because the toolkit would redraw the screen too often. This allows complex apps to run much faster than they did before React.</p>
            </div>
            <div className='question-ans'>
                <h2>Q: Props VS State In React</h2>
                <hr />
                <p><strong>A:</strong> The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event.Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components.</p>
            </div>
            <div className='question-ans'>
                <h2>Q: How usestate Works</h2>
                <hr />
                <p><strong>A:</strong> The useState() is a Hook that allows you to have state variables in functional components.The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.</p>
            </div>
        </div>
    );
};

export default Question;