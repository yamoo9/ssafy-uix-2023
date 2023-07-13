const { localStorage } = globalThis;

class InjectHTML extends HTMLElement {
  #path;
  #height;
  #errorMessage = '<inject-html> 요소 사용 시, path 속성 설정이 필요합니다.';

  constructor() {
    super();

    this.#path = this.getAttribute('path');
    this.#height = this.getAttribute('height') ?? 0;

    if (!this.#path) {
      throw new Error(this.#errorMessage);
    }

    this.#init();
  }

  #init() {
    this.mount();
    this.render();
  }

  mount() {
    const memoHTML = JSON.parse(localStorage.getItem(this.#path));

    if (memoHTML) {
      this.innerHTML = memoHTML;
    } else {
      this.innerHTML = /* html */ `<div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="50" cy="50" r="0" fill="none" stroke="#85a2b6" stroke-width="2">
            <animate attributeName="r" repeatCount="indefinite" dur="2.7027027027027026s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"></animate>
            <animate attributeName="opacity" repeatCount="indefinite" dur="2.7027027027027026s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"></animate>
          </circle><circle cx="50" cy="50" r="0" fill="none" stroke="#bbcedd" stroke-width="2">
            <animate attributeName="r" repeatCount="indefinite" dur="2.7027027027027026s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-1.3513513513513513s"></animate>
            <animate attributeName="opacity" repeatCount="indefinite" dur="2.7027027027027026s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-1.3513513513513513s"></animate>
          </circle>
          </svg>
      </div>`;

      const heightValue = this.#height;

      if (heightValue) {
        this.firstElementChild.style.cssText = `
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: ${heightValue}px;
        `;
      }
    }
  }

  async render() {
    this.innerHTML = await this.#getHTMLFile();
    localStorage.setItem(this.#path, JSON.stringify(this.innerHTML));
  }

  #getHTMLFile() {
    return fetch(this.#path).then((res) => res.text());
  }
}

// 컴포넌트 => 사용자 정의 요소 생성
customElements.define('inject-html', InjectHTML);
