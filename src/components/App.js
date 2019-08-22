import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    /*constructor(props){
        super(props);
        this.state = {lat:null,errMsg:''};
        window.navigator.geolocation.getCurrentPosition(
            pos=>{
                this.setState({lat:pos.coords.latitude});
            },
            err =>{
                this.setState({errMsg:err.message});
            }
        );
    }*/

    state = {lat:null,errMsg:''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            pos=>{
                this.setState({lat:pos.coords.latitude});
            },
            err =>{
                this.setState({errMsg:err.message});
            }
        );
    }

    render() {
      if (this.state.errMsg && !this.state.lat) {
        return <div>Error: {this.state.errMsg}</div>;
      }

      if(!this.state.errMsg && this.state.lat){
          return <SeasonDisplay lat={this.state.lat} />
      }

      return <Spinner />
    }
}

export default App;