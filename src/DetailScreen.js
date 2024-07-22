import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../api/firebaseConfig';
import './styles/DetailScreen.css';

const DetailScreen = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const db = getFirestore(app);
        const docRef = doc(db, 'Volunteer', id);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setDetails({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          setError('Document not found');
        }
      } catch (err) {
        console.error('Error fetching details:', err);
        setError('Failed to fetch details');
      }
    };

    fetchDetails();
  }, [id]);

  if (error) return <div className="error-message">{error}</div>;
  if (!details) return <div>Loading...</div>;

  return (
    <div className="detail-page">
      <h2>{details.name}</h2>
      <p><strong>Organization:</strong> {details.organization}</p>
      <p><strong>City:</strong> {details.city}</p>
      <p><strong>Description:</strong> {details.description}</p>
      <p><strong>Categories:</strong> {details.categories.join(', ')}</p>
      {/* Add more details as necessary */}
    </div>
  );
};

export default DetailScreen;
