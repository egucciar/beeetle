const lte = (a, b) => {
  if (a.x <= b.x && a.y <= b.y) {
    return true;
  }
  return false;
};

export default lte;
