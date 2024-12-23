import React from 'react';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';

class Home extends React.Component{
    render(){
        return (
            <>
                <ResponsiveAppBar />
                <h1>Home Page</h1>
            </>
        )
    }
}

export default Home;