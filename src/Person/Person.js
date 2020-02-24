import React from 'react'
import classes from './Person.module.css'


const person = (props) => {
    return (
        <div className={classes.Person}>

            <p onClick={props.changeList}>My name is {props.name} and I'm {props.age}</p>
            <input type='text' onChange={props.changed} />
        </div>
    )
}



export default person