import '../../fonts/GentiumPlus-Regular.woff2';
import '../../fonts/GentiumPlus-Italic.woff2';

import React, { useEffect, useRef } from 'react';
import { filter, first, flatten, flow, get, join, map } from 'lodash/fp';

import type { FC } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { Helmet } from 'react-helmet';
import { Typography } from 'antd';
import _ from 'lodash';
import bdict from '../../dictionary/b.xml';
import styled from 'styled-components';
import vdict from '../../dictionary/ꞗ.xml';

const { Paragraph } = Typography;

const citationsTransformer = (lang: string) =>
  flow(
    filter((cit: any) => _.get(cit, '$.xml:lang') == lang),
    map(({ orth }: any) => orth),
    flatten,
    join(', '),
  );
const dictTransformer = flow(
  get('TEI.text[0].body[0].$$'),
  map((entry: any) => (entry['#name'] == 'entry' ? [entry] : entry.$$)),
  map(
    map((entries: any) => ({
      vi: entries?.form?.[0].orth.join(', '),
      pt: citationsTransformer('pt')(entries?.cit),
      la: citationsTransformer('la')(entries?.cit),
    })),
  ),
);
const entries = [...dictTransformer(bdict), ...dictTransformer(vdict)];
const entriesKey = flow(first, ({ vi }: any) => vi);

const Container = styled.div`
  @font-face {
    font-family: 'Gentium Plus';
    src: url(/fonts/GentiumPlus-Regular.woff2);
  }
  @font-face {
    font-family: 'Gentium Plus';
    font-style: italic;
    src: url(/fonts/GentiumPlus-Italic.woff2);
  }

  font-family: 'Gentium Plus', -apple-system-ui-serif, ui-serif, serif;
  font-size: 24px;
  font-variant-ligatures: discretionary-ligatures historical-ligatures;
  font-variant-alternates: historical-forms;
  font-feature-settings: 'hist' 1;
  background-color: #f9eed5;
  min-height: 100vh;

  padding: 5vw;
`;

const Entry = styled(Paragraph)`
  max-width: 50ch;
  text-indent: 1.2em;
  margin-bottom: 0 !important;
  line-height: 32px;

  .translation + .translation {
    margin-left: 0.5em;
  }
`;

const OldTitle = styled.h1`
  font-family: 'Cormorant Garamond', -apple-system-ui-serif, ui-serif, serif;
  font-size: 48px !important;
  text-transform: uppercase;
  word-spacing: 0.2em;
`;
const ForwardedOldTitle = React.forwardRef<
  HTMLHeadingElement,
  { children: React.ReactNode; className: string }
>((props, ref) => <OldTitle {...props} ref={ref} />);

const Portuguese = styled.span`
  font-family: 'Hoefler Text', 'Cormorant Garamond', -apple-system-ui-serif, ui-serif, serif;
  font-style: italic;
  font-size: 26px;
  -webkit-font-smoothing: antialiased;
`;

const Translation = ({ vi, pt, la }: { vi: string; pt: string; la: string }) => (
  <span className="translation">
    <span lang="vi">{vi}</span> : <Portuguese lang="pt">{pt}</Portuguese> : <span lang="pt">{la}</span>.
  </span>
);

const DictionariumApp: FC = () => {
  const title = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (title.current) {
      title.current.innerHTML = title.current.innerHTML.replace(/u/gi, 'v');
    }
  }, []);

  return (
    <>
      <GoogleFontLoader fonts={[
        { font: 'Cormorant Garamond', weights: [500, '500i', 600] },
      ]} />
      <Helmet>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BẢOLABS – Dictionarium Annamiticum Lusitanum et Latinum"
        />
        <meta property="og:url" content="http://labs.baohouse.net/dict" />
        {/* <meta property="og:image" content="http://labs.baohouse.net/images/dog-app.thumb.png" /> */}
        <title>BẢOLABS – Dictionarium Annamiticum Lusitanum et Latinum</title>
      </Helmet>
      <Container>
        <ForwardedOldTitle className="ant-typography" ref={title}>
          Dictionarium Annamiticum Lusitanum et&nbsp;Latinum
        </ForwardedOldTitle>
        {entries.map((translations: any[]) => (
          <Entry key={entriesKey(translations)}>
            {translations.map(translation => (
              <Translation key={translation.vi} {...translation} />
            ))}
          </Entry>
        ))}
      </Container>
    </>
  );
};

export default DictionariumApp;
