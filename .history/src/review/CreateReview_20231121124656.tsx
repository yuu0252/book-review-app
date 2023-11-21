export const CreateReview = () => {
  const onSubmit = () => {};

  return (
    <form onSubmit={onSubmit}>
      <label>タイトル</label>
      <input required type="text" />
      <label>タイトル</label>
      <input required type="text" />
      <label>タイトル</label>
      <input required type="text" />
      <label>タイトル</label>
      <textarea required />
    </form>
  );
};
