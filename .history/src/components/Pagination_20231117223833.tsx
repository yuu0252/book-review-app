import { useSelector, useDispatch } from 'react-redux';
import { selectPage } from '../pageSlice';
import { prevPage, nextPage } from '../pageSlice';
import styled from 'styled-components';
import { LuArrowLeftSquare, LuArrowRightSquare } from 'react-icons/lu';

export const Pagination = ({ isExistNext }: { isExistNext: boolean }) => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  return (
    <StyledPagination>
      {page !== 0 && (
        <button onClick={() => dispatch(prevPage())}>
          <LuArrowLeftSquare />
        </button>
      )}
      {page}
      {isExistNext && (
        <button onClick={() => dispatch(nextPage())}>
          <LuArrowRightSquare />
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
    position: absolute;
    border: none;
    background-color: inherit;
    top: 100%;
    transform: translateY(-50%);
  }
`;
