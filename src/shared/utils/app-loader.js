export const appLoader = {
  el: document.querySelector('.app-loader-wrapper'),
  show() {
    this.el.style.display = 'block';
  },
  hide() {
    this.el.style.display = 'none';
  },
};
