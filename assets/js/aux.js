function periodicLimit (n, nlow, nhigh) {
  while (n >= nhigh) {
    n -= (nhigh - nlow);
  }
  while (n < nlow) {
    n += (nhigh - nlow);
  }
  return n;
}
