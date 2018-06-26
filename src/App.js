import React, { Component } from 'react';
import AddNewExpense from './Containers/AddNewExpense'
import AddDateFilter from './Containers/AddDateFilter'
import SortingFilterContainer from './Containers/SortingFilterContainter'
import SortingButtons from './Containers/SortingButtons'
import './App.css';
import { Grid } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
        <Grid>
            <AddNewExpense/>
            <AddDateFilter/>
            <SortingButtons/>
            <SortingFilterContainer/>
        </Grid>

    );
  }
}

export default App;
