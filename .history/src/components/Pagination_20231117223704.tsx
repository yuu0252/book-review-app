import { useSelector, useDispatch } from 'react-redux';
import { selectPage } from '../pageSlice';
import { prevPage, nextPage } from '../pageSlice';
import styled from 'styled-components';
import { LuArrowLeftSquare } from 'react-icons/lu';

export const Pagination = ({ isExistNext }: { isExistNext: boolean }) => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  return (
    <StyledPagination>
      {page !== 0 && <button onClick={() => dispatch(prevPage())}>前へ</button>}
      {page}
      {isExistNext && (
        <button onClick={() => dispatch(nextPage())}>
          <LuArrowLeftSquare />
        </button>
      )}
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  width: 200px;
  position: relative;
  margin: 0 auto;

  & button {
    border: none;
    background-color: inherit;
  }
`;
