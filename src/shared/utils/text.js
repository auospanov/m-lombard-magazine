export const prettyPrice = (price) => `${parseFloat(price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ')}`;
