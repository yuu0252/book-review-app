import axios from 'axios';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

export const DetailReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state;
  const [cookies] = useCookies();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books/${id}`, {
        headers: {
          Authorization: cookies.token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        alert('レビュー詳細の取得に失敗しました。');
        navigate('/');
      });
  });
  return <div></div>;
};
