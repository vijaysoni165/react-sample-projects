import React, { useEffect, useState } from 'react';

function UserData() {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const fetchUserData = () => {
    setLoading(true);
    const api = 'https://random-data-api.com/api/v2/users?size=5';

    fetch(api)
      .then(response => {
        if (!response.ok) {
          throw Error('Could not fetch the data from API');
        }
        return response.json();
      })
      .then(data => {
        // Set images to loading (true) for new users
        const newImageLoading = {};
        data.forEach(user => {
          newImageLoading[user.id] = true;
        });

        setImageLoading(prev => ({ ...prev, ...newImageLoading }));
        setUserdata(prevData => [...prevData, ...data]);
      })
      .catch(err => console.log(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleImageLoad = id => {
    setImageLoading(prev => ({ ...prev, [id]: false }));
  };

  const handleImageError = id => {
    setImageLoading(prev => ({ ...prev, [id]: false }));
  };

  // 🔍 Filter users based on search query
  const filteredUsers = userdata.filter(user =>
    `${user.first_name} ${user.last_name} ${user.phone_number} ${user.employment.title}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', justifyContent:'center', padding:'20px' }}>
        <h2>Random User List</h2>
        <input
          type="text"
          placeholder="Search Users..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
      </div>

      <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', justifyContent:'center' }}>
        {filteredUsers.map(user => (
          <li
            key={user.id}
            style={{
              border: '1px solid #ddd',
              marginRight: '20px',
              padding: '20px',
              marginBottom: '20px',
              width:'18%'
            }}
          >
            <p>
              {imageLoading[user.id] && <span>Loading Image...</span>}
              <img
                src={user.avatar}
                alt="User Avatar"
                width="100"
                onLoad={() => handleImageLoad(user.id)}
                onError={() => handleImageError(user.id)}
              />
            </p>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Phone: {user.phone_number}</p>
            <p>Employment: {user.employment.title}</p>
            <p>Skill: {user.employment.key_skill}</p>
          </li>
        ))}
      </ul>
      <button onClick={fetchUserData} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </>
  );
}

export default UserData;
