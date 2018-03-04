import { bind } from "decko";
import _ from "lodash";
import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";

const Container = styled(Grid)`
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: 100vh;
`;

const Input = styled(Col)`
  font-size: 1.5rem;
`;

const Output = styled(Col)`
  font-size: 1.5rem;
  letter-spacing: -0.1em;
`;

interface IState {
  inputText: string;
  outputText: string;
}

class VietBrailleApp extends React.Component<any, IState> {

  private input: HTMLDivElement | null = null;
  private worker: Worker;

  constructor(props: any) {
    super(props);

    this.worker = new Worker("/liblouis/liblouis-viet-worker.js");
    this.worker.onmessage = this.onChangeSuccess;

    this.state = {
      inputText: "",
      outputText: "",
    };

    this.postToWorker = _.throttle(this.postToWorker, 500);
  }

  public componentDidMount() {
    this.onChangeRequest();
  }

  public componentWillUnmount() {
    this.worker.terminate();
  }

  public render() {
    const { outputText } = this.state;
    return (
      <Container fluid>
        <Row>
          <Input xs={5}>
            <div
              onInput={this.onChangeRequest}
              onPaste={this.onPaste}
              ref={this.inputRef}
              style={{outline: "none"}}
            >
Trăm năm trong cõi người ta,<br/>
Chữ tài chữ mệnh khéo là ghét nhau.<br/>
Trải qua một cuộc bể dâu,<br/>
Những điều trông thấy mà đau đớn lòng.<br/>
Lạ gì bỉ sắc tư phong,<br/>
Trời xanh quen thói má hồng đánh ghen.<br/>
<br/>
Cảo thơm lần giở trước đèn,<br/>
Phong tình cổ lục còn truyền sử xanh.<br/>
Rằng: Năm Gia-tĩnh triều Minh,<br/>
Bốn phương phẳng lặng hai kinh chữ vàng.<br/>
Có nhà viên ngoại họ Vương,<br/>
Gia tư nghỉ cũng thường thường bậc trung.
            </div>
          </Input>
          <Output xs={7}>
            <div dangerouslySetInnerHTML={{ __html: outputText }} />
          </Output>
        </Row>
      </Container>
    );
  }

  @bind
  private inputRef(input: HTMLDivElement) {
    if (input) {
      /**
       * Putting contentEditable in the JSX will cause warnings
       * in the console, so to suppress it, we set its value here.
       */
      input.contentEditable = "true";
    }
    this.input = input;
  }

  @bind
  private onChangeRequest() {
    if (this.input) {
      const inputText = this.input.innerText;
      if (this.state.inputText !== inputText) {
        this.setState({ inputText });
        this.postToWorker(inputText);
      }
    }
  }

  /**
   * We convert the response from the worker into HTML, which
   * is pure text, convert text line breaks into <br> tags,
   * and then use dangerouslySetInnerHTML to populate
   * the output column element.
   */
  @bind
  private onChangeSuccess(event: MessageEvent) {
    /**
     * U+200B is zero-width space character, which is needed to allow braille
     * sentences to wrap inside containers
     */
    const outputText: string = (event.data || "")
      .replace(/ /g, "\u2800\u200B")
      .replace(/\r?\n/g, "<br>");
    this.setState({ outputText });
  }

  /**
   * We sanitize the paste data by stripping away all formatting.
   * In order to also convert line breaks into <br> tags,
   * we use input.innerText to achieve this.
   */
  @bind
  private onPaste(event: React.ClipboardEvent<HTMLDivElement>) {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain");
    if (this.input) {
      this.input.innerText = text;
    }
  }

  @bind
  private postToWorker(inputText: string) {
    this.worker.postMessage(inputText);
  }
}

export default VietBrailleApp;
