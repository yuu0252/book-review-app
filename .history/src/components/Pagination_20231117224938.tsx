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
      {page !== 0 ? (
        <button onClick={() => dispatch(prevPage())}>
          <LuArrowLeftSquare />
        </button>
      ) : (
        <div></div>
      )}
      <p>
        <span>{page}</span>
      </p>
      {isExistNext ? (
        <button onClick={() => dispatch(nextPage())}>
          <LuArrowRightSquare />
        </button>
      ) : (
        <div></div>
      )}
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  width: 150px;
  display: grid;
  grid-template-columns: 50px 50px 50px;
  margin: 0 auto;

  & p {
    position: relative;
    text-align: center;

    & span {
      position: absolute;
      top: 50%;
      left: 50%
      transform: translateY(-50%);
    }
  }

  & button {
    border: none;
    background-color: inherit;

    & svg {
      width: 100%;
      height: auto;
    }
  }
`;
