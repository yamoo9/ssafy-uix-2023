import { readFile, writeFile } from 'node:fs/promises';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { argv } from 'node:process';

const { cssDir, entryFile, outDir, outFile } = parseOptions();

const CSS_DIR = cssDir ?? 'src';
const ENTRY_FILE = entryFile ?? 'main.css';
const OUTPUT_DIR = outDir ?? 'styles';
const OUTPUT_FILE = outFile ?? 'main.bundled.css';

async function main() {
  try {
    const cssFileList = await convertCssFileList();
    const bundledCssContents = await bundleCssFileContents(cssFileList);
    await writeBundleCssFile(bundledCssContents);
    console.log(`CSS 번들 파일 생성 성공!\n${OUTPUT_DIR}/${OUTPUT_FILE}`);
  } catch (error) {
    console.error(error.message);
  }
}

async function convertCssFileList() {
  const mainContents = await readFile(getPath(`${CSS_DIR}/${ENTRY_FILE}`), {
    encoding: 'utf-8',
  });

  let contentList = mainContents.replace(/(\@import\s+|'|;|\n)/g, ($1) =>
    $1 === ';' ? ',' : $1 === `'` ? `"` : ''
  );

  return JSON.parse(`[${contentList.slice(0, -1)}]`);
}

async function bundleCssFileContents(cssFileList) {
  const cssContentList = cssFileList.map(async (cssFilePath) => {
    const cssContent = await readFile(getPath(`${CSS_DIR}/${cssFilePath}`), {
      encoding: 'utf-8',
    });

    return cssContent;
  });

  const bundledCssContents = await Promise.all(cssContentList);
  return bundledCssContents.join('');
}

async function writeBundleCssFile(bundledCssContents) {
  const outputDirPath = getPath(`${OUTPUT_DIR}`);

  if (!existsSync(outputDirPath)) {
    mkdirSync(outputDirPath);
  }

  return await writeFile(
    getPath(`${OUTPUT_DIR}/${OUTPUT_FILE}`),
    bundledCssContents,
    {
      encoding: 'utf-8',
    }
  );
}

function getPath(path) {
  return resolve(process.cwd(), path);
}

function parseOptions() {
  let options = argv.slice(2).map((keyValue) => {
    const [key, value] = keyValue.split('=');
    return [key.replace(/--/, ''), value];
  });

  return Object.fromEntries(options);
}

main();
