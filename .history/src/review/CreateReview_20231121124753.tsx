export const CreateReview = () => {
  const onSubmit = () => {};

  return (
    <form onSubmit={onSubmit}>
      <label>タイトル</label>
      <input required type="text" />
      <label>URL</label>
      <input required type="text" />
      <label>詳細</label>
      <input required type="text" />
      <label>レビュー</label>
      <textarea required />
      <button type="submit">登録</button>
    </form>
  );
};
