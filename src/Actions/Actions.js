import { v4 } from 'node-uuid'

export const addExpense = (name, sum, date) => ({
    type: 'ADD_EXPENSE',
    name,
    sum,
    date,
    id: v4()
})


export const editExpense = (name, sum, date, id) => ({
    type: 'EDIT_EXPENSE',
    name,
    sum,
    date,
    id
})

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const setSorting = (sorting) => ({
    type: 'SET_SORTING',
    sorting
})

export const SortingOptions = {
    DATE: 'DATE',
    SUM: 'SUM'
}

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
})
