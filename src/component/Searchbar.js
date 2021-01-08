import React, { useState } from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { searchTransaction } from '../actions/actions'

const Searchbar = ({ searchTransaction, search }) => {

    const [ query, setQuery ] = useState('')
    
    const submit = (e) => {
        e.preventDefault()
        searchTransaction(query)
        console.log(query)
    }

    return (
        <div>
            <Form inline onSubmit={submit}>
                <FormControl type="search" id="query" value={query} onChange={ e => setQuery(e.target.value) } placeholder="Transaction ID" className="mr-sm-2" />
                <Button variant="outline-dark" type="submit">Search</Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => ({
    search: state.search
})
export default connect(mapStateToProps, { searchTransaction })(Searchbar)
