if (province === "ONTARIO") {
  rate = ONTARIO_RATE;
} else if (province === "QUEBEC" || province === "ALBERTA") {
  rate = province === "QUEBEC" ? QUEBEC_RATE : ALBERTA_RATE;

  if (province === "QUEBEC") {
    points = 2;
  }
} else {
  rate = 1;
}
amt = base * rate;
calc = 2 * basis(amt) + extra(amt) * 1.05;
