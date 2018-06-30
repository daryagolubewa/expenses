import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col, Panel} from 'react-bootstrap'

const Sum = ({totalSum}) => (
    <Panel bsStyle='success'>
        <Panel.Heading>Общая сумма</Panel.Heading>
        <Panel.Body> {totalSum} рублей </Panel.Body>
    </Panel>
)

Sum.propTypes = {
    Sum: PropTypes.number.isRequired
}

export default Sum


