import axios from 'axios';
import { Formik } from 'formik';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

export const EditUser = () => {
  const [cookies] = useCookies(['token']);
  axios
    .get(`${process.env.REACT_APP_API_URL}/users`, {
      headers: {
        Authorization: cookies.token,
      },
    })
    .then((res) => console.log(res.data));
  return (
    <StyledForm>
      <h1>ユーザー情報編集</h1>
      <Formik initialValues={{name: ""}} validate={value => {        const errors: ErrorType = {};
        if (!values.name) {
          errors.name = 'ユーザーネームを入力してください。';
        } else if (!/^[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠A-Z0-9]{4,}$/i.test(values.name)) {
          errors.name =
            'ユーザーネームは4文字以上必要です。記号は使用できません。';
        }}}
    </StyledForm>
  );
};

const StyledForm = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
  margin: 60px auto;

  h1 {
    margin-bottom: 30px;
  }

  form {
    label {
      display: inline-block;
    }
    label:not(:first-of-type) {
      margin-top: 15px;
    }
    input {
      width: 100%;
      padding: 5px 15px;
      margin: 5px 0;
    }

    p {
      color: red;
    }

    button {
      display: block;
      width: 70%;
      color: white;
      font-weight: bold;
      letter-spacing: 1em;
      text-indent: 1em;
      padding: 10px 0;
      background-color: slateblue;
      border: 1px solid light-gray;
      margin: 60px auto;
    }
  }

  a {
    margin-top: 30px;
  }
`;

const StyledError = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  color: white;
  text-align: center;
  padding: 15px 0;
  background-color: red;
`;