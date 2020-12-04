import React from 'react';
// import NamesContainer from "./NamesContainer"

class Filter extends React.Component {
    state = {
        users: [],
        search: null
    };

    componentDidMount() {
        this.fetchUsers();
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        console.log(keyword)
        this.setState({ search: keyword })
    }

    fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            // console.log(data)
            this.setState({ users: data });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        // eslint-disable-next-line array-callback-return
        const items = this.state.users.filter((data) => {
            // console.log(data)
            if (this.state.search == null) {
                return (
                    data
                )
            } else if (data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.username.toLowerCase().includes(this.state.search.toLowerCase()) || data.email.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data
            }

        }).map(data => {
            return (
                <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                </tr>
            )
        })


        return (
            <div>
                <h1>Search</h1>
                <input
                    placeholder="search employees"
                    type="text"
                    onChange={(e) => this.searchSpace(e)} />
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
                        {items}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Filter;

