module.exports = class Dnd {
  sort() {
    const items = document.querySelectorAll('li');
    this.current = null;

    items.forEach((item) => {
      item.addEventListener('dragstart', (e) => {
        this.current = e.target;
        e.target.classList.add('dragged');
      });

      item.addEventListener('dragenter', (e) => {
        if (e.target !== this.current) { e.target.classList.add('active'); }
      });

      item.addEventListener('dragleave', (e) => {
        e.target.classList.remove('active');
      });

      item.addEventListener('dragend', () => {
        // eslint-disable-next-line no-restricted-syntax
        for (const i of items) {
          i.classList.remove('active');
          i.classList.remove('dragged');
        }
      });

      item.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      item.addEventListener('drop', (e) => {
        e.preventDefault();

        if (e.target !== this.current) {
          let currentpos = 0; let droppedpos = 0;
          const all = document.querySelectorAll('li');
          for (let it = 0; it < all.length; it += 1) {
            if (this.current === all[it]) { currentpos = it; }
            if (e.target === all[it]) { droppedpos = it; }
          }
          if (currentpos < droppedpos) {
            e.target.parentNode.insertBefore(this.current, e.target.nextSibling);
          } else {
            e.target.parentNode.insertBefore(this.current, e.target);
          }
        }
      });
    });
  }
};