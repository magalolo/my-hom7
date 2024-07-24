import React, { Component } from 'react';
import "./App.css"

class Home extends Component {
    state = {
        num: 0,
    }

    componentDidMount(){
        console.log('mount');
    }

    componentDidUpdate(){
        console.log('upDate');
    }

    componentWillUnmount(){
        console.log('wll unmaunt');
    }

    render() {
        const {num} = this.state;
        const {setShow} = this.props;
        return (
            <div>
                <button onClick={()=>{
                    setShow(false)
                }}>hide</button>
                <h1>{num}</h1>
                <button onClick={()=>{
                   if(num < 15) this.setState({num: num + 1})
                }}>+1</button>
                <button onClick={()=>{
                   if(num > 0) this.setState({num: num - 1})
                }}>-1</button>
                <button onClick={()=>{
                   this.setState({num: 0})
                }}>reset</button>
                <button onClick={()=>{
                   this.setState({num: Math.min(num + 5, 15)})
                }}>+5</button>
                <button onClick={()=>{
                   this.setState({num: Math.max(num - 5, 0)})
                }}>-5</button>
            </div>
        );
    }
}

export default Home;