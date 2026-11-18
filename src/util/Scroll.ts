class Scroll {
  scrollToSection(href: string) {
    requestAnimationFrame(() => {
      if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const id = href.replace('#', '');
      const section = document.getElementById(id);
      if (!section) return;

      const fixedBar = document.querySelector('header');
      const headerHeight = fixedBar?.getBoundingClientRect().height ?? 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth',
      });
    });
  }
}

export default new Scroll();
