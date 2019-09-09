class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv(text){
        let div = document.createElement('div');

        div.textContent = text;
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px;
         background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
        document.body.appendChild(div);
    }
}