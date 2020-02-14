import React, {
  Component
} from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state ={
    persons: [
      {name: 'Asma', age :'26'}, {name:'Nesrine', age:'22'}
    ]
  }
   switchNameHandler = () => {
    console.log('buttom clicked')
    this.setState({
      persons: [
        {name: 'Ons', age :'26'}, {name:'safa', age:'22'}
      ]
    })
// don't use this
    // this.setState({
    //   persons: [
    //     {name: 'Ons', age :'26'}, {name:'safa', age:'22'}
    //   ]
    // })
  }
  render() {
    return (
      // React.createElement('div', {
        // className: 'App'
      // }, React.createElement('h1', null, 'Hello world'), React.createElement('Person', null, null))
        <div className='App'>
       <h1 >Hello react</h1>
       <button onClick={this.switchNameHandler}>switch buttom</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
       
        </div> 
    )
  }
}





export default App