export function add(a, b) {
  const numA = parseFloat(a) || 0;
  const numB = parseFloat(b) || 0;
  return numA + numB;
}

export function subtract(a, b) {
  const numA = parseFloat(a) || 0;
  const numB = parseFloat(b) || 0;
  return numA - numB;
}

export function multiply(a, b) {
  const numA = parseFloat(a) || 0;
  const numB = parseFloat(b) || 0;
  return numA * numB;
}

export function divide(a, b) {
  const numA = parseFloat(a) || 0;
  const numB = parseFloat(b) || 0;

  if (numB === 0) {
    return 'Error';
  }

  return numA / numB;
}

export function percent(value) {
  const num = parseFloat(value) || 0;
  return num / 100;
}

export function toggleSign(value) {
  const num = parseFloat(value) || 0;
  return -num;
}

export function formatNumber(num, maxDecimals = 10) {
  if (typeof num === 'string' && num === 'Error') {
    return num;
  }

  const numValue = parseFloat(num);

  if (isNaN(numValue)) {
    return '0';
  }

  const fixed = numValue.toFixed(maxDecimals);
  const parsed = parseFloat(fixed);

  const str = String(parsed);
  if (str.length > 12) {
    return numValue.toExponential(6);
  }

  return str;
}
