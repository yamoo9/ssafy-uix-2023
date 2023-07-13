class IconClose extends HTMLElement {
  constructor() {
    super();

    const className = this.getAttribute('class') ?? '';

    this.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 18 18" class="${className}">
        <path
          id="lines"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.00003 9.70714L17.1318 17.8389L17.8389 17.1318L9.70714 9.00003L17.8389 0.868301L17.1318 0.161194L9.00003 8.29292L0.868301 0.161194L0.161194 0.868301L8.29292 9.00003L0.161194 17.1318L0.8683 17.8389L9.00003 9.70714Z"
          fill="currentColor"
        />
      </svg>
      `;
  }
}

customElements.define('icon-close', IconClose);
