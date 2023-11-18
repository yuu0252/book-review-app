import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_BASEURL } from './constants';
import { Link } from 'react-router-dom';
import './home.scss';
import { useCookies } from 'react-cookie';

export const Home: React.FC = () => {
  type obj = {
    id: 'string';
    title: 'string';
    url: 'string';
    detail: 'string';
    review: 'string';
    reviewer: 'string';
    isMine: true;
  };

  const [reviewList, setReviewList] = useState<Array<obj>>();
  const [isExistNext, setIsExistNext] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  useEffect(() => {
    axios
      .get(`${API_BASEURL}/books?offset=${offset}`, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => setReviewList(res.data));

    axios
      .get(`${API_BASEURL}/books?offset=${offset + 10}`, {
        headers: { authorization: cookies.token },
      })
      .then((res) => {
        res.data.length !== 0 ? setIsExistNext(true) : setIsExistNext(false);
      });
  }, [offset]);

  const onClickPrev = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
    setOffset(offset - 10);
  };

  const onClickNext = () => {
    setCurrentPage(currentPage + 1);
    setOffset(offset + 10);
  };

  return (
    <section>
      <ul className="review__container"></ul>
      {currentPage !== 0 && <button onClick={onClickPrev}>前へ</button>}
      {isExistNext && <button onClick={onClickNext}>次へ</button>}
    </section>
  );
};
