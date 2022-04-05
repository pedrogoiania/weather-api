const acceptLanguage = (headers) => {
  let al = String(headers['accept-language']).toLowerCase();
  al = al.replace('-', '_');

  return al;
};

module.exports = {
  acceptLanguage,
};
