const hearts = [];
const pinks = ["#ff748c", "#ff8da1", "#ffa7b6" , "#fc0a0a", "#eb0c0c" , "DC362D" , "8F0700"]; // list of different pink colors

class Heart {
  // all this code is to constructing a heart
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.theta = Math.random() * Math.PI * 2;
    const heartEl = document.createElement("div");
    heartEl.classList.add("heart");
    document.body.append(heartEl);
    const color = pinks[parseInt(Math.random() * pinks.length)];
    heartEl.style.background = color;

    const heartLeftEl = document.createElement("div");
    heartLeftEl.classList.add("left");
    heartLeftEl.style.background = color;
    heartEl.appendChild(heartLeftEl);

    const heartRightEl = document.createElement("div");
    heartRightEl.classList.add("right");
    heartRightEl.style.background = color;
    heartEl.appendChild(heartRightEl);

    this.el = heartEl;

    // delete hearts after 10 seconds
    setTimeout(() => {
      this.el.remove();
      this.hearts.splice(this.hearts.indexOf(this));
    }, 10000);
  }

  // changes the position of the hearts
  update() {
    this.x += Math.cos(this.theta) * 1; // moves the heart left to right based on theta position
    this.y += 1; // move down
    this.theta += 0.01; // move left to right
    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
  }
}

// every 200 miliseconds it makes a new heart between 0 n the width of the container
setInterval(() => {
  const heart = new Heart(Math.random() * window.innerWidth, -100);
  hearts.push(heart);
}, 200);

// calls update function to make the hearts go down and move back and forth
setInterval(() => {
  hearts.forEach((heart) => heart.update());
}, 10);
