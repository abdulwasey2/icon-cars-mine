customElements.define('build-an-icon-link', class extends HTMLElement {
    connectedCallback() {
        const a = document.createElement('a');
        a.textContent = "Build an Icon" + (this.getAttribute('contains-arrow') === 'true' ? ' >' : '');
        a.style.fontSize = (this.getAttribute('size') / 3) + 'px';
        a.style.background = this.getAttribute('background-color');
        a.style.color = this.getAttribute('label-color');
        a.style.borderRadius = '50px';
        a.style.padding = '1em 2em';
        a.style.borderColor = this.getAttribute('border-color');
        a.style.borderWidth = '1px';
        a.style.borderStyle = 'solid';
        a.href = '#';
        this.replaceWith(a);
    }
});