class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width; // Initialize private field
    this.#height = height; // Initialize private field
  }

  // Getter for width
  get width() {
    return this.#width;
  }

  // Getter for height
  get height() {
    return this.#height;
  }

  // Method to calculate area
  getArea() {
    return this.#width * this.#height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Call the parent class constructor with width and height as the same value (side)
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width; // Or 4 * this.side (both are the same for a square)
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
