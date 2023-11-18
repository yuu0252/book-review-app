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
      <p>{page}</p>
      {isExistNext && (
        <button onClick={() => dispatch(nextPage())}>
          <LuArrowRightSquare />
        </button>
      )}
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  margin: 0 auto;

  & p {
    text-align: center;
  }

  & button {
    border: none;
    background-color: inherit;
  }
`;
