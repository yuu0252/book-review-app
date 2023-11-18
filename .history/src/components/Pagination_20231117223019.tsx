import { useSelector, useDispatch } from 'react-redux';
import { selectPage } from '../pageSlice';
import { prevPage, nextPage } from '../pageSlice';
import styled from 'styled-components';

export const Pagination = ({ isExistNext }: { isExistNext: boolean }) => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  return (
    <StyledPagination>
      {page !== 0 && <button onClick={() => dispatch(prevPage())}>前へ</button>}
      {page}
      {isExistNext && (
        <button onClick={() => dispatch(nextPage())}>次へ</button>
      )}
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  width: 200px;
  position: relative;
`;
