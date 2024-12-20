import React from 'react';
import Counter from '../pages/Counter'
import Feedback from '../pages/Feedback';
import TodoApp from '../pages/Todo';
import News from '../pages/News';

class Home extends React.Component{
    render(){
        return (
            <>
                <h1>Home Page</h1>
                {/* <Counter/> */}
                {/* <Feedback/> */}
                {/* <TodoApp /> */}
                <News/>
            </>
        )
    }
}

export default Home;