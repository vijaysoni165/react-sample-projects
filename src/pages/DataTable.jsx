import React, { useState, useEffect } from 'react'

function DataTable() {
   const [users, setUsers] = useState([]);

  // fetch data from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // define table columns
  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'City',
      selector: row => row.address.city,
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>
      <DataTable
        columns={columns}
        data={users}
        pagination
        highlightOnHover
        fixedHeader
      />
    </div>
  );
}

export default DataTable
    