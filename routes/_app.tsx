import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>情侣游戏</title>
        <script src="/stat.js"></script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
