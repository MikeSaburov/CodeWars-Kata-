var cubeChecker = function (volume, side) {
  if (volume === Math.pow(side, 3) && volume > 0) {
    return true;
  } else {
    return false;
  }
};
