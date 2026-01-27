document.addEventListener('includesLoaded', () => {

  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');

  const dropdownItems = document.querySelectorAll('.has-dropdown');
  const allNavLinks = document.querySelectorAll('.nav-menu > li > a');
  const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

  if (!menuToggle || !navMenu || !mobileOverlay) return;

  /* ===============================
     Utility
  =============================== */
  function closeAll() {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
    dropdownItems.forEach(i => i.classList.remove('active'));
  }

  function setActive(link) {
    allNavLinks.forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  }

  /* ===============================
     เปิด / ปิด เมนูหลัก (มือถือ)
  =============================== */
  menuToggle.addEventListener('click', e => {
    e.stopPropagation();

    const isOpen = navMenu.classList.contains('active');

    menuToggle.classList.toggle('active', !isOpen);
    navMenu.classList.toggle('active', !isOpen);
    mobileOverlay.classList.toggle('active', !isOpen);

    document.body.style.overflow = !isOpen ? 'hidden' : '';

    if (isOpen) {
      dropdownItems.forEach(i => i.classList.remove('active'));
    }
  });

  /* ===============================
     คลิก overlay = ปิดทุกอย่าง
  =============================== */
  mobileOverlay.addEventListener('click', closeAll);

  /* ===============================
     Dropdown แบบ Accordion (มือถือ)
  =============================== */
  dropdownItems.forEach(item => {
    const trigger = item.querySelector(':scope > a');
    if (!trigger) return;

    trigger.addEventListener('click', e => {
      if (window.innerWidth > 768) return;

      e.preventDefault();

      const isOpen = item.classList.contains('active');

      dropdownItems.forEach(i => i.classList.remove('active'));

      if (!isOpen) {
        item.classList.add('active');
      }

      setActive(trigger);
    });
  });

  /* ===============================
     เมนูหลัก (ไม่มี dropdown)
  =============================== */
  allNavLinks.forEach(link => {
    if (link.closest('.has-dropdown')) return;

    link.addEventListener('click', () => {
      setActive(link);
      if (window.innerWidth <= 768) closeAll();
    });
  });

  /* ===============================
     เมนูย่อย (dropdown)
  =============================== */
  dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
      const parentTrigger = link
        .closest('.has-dropdown')
        ?.querySelector(':scope > a');

      if (parentTrigger) {
        setActive(parentTrigger);
      }

      closeAll();
    });
  });

});
document.addEventListener('includesLoaded', () => {
  const consent = document.getElementById('cookieConsent');
  const acceptBtn = document.getElementById('acceptCookies');

  if (!consent || !acceptBtn) return;

  if (localStorage.getItem('cookiesAccepted') === 'yes') {
    consent.remove();
    return;
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'yes');
    consent.remove();
  });
});

 document.addEventListener('DOMContentLoaded', () => {
  const consent = document.getElementById('cookieConsent');
  const acceptBtn = document.getElementById('acceptCookies');

  if (!consent || !acceptBtn) return;

  // ถ้ายอมรับแล้ว → ไม่แสดง
  if (localStorage.getItem('cookiesAccepted') === 'yes') {
    consent.remove();
    return;
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'yes');
    consent.remove();
  });
});

