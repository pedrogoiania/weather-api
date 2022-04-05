const translations = require('./translations.json');

const contentLanguages = ['en_us', 'pt_br', 'es_es'];

/**
 * @description can do or use a real translation service
 */
const getTranslationByKey = (key, acceptLanguage = 'en_us') => {
  if (!contentLanguages.includes(acceptLanguage)) {
    acceptLanguage = 'en_us';
  }

  const keys = translations[acceptLanguage];

  const translation = keys.find((item) => item.key === key);

  if (!translation) {
    return key;
  }

  return translation.value;
};

module.exports = {
  getTranslationByKey,
};
