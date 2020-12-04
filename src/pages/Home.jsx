import React from 'react';

class Home extends React.Component {
    state = {
      users: []
    };
  
    componentDidMount() {
      this.fetchUsers();
    }
  
    fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data)
        this.setState({ users: data });
      } catch (error) {
        console.log(error);
      }
    };
  
    render() {
      return (
        <>
          <h1>All Employees</h1>
  

          <table id="employees"className="table">
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

export default Home;