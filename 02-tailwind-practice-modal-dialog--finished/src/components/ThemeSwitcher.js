const THEME_COLORS =
  'gray red orange yellow teal cyan sky blue indigo violet pink rose'.split(
    ' '
  );

class ThemeSwitcher extends HTMLElement {
  #colors = [];

  constructor(colors = THEME_COLORS) {
    super();

    this.#colors = colors;
    this.render();
    this.bindEvents();
  }

  #containerStyle = `
    fixed z-[10000] top-6 right-6 
    flex gap-x-4 
    bg-white/90 
    backdrop-blur-sm 
    p-4 
    rounded-[32px] 
    shadow-lg
  `;

  #buttonStyle = `
    cursor-pointer 
    w-6 h-6 
    rounded-full 
    border-none 
    opacity-[0.55] 
    transition-opacity 
    duration-200 
    ease-in-out
    hover:opacity-[0.95]
    focus:opacity-[0.95]
  `;

  render() {
    this.innerHTML = /* html */ `
      <div class="${this.#containerStyle}">
        ${this.#colors
          .map((color) => {
            return `
              <button 
                type="button" 
                class="${this.#buttonStyle}"
                aria-label="${color}"
              ></button>
            `;
          })
          .join('')}
      </div>
    `;
  }

  bindEvents() {
    const rootElement = document.documentElement;
    const switcher = this.firstElementChild;
    const switcherButtons = Array.from(switcher.querySelectorAll('button'));

    switcherButtons.forEach((button) =>
      button.style.setProperty(
        'background-color',
        `var(--color-${button.getAttribute('aria-label')}-500)`
      )
    );

    switcher.addEventListener('click', ({ target, currentTarget }) => {
      if (target.matches('button')) {
        const colorName = target.getAttribute('aria-label');

        rootElement.style.setProperty(
          '--surface-brand',
          `var(--color-${colorName}-700)`
        );

        rootElement.style.setProperty(
          '--surface-secondary',
          `var(--color-${colorName}-900)`
        );

        currentTarget.querySelector('.active')?.classList.remove('active');
        target.classList.add('active');
      }
    });
  }
}

customElements.define('theme-switcher', ThemeSwitcher);
