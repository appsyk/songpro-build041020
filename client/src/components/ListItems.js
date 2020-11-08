import React from 'react';
import uuid from 'react-uuid';
import axios from 'axios';

class ListItems extends React.Component {

    state = {
        items: []
    }

    componentWillMount() {
        axios.get('/api/items')
            .then(res => {
                this.setState({
                    items: res.data
                })
            })
            .catch(err => console.log(111, err))
    }

    handleDelete = (itemId) => {
        console.log(itemId)
        // Whatever you want to do with that item
        axios.delete(`/api/items/${itemId}`)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(222, err))

            window.location.reload();
    }

    render() {

        // console.log(this.state.items)
        const { items } = this.state;

        console.log(items)
        return (
            <div>
                <h4>Items List</h4>
                <ul className="list-group ">
                    {items.map((item) => (
                        <li className="list-group-item list-back" id={item._id}>
                            <button className='remove-btn btn btn-danger' onClick={this.handleDelete.bind(this, item._id)}>&times;</button>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div >
        )
    }
}

export default ListItems;