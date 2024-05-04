import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './global.css'; 
import AddConnectionModal from './AddConnectionModal';
import { addConnection, getAllConnections } from '../actions';
import { Connection } from '../interfaces';



const ConnectionsList: React.FC = () => {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  useEffect(() => {
    getAllConnections().then((res) => {
        setConnections(res)
    })
    .catch(error => console.error('Error fetch connections failed: ', error));
  }, []);

  const handleSaveConnection = (connection: { name: string; url: string; username: string; password: string; type: string; }) => {

    const newConnection = {
        ...connection,
        id: connections.length + 1 + '' 
    }
    addConnection(newConnection).then((response) => {
        setConnections([...connections, response]);
      setShowModal(false);
    })

    .catch(error => console.error('Error adding connection: ', error));
    setShowModal(false);
  };

  return (
    <div className="table-container">
        <button onClick={() => setShowModal(true)}>+ Add Connection</button>
      <AddConnectionModal show={showModal} onClose={() => setShowModal(false)} onSave={handleSaveConnection} />
      <table>
        <thead>
          <tr>
            <th>Database Name</th>
            <th>Username</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {connections.map(connection => (
            <tr key={connection.id} onClick={() => navigate(`/details/${connection.id}`)}>
              <td>{connection.name}</td>
              <td>{connection.username}</td>
              <td>{connection.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConnectionsList;
