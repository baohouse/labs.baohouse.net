import { Col, Row } from 'antd';
import { throttle } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import styled from 'styled-components';

const Container = styled(Row)`
  padding: 20px;
  min-height: 100vh;
`;

const Input = styled(Col)`
  font-size: 1.5rem;
`;

const Output = styled(Col)`
  font-family: 'Noto Sans Symbols 2';
  font-size: 1.5rem;
  letter-spacing: -0.1em;
`;

const VietBrailleApp = () => {
  const inputRef = useRef<HTMLDivElement>(null);
  const workerRef = useRef(
    (() => {
      const worker = new Worker('/liblouis/liblouis-viet-worker.js');
      /**
       * We convert the response from the worker into HTML, which
       * is pure text, convert text line breaks into <br> tags,
       * and then use dangerouslySetInnerHTML to populate
       * the output column element.
       */
      worker.onmessage = (event: MessageEvent) => {
        /**
         * U+200B is zero-width space character, which is needed to allow braille
         * sentences to wrap inside containers
         */
        setOutputText(
          (event.data || '')
            .replace(/ /g, '\u2800\u200B')
            .replace(/\r?\n/g, '<br>')
        );
      };
      return worker;
    })()
  );

  const [inputText, setInputText] = useState<string>();
  const [outputText, setOutputText] = useState<string>('');

  const postToWorker = useCallback(
    throttle((text?: string) => workerRef.current.postMessage(text), 500),
    []
  );
  const onChangeRequest = useCallback(() => {
    if (inputText !== inputRef.current?.innerText) {
      setInputText(inputRef.current?.innerText);
      postToWorker(inputRef.current?.innerText);
    }
  }, []);
  /**
   * When pasting into a DIV with contentEditable, we want to remove all formatting from the clipboard data
   */
  const onPaste = useCallback((event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const text = event.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  }, []);

  useEffect(() => {
    workerRef.current.postMessage(inputRef.current?.innerText);
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  return (
    <>
      <GoogleFontLoader
        fonts={[{ font: 'Noto Sans Symbols 2', weights: [400] }]}
      />
      <Container>
        <Input span={10}>
          <div
            contentEditable
            suppressContentEditableWarning
            onInput={onChangeRequest}
            onPaste={onPaste}
            lang="vi"
            ref={inputRef}
            style={{ outline: 'none' }}
          >
Trăm năm trong cõi người ta,<br />
Chữ tài chữ mệnh khéo là ghét nhau.<br />
Trải qua một cuộc bể dâu,<br />
Những điều trông thấy mà đau đớn lòng.<br />
Lạ gì bỉ sắc tư phong,<br />
Trời xanh quen thói má hồng đánh ghen.<br />
<br />
Cảo thơm lần giở trước đèn,<br />
Phong tình cổ lục còn truyền sử xanh.<br />
Rằng: Năm Gia-tĩnh triều Minh,<br />
Bốn phương phẳng lặng hai kinh chữ vàng.<br />
Có nhà viên ngoại họ Vương,<br />
Gia tư nghỉ cũng thường thường bậc trung.
          </div>
        </Input>
        <Output lang="vi-Brai" span={14}>
          <div dangerouslySetInnerHTML={{ __html: outputText }} />
        </Output>
      </Container>
    </>
  );
};

export default VietBrailleApp;
