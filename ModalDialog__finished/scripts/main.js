function main() {
  const rootElement = document.documentElement;
  const switcher = document.querySelector('.ThemeSwitcher');
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

main();
