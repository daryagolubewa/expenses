import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import ChangingButtons from '../Components/ChangigButtons'

const Expense = ({name, sum, date, id, editButton, removeButton}) => {
    let dateObject = new Date(date);
    return (

            <Panel>
                <ListGroup>
                <ListGroupItem> {name} </ListGroupItem>
                <ListGroupItem> {sum} рублей </ListGroupItem>
                <ListGroupItem> {dateObject.getDate()}/{(dateObject.getMonth() +1)}/{dateObject.getFullYear()} </ListGroupItem>
                </ListGroup>
                <ChangingButtons expenseId={id} editButton={editButton} removeButton={removeButton}/>
            </Panel>

    )
}

Expense.propTypes = {
    name: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired
}

export default Expense

