class IconPlaceholder extends HTMLElement {
  constructor() {
    super();

    const className = this.getAttribute('class') ?? '';

    this.innerHTML = `
    <svg width="77" height="51" viewBox="0 0 77 51" class="${className}">
    <g>
      <path d="M19.5 17.5L38.5 50.5H0.5L19.5 17.5Z" fill="#B6BAC3" />
      <path
        d="M48.4737 0.5L76.9737 50.5H19.9737L48.4737 0.5Z"
        fill="currentColor"
      />
      <path
        d="M16.5526 11.5C16.5526 13.1569 15.2094 14.5 13.5526 14.5C11.8957 14.5 10.5526 13.1569 10.5526 11.5C10.5526 9.84315 11.8957 8.5 13.5526 8.5C15.2094 8.5 16.5526 9.84315 16.5526 11.5Z"
        fill="#D8DADF"
      />
    </g>
  </svg>
      `;
  }
}

customElements.define('icon-placeholder', IconPlaceholder);
