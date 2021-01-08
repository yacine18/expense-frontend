import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'


const SearchUser = () => {
    return (
        <div>
            <Form inline>
                <FormControl type="search" id="query" placeholder="User Email" className="mr-sm-2" />
                <Button variant="outline-dark" type="submit">Search</Button>
            </Form>
        </div>

    )
}

export default SearchUser
