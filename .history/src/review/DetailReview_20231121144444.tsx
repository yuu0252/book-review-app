import axios from 'axios';
import { useEffect } from 'react';

export const DetailReview = () => {
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/books/`);
  });
  return <div></div>;
};
