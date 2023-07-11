# Tailwind CSS 펀더멘탈

Tailwind CSS 사용법을 학습합니다.

### 플러그인 이슈

[prettier v3과 prettier-plugin-tailwindcss 플러그인이 정상적으로 작동한지 않는 문제](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/176)가 있습니다.

그러므로 정상적으로 작동하는 prettier 이전 버전(^2.8)으로 설치해야 합니다.

```sh
pnpm add -D prettier@2.8 perttier-plugin-tailwindcss
```

### Prettier 구성 가이드

플러그인과 포멧팅 규칙이 구성된 Prettier 가이드를 참고하세요.

<details open>
  <summary>prettier.config.cjs</summary>

  ```js
  module.exports = {
    plugins: [require("prettier-plugin-tailwindcss")],

    // 화살표 함수 식 매개변수 () 생략 여부 (ex: (a) => a)
    arrowParens: "always",
    // 닫는 괄호(>) 위치 설정
    // ex: <div
    //       id="unique-id"
    //       class="contaienr"
    //     >
    htmlWhitespaceSensitivity: "css",
    bracketSameLine: false,
    // 객체 표기 괄호 사이 공백 추가 여부 (ex: { foo: bar })
    bracketSpacing: true,
    // 행폭 설정 (줄 길이가 설정 값보다 길어지면 자동 개행)
    printWidth: 80,
    // 산문 래핑 설정
    proseWrap: "preserve",
    // 객체 속성 key 값에 인용 부호 사용 여부 (ex: { 'key': 'xkieo-xxxx' })
    quoteProps: "as-needed",
    // 세미콜론(;) 사용 여부
    semi: true,
    // 싱글 인용 부호(') 사용 여부
    singleQuote: true,
    // 탭 너비 설정
    tabWidth: 2,
    // 객체 마지막 속성 선언 뒷 부분에 콤마 추가 여부
    trailingComma: "es5",
    // 탭 사용 여부
    useTabs: false,
  };

  ```
</details>