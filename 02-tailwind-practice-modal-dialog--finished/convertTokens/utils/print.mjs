import options from './parseArgvOptions.mjs';

const print = () =>
  console.log(
    `✅ Tailwind CSS 사용자 정의 테마 토큰 "${options.output}" 생성!`
  );

export default print;
