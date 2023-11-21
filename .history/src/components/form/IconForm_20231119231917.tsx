import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Compressor from 'compressorjs';
import styled from 'styled-components';

type Props = {
  setIconFile: Dispatch<SetStateAction<FormData | undefined>>;
  url?: string;
};

export const IconForm = ({ setIconFile, url }: Props) => {
  const [iconUrl, setIconUrl] = useState<string>(url ? url : '');

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files !== null ? e.target.files[0] : null;
    if (!file) return;

    new Compressor(file, {
      width: 50,
      height: 50,
      resize: 'cover',
      convertSize: 1000000,
      convertTypes: 'image/png',
      mimeType: 'image/png',
      success(result: File) {
        const url = URL.createObjectURL(result);
        setIconUrl(url);

        const formData = new FormData();
        formData.append('icon', result, result.name);
        setIconFile(formData);
      },
      error() {
        alert('画像ファイルの処理に失敗しました。');
        return;
      },
    });
  };
  return (
    <>
      {console.log(iconUrl)}
      <StyledIconForm>
        <label htmlFor="file">アイコンを設定</label>

        {iconUrl && <img id="icon" src={iconUrl} alt="ユーザーアイコン" />}
        <input
          name="file"
          type="file"
          accept="image/png"
          onChange={onChangeImg}
        />
      </StyledIconForm>
    </>
  );
};

const StyledIconForm = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: solid 1px gray;

  img {
    width: 50px;
    height: 50px;
    margin: 15px 0;
  }

  input[type='file'] {
    width: auto;
    padding: 0;
  }
`;
