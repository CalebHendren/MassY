// ==UserScript==
// @name         Banner Attendance Mass Y
// @match        *://*/ssb/*
// @run-at       document-idle
// ==/UserScript==

(function() {
  document.querySelectorAll('select').forEach(s => {
    if ([...s.options].some(o => o.text === 'Y')) {
      s.value = 'Y';
      s.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
})();