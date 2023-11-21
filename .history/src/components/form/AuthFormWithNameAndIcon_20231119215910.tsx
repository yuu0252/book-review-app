import { Dispatch, SetStateAction } from 'react';
import { Formik } from 'formik';
import { IconForm } from './IconForm';

type FnProps = {
  onSubmit: (name: string, email: string, password: string) => void;
  setIconFile: Dispatch<SetStateAction<FormData | undefined>>;
};

export const AuthFormWithName = ({ onSubmit, setIconFile }: FnProps) => {
  type ErrorType = {
    name?: string;
    email?: string;
    password?: string;
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validate={(values) => {
        const errors: ErrorType = {};
        if (!values.name) {
          errors.name = 'ユーザーネームを入力してください。';
        } else if (!/^[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠A-Z0-9]{4,}$/i.test(values.name)) {
          errors.name =
            'ユーザーネームは4文字以上必要です。記号は使用できません。';
        }
        if (!values.email) {
          errors.email = 'メールアドレスを入力してください。';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = '無効なメールアドレスです。';
        }
        if (!values.email) {
          errors.password = 'パスワードを入力してください。';
        } else if (!/^[A-Z0-9._%+-]{8,}$/i.test(values.password)) {
          errors.password =
            'パスワードは8文字以上必要です。(. _ % + -)の記号が入力可能です。';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const { name, email, password } = values;
        onSubmit(name, email, password);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="userForm">
          <label htmlFor="name">▶︎ ユーザーネーム</label>
          <input
            aria-label="name"
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <p>{errors.name && touched.name && errors.name}</p>
          <label htmlFor="email">▶︎ メールアドレス</label>
          <input
            aria-label="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <p>{errors.email && touched.email && errors.email}</p>
          <label htmlFor="password">▶︎ パスワード</label>
          <input
            aria-label="password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <p>{errors.password && touched.password && errors.password}</p>
          <IconForm setIconFile={setIconFile} />
          <button aria-label="submit" type="submit" disabled={isSubmitting}>
            登録
          </button>
        </form>
      )}
    </Formik>
  );
};
