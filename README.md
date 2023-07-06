# Figma 2023

디자인 → 개발 핸드오프 프로세스에 대해 학습합니다. ([참고](https://help.figma.com/hc/en-us/articles/14506821864087))

- 로컬 변수(Local Variables)
- 디자인 토큰(Design Tokens)
- 개발 모드(Dev Mode)

## 실습

[실습 자료](<https://www.figma.com/file/giZz3GzTDKyfzlthyFdLe9/UI-Design-%E2%86%92-Begin-(with-Figma-2023)?type=design&node-id=1%3A2&mode=design&t=WYGdvFzoEEJr6RPC-1>)

1. 컬러 변수 생성
1. 컬러 토큰 생성
1. 컬러 토큰 적용
1. 숫자 변수(토큰) 생성
1. 토큰 변환 (CSS 변수)

## Figma 플러그인

- [Tailwind CSS Color Generator](https://www.figma.com/community/plugin/1242548152689430610/Tailwind-CSS-Color-Generator)
- [Convert Color Styles to Variables](https://www.figma.com/community/plugin/1253946217627460950/Convert-Color-Styles-to-Variables)
- [Variables Convertor](https://www.figma.com/community/plugin/1256000104406722117/Variables-Converter)
- [variable2json](https://www.figma.com/community/plugin/1253571037276959291)

## VS Code 확장

- [Figma for VS Code](https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension)

## 디자인 핸드오프

이미지 파일 업로드 모달 다이얼로그 컴포넌트 디자인 시안을 분석해 개발 코드로 구현합니다.

### 개발 서버 구동

`package.json` 파일을 작성하고 개발 서버를 구동하는 NPM 스크립트를 작성합니다.

```json
{
  "scripts": {
    "dev": "npx live-server --host=localhost --port=3000 --no-browser"
  }
}
```

[pnpm](https://pnpm.io/ko/) 패키지 매니저를 사용해 `dev` 명령을 실행합니다.

```sh
pnpm dev
```

## CSS 번들링

[yamoo9/bundleCss.js](https://gist.github.com/yamoo9/f9bfdfe58c5d84d3c1c0bda46be5a440) 파일을 다운로드 받아 프로젝트 루트 위치에 배치합니다.

`package.json` 파일에 `bundle` 명령을 추가합니다.

```json
{
  "type": "module",
  "scripts": {
    "dev": "live-server --host=localhost --port=3000 --no-browser",
    "bundle": "node ./bundleCSS.js"
  },
  "devDependencies": {
    "live-server": "1.2.2"
  }
}
```

프로그램 실행 시 사용자가 옵션을 설정할 수 있습니다.

| 옵션        | 설명               | 기본값             | 사용법                  |
| ----------- | ------------------ | ------------------ | ----------------------- |
| `cssDir`    | CSS 디렉토리       | `src`              | `--cssDir=css`          |
| `entryFile` | CSS 엔트리 파일    | `main.css`         | `--entryFile=index.css` |
| `outDir`    | 번들 출력 디렉토리 | `styles`           | `--outDir=css`          |
| `outFile`   | 번들 출력 파일     | `main.bundled.css` | `--outFile=main.css`    |

아래는 사용자 정의 옵션 설정 예시입니다.

```json
{
  "type": "module",
  "scripts": {
    "dev": "live-server --host=localhost --port=3000 --no-browser",
    "bundle": "node ./bundleCSS.js --outFile=main.css"
  },
  "devDependencies": {
    "live-server": "1.2.2"
  }
}
```
