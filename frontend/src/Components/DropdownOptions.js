import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class DropdownOptions extends Component{


render(){
    return (
        <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Select CRUD Operation
            </Dropdown.Toggle>
        
        <Dropdown.Menu>
            <Dropdown.Item href="/AddMenu">Add</Dropdown.Item>
            <Dropdown.Item href="/UpdateMenu">Update One</Dropdown.Item>
            <Dropdown.Item href="/UpdateManyMenu">Update Many - Owner</Dropdown.Item>
            <Dropdown.Item href="/DeleteMenu">Delete</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    )
}
};

export default DropdownOptions;