import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {connect} from 'react-redux'
import { changeState } from '../store/action/action'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
           userName : '' 
        }

    }

    _changeData(){
        console.log('event called');
    }

    _changeState(){
        console.log('changed state');
        this.props.changeStateToReducer(this.state.userName);
        this.setState({
            userName : ''
        })
    }

    _changeUserInput(e){
        console.log(e.target.value)
        this.setState({
            userName : e.target.value
        })
    }

    
    render() {
        return (
            <div>
                <h1>Hello World {this.props.userName}</h1><br></br><br></br>
                <input type="text" value = {this.state.userName} onChange = {this._changeUserInput.bind(this)}/>
                <button onClick={this._changeState.bind(this)}>Change State</button><br></br><br></br>
                <Link to='/about'>Go to About</Link>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        userName : state.rootReducer.userName
    }
}

const  mapDispatchToProps = (dispatch) => {
    console.log("in mapDispatchToPorops")
    return ({ 
      changeStateToReducer : (updatedUserName) => {
          dispatch(changeState(updatedUserName))
      }
    })
    
  };


export default connect(mapStateToProps , mapDispatchToProps)(Home);

