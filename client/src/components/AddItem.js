import React from 'react';
import axios from 'axios';
import uuid from 'react-uuid';

class AddItem extends React.Component {

    state={
        items: []
    }

    OnItemAdd = () => {
        const name = prompt('Enter a Item');

        axios.post('/api/items', { name })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        // window.location.reload();
    }

    render() {
        return (
            <div>
                <button type="button" class="btn btn-secondary" style={{ marginTop: '1rem'}} onClick={this.OnItemAdd}>
                    Add Item
                </button>
            </div>
        )
    }
}

export default AddItem;