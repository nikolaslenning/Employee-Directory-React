import React from 'react';

class Sort extends React.Component {
    state = {
      users: []
    };
  
    componentDidMount() {
      this.fetchUsers();
    }
    // sort alphabetically https://stackoverflow.com/questions/47998188/how-to-sort-an-object-alphabetically-within-an-array-in-react-js/47998260
    fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        data.sort(function(a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
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
          <h1>All Employees</h1>
  
          <ul>
            {this.state.users.sort().map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      );
    }
  };
export default Sort;