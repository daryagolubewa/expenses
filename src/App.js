import React, { Component } from 'react';
import AddNewExpense from './Containers/AddNewExpense'
import AddDateFilter from './Containers/AddDateFilter'
import SortingFilterContainer from './Containers/SortingFilterContainter'
import SortingButtons from './Containers/SortingButtons'
import GetSum from './Containers/GetSum'
import EditExpense from './Containers/EditExpense'
import ExpenseButton from './Components/ExpenseButton'
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap'
import {Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Grid>
            <Row xs={12} md={9}>
                <Route path='/add' component={AddNewExpense}/>
                <Route path='/' exact={true} component={SortingButtons}/>
                <Route path='/' exact={true} component={AddDateFilter}/>
                <Route path='/' exact={true} component={ExpenseButton}/>
            </Row>
            <Row>
                <Route path='/' exact={true} component={SortingFilterContainer}/>
                <Route path='/' exact={true} component={GetSum}/>
                <Route path='/edit/:id' render={(props) => <EditExpense{...props} />}/>
            </Row>
        </Grid>

    );
  }
}

export default App;

