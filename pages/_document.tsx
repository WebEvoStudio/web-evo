import React from 'react';
import Document, {Html, Main, NextScript, Head} from 'next/document';
import createEmotionCache from '../core/unit/createEmotionCache';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../core/themes/theme';

/**
 * Document
 * @constructor
 */
export default class MyDocument extends Document {
  /**
   * render
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    return (
      <Html lang={'zh-CN'}>
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          {/* 谷歌广告*/}
          <script
            src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1031326139722537'}
            crossOrigin={'anonymous'} async
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
MyDocument.getInitialProps = async (ctx: any) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const {extractCriticalToChunks} = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props: any) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps: any = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: style.css}}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
