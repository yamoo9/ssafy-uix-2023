import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

const __cwd = cwd();

export default function multiplePagesPlugin(
  pageDirName = 'pages',
  debug = false
) {
  const pageDir = readdirSync(resolve(__cwd, pageDirName));

  let inputPaths = pageDir
    .filter((fileName) => /.html?$/.test(fileName))
    .map((page) => [
      /* filename */ page.replace(/.html?$/g, ''),
      /* file */ resolve(__cwd, `${pageDirName}/${page}`),
    ]);

  inputPaths = Object.fromEntries(inputPaths);

  if (debug) {
    console.log(
      `\n📑 멀티 페이지 인풋 구성\n\n${JSON.stringify(inputPaths, null, 2)}\n`
    );
  }

  return {
    name: 'multiple-pages',
    config: () => ({
      build: {
        rollupOptions: {
          input: {
            main: resolve(__cwd, 'index.html'),
            ...inputPaths,
          },
        },
      },
    }),
  };
}
