module.exports = (strings, ...values) => {
  let str = '';

  strings.forEach((string, i) => {
    str += string + (values[i] !== undefined ? values[i] : '');
  });

  return str;
};
