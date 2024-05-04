import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './global.css'; 
import { getConnection } from '../actions';
import { ConnectionDetail } from '../interfaces';



const ConnectionDetails: React.FC = () => {
  const { id } = useParams();
  const [connection, setConnection] = useState<ConnectionDetail | null>(null);

  useEffect(() => {
    if(!id) return
    getConnection(id)
    .then(response => setConnection(response))
      .catch(error => console.error('Error fetching details: ', error));
  }, [id]);

  if (!connection) return <p>Loading...</p>;

  return (
    <div className="details-container">
      <div className="detail-item">
        <strong>Database Name</strong>
        <span>{connection.name}</span>
      </div>
      <div className="detail-item">
        <strong>URL</strong>
        <span>{connection.url}</span>
      </div>
      <div className="detail-item">
        <strong>Username</strong>
        <span>{connection.username}</span>
      </div>
      <div className="detail-item">
        <strong>Password</strong>
        <span>{connection.password}</span>
      </div>
      <div className="detail-item">
        <strong>Type</strong>
        <span>{connection.type}</span>
      </div>
    </div>
  );
};

export default ConnectionDetails;
