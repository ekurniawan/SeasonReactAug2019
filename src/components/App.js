import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {lat:null};
        window.navigator.geolocation.getCurrentPosition(
            pos=>{
                this.setState({lat:pos.coords.latitude});
            },
            err =>{
                console.log(err);
            }
        );
    }

    render(){
        return (<div>Latitude: {this.state.lat}</div>);
    }
}

export default App;