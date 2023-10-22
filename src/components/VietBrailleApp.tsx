import { findKey, includes, throttle } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useContainerQuery } from 'react-container-query';
import GoogleFontLoader from 'react-google-font-loader';
import styled, { css } from 'styled-components';

import Breakpoints, { BreakpointsMap } from 'constants/Breakpoints';

interface IProps {
  isMobile?: boolean;
}

const Container = styled('div')`
  position: relative;
  padding: 20px;
  min-height: 100vh;
`;

const Input = styled('div')`
  font-size: 1.6rem;
  line-height: 2.2rem;
  outline: none;
  font-weight: 300;
  padding: 20px;
  border-top: 1px solid rgba(0,0,0,0);
  border-right: 1px solid rgba(0,0,0,0);
  border-bottom: 1px solid #aaa;
  border-left: 1px solid rgba(0,0,0,0);

  :hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  :focus {
    background-color: white;
    border-top-color: #aaa;
    border-right-color: #aaa;
    border-left-color: #aaa;
  }

  ${({ isMobile }: IProps) => isMobile && css`
    font-size: 1.3rem;
    line-height: 1.8rem;
  `}
`;

const Output = styled('div')`
  font-family: 'Noto Sans Symbols 2';
  font-size: 1.2rem;
  padding: 20px;

  ${({ isMobile }: IProps) => isMobile && css`
    font-size: 1rem;
  `}
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
  const [params, containerRef] = useContainerQuery(BreakpointsMap, {});
  const isMobile = includes([Breakpoints.X_SMALL, Breakpoints.SMALL], findKey(params));

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
      <Container ref={containerRef}>
        <Input
          contentEditable
          isMobile={isMobile}
          suppressContentEditableWarning
          onInput={onChangeRequest}
          onPaste={onPaste}
          lang="vi"
          ref={inputRef}
        >
Trăm năm trong cõi người ta,<br />
Chữ tài chữ mệnh khéo là ghét nhau.<br />
Trải qua một cuộc bể dâu,<br />
Những điều trông thấy mà đau đớn lòng.<br />
Lạ gì bỉ sắc tư phong,<br />
Trời xanh quen thói má hồng đánh ghen.<br />
        </Input>
        <Output
          isMobile={isMobile}
          lang="vi-Brai"
          dangerouslySetInnerHTML={{ __html: outputText }}
        />
      </Container>
    </>
  );
};

export default VietBrailleApp;
