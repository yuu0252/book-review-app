import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const DetailReview = () => {
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/books/${id}`);
  });
  return <div></div>;
};
