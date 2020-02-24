import React, {
  Component
} from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    personsListA: [
      { id: 'akjh', name: 'Asma', age: '26' },
      { id: 'jgj', name: 'Nesrine', age: '22' },
      { id: 'jkfjg', name: 'Leila', age: '52' },
      { id: 'jhgg', name: 'Salah', age: '60' },
      { id: 'jhfjg', name: 'Houda', age: '23' }
    ],
    personsListB: [],
    showPersons: true,
    style: {
      color: 'blue'
    }
  }

  switchNameHandler = () => {
    console.log('buttom clicked')
    this.setState({
      persons: [
        { name: 'Ons', age: '26' }, { name: 'safa', age: '22' }
      ]
    })
  }
  changeList = (id) => {




    const newPersons = [...this.state.personsListA]
    const newPersonsB = [...this.state.personsListB]

    const index = newPersons.findIndex(item => {
      return item.id === id
    })
    const newP = newPersons[index]

    newPersons.splice(index, 1)
    this.setState({
      personsListA: newPersons
    })
    newPersonsB.push(newP)
    this.setState({
      personsListB: newPersonsB

    })



  }




  switchColor = () => {
    console.log('buttom clicked')
    this.setState({
      style: {
        color: 'red'
      }
    })



  }

  deleteNamehandler = (id) => {
    const newPersons = [...this.state.persons]
    const index = newPersons.findIndex(item => {
      return item.id === id
    })
    newPersons.splice(index, 1)
    this.setState({
      persons: newPersons
    })
  }

  changeNameHandler = (event, id) => {
    console.log('change name handler')
    const newPersons = [...this.state.persons]

    const index = newPersons.findIndex(item => {
      return item.id === id
    })

    newPersons[index].name = event.target.value
    this.setState({
      persons: newPersons
    })

    // don't use this
    // this.setState({
    //   persons: [
    //     {name: 'Ons', age :'26'}, {name:'safa', age:'22'}
    //   ]
    // })
  }
  toggelPersonsHandler = () => {
    console.log("yjfrk");

    this.setState({ showPersons: !this.state.showPersons }
    )
  }


  buildList = (persons) => {
    return (
      <div style={this.state.style}>
        {persons.map(item => {
          return <Person
            name={item.name}
            age={item.age}
            changed={(event) => { this.changeNameHandler(event, item.id) }}
            changeList={() => { this.changeList(item.id) }}
            key={item.id} />
        })}
      </div>
    )
  }


  render() {
    let personsListA = null
    let personsListB = null
    if (this.state.showPersons)
      personsListA = this.buildList(this.state.personsListA)
    personsListB = this.buildList(this.state.personsListB)





    return (
      // React.createElement('div', {
      // className: 'App'
      // }, React.createElement('h1', null, 'Hello world'), React.createElement('Person', null, null))
      <div className='App'>
        <h1 >Hello react</h1>
        <button onClick={this.toggelPersonsHandler}>Toggel Persons</button>
        <button onClick={this.switchColor}>change color</button>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <h2>List A</h2>
            {personsListA}
          </div>
          <div style={{ width: '50%' }}>
            <h2>List B</h2>
            {personsListB}
          </div>
        </div>
      </div>
    )
  }
}





export default App