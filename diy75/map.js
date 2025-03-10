import React from 'react';

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            filteredUsers: [],       // Corrected property name
            originalUsers: [],
            inputId: undefined
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(output => this.setState({ originalUsers: output, filteredUsers: output }))
            .catch(err => console.log(err));
    }

    handleChange = (event) => {
        this.setState({ inputId: event.target.value });
    }

    handleSubmit = () => {
        const { originalUsers, inputId } = this.state;
        let arr;

        if (inputId) { // Ensure inputId is not empty
            arr = originalUsers.filter((item) => item.id === Number(inputId));  // Convert inputId to a number
        } else {
            arr = originalUsers;
        }
        this.setState({ filteredUsers: arr });
    }

    render() {
        const { filteredUsers } = this.state;
        return (
            <div className='container'>
                <table border={1}>
                    <thead>
                        <tr className='top'>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((value) => (
                            <tr key={value.id} className='data'>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='inputbtn'>
                    <input type="text" onChange={this.handleChange} placeholder='Enter the user id' />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Map;
