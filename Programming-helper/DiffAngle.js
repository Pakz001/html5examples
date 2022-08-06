function diffAngle(a, b) {
    return ((((a - b) % 360) + 540) % 360) - 180;
  }
