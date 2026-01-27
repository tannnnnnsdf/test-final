document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");

  Promise.all(
    [...includes].map(el => {
      const file = el.dataset.include;
      return fetch(file)
        .then(res => res.text())
        .then(html => {
          el.innerHTML = html;
        });
    })
  ).then(() => {
    document.dispatchEvent(new Event("includesLoaded"));
  });
});
document.addEventListener('includesLoaded', () => {
  const currentPath = location.pathname.replace(/\/$/, '') || '/';

  document.querySelectorAll('.nav-menu a').forEach(link => {
    const linkPath = link.getAttribute('href')?.replace(/\/$/, '');

    if (linkPath === currentPath) {
      link.classList.add('active');

      // ถ้าเป็นเมนูย่อย → เปิด dropdown แม่ด้วย
      const parent = link.closest('.has-dropdown');
      if (parent) parent.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
