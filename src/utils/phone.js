const PHONE_DIGITS = 9;

export function extractLocalDigits(value) {
  const digits = String(value).replace(/\D/g, '');
  if (digits.startsWith('375')) {
    return digits.slice(3, 3 + PHONE_DIGITS);
  }
  if (digits.startsWith('80')) {
    return digits.slice(2, 2 + PHONE_DIGITS);
  }
  return digits.slice(0, PHONE_DIGITS);
}

export function formatByPhone(value) {
  const local = extractLocalDigits(value);
  let result = '+375';
  if (local.length > 0) result += ` ${local.slice(0, 2)}`;
  if (local.length > 2) result += ` ${local.slice(2, 5)}`;
  if (local.length > 5) result += `-${local.slice(5, 7)}`;
  if (local.length > 7) result += `-${local.slice(7, 9)}`;
  return result;
}

export function isValidByPhone(value) {
  return extractLocalDigits(value).length === PHONE_DIGITS;
}

export function formatPhoneForDisplay(value) {
  return formatByPhone(value);
}

const NAME_PATTERN = /^[A-Za-zА-Яа-яЁёІіЎў'-]{2,}(?:\s+[A-Za-zА-Яа-яЁёІіЎў'-]{2,})*$/;

export function isValidName(value) {
  return NAME_PATTERN.test(String(value).trim());
}
