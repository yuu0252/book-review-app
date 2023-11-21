import React from 'react';
import { Formik } from 'formik';

type FnProps = {
  onSubmit: (email: string, password: string) => void;
};

export const AuthForm: React.FC<FnProps> = ({ onSubmit }) => {
  type ErrorType = {
    email?: string;
    password?: string;
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors: ErrorType = {};
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
        const { email, password } = values;
        onSubmit(email, password);
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
          <button aria-label="submit" type="submit" disabled={isSubmitting}>
            登録
          </button>
        </form>
      )}
    </Formik>
  );
};
