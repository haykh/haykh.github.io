function periodicLimit (n, nlow, nhigh) {
  pl = false;
  while (n >= nhigh) {
    n -= (nhigh - nlow);
    pl = true;
  }
  while (n < nlow) {
    n += (nhigh - nlow);
    pl = true;
  }
  return [pl, n];
}
