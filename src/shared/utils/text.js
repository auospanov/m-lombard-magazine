export const prettyPrice = (price) => `${parseFloat(price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ')}`;

export function pluralize(n, textForms) {
  const n1 = Math.abs(n) % 100;
  const n2 = n1 % 10;

  if (n1 > 10 && n1 < 20) {
    return textForms[2];
  }

  if (n2 > 1 && n2 < 5) {
    return textForms[1];
  }

  return n2 === 1
    ? textForms[0]
    : textForms[2];
}
