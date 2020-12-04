import React from 'react';

class Sort extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.alphabetical();
    }
    // sort alphabetically https://stackoverflow.com/questions/47998188/how-to-sort-an-object-alphabetically-within-an-array-in-react-js/47998260
    alphabetical = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data)
            data.sort(function (a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            })
            this.setState({ users: data });
        } catch (error) {
            console.log(error);
        }
    };

    reverseAlphabetical = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            data.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                return 0;
            })
            this.setState({ users: data });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <>
                <h1>Alphabetize Employees</h1>
                <button onClick={this.alphabetical}>A - Z</button>
                <button onClick={this.reverseAlphabetical}>Z - A</button>
               
                <table id="employees" className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => (
                            // <li key={user.id}>{user.name}</li>

                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
};
export default Sort;