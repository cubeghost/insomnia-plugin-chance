const LOCALES = [
  { displayName: 'az', value: 'az' },
  { displayName: 'cz', value: 'cz' },
  { displayName: 'de', value: 'de' },
  { displayName: 'de_AT', value: 'de_AT' },
  { displayName: 'de_CH', value: 'de_CH' },
  { displayName: 'en', value: 'en' },
  { displayName: 'en_AU', value: 'en_AU' },
  { displayName: 'en_BORK', value: 'en_BORK' },
  { displayName: 'en_CA', value: 'en_CA' },
  { displayName: 'en_GB', value: 'en_GB' },
  { displayName: 'en_IE', value: 'en_IE' },
  { displayName: 'en_IND', value: 'en_IND' },
  { displayName: 'en_US', value: 'en_US' },
  { displayName: 'en_au_ocker', value: 'en_au_ocker' },
  { displayName: 'es', value: 'es' },
  { displayName: 'es_MX', value: 'es_MX' },
  { displayName: 'fa', value: 'fa' },
  { displayName: 'fr', value: 'fr' },
  { displayName: 'fr_CA', value: 'fr_CA' },
  { displayName: 'ge', value: 'ge' },
  { displayName: 'id_ID', value: 'id_ID' },
  { displayName: 'it', value: 'it' },
  { displayName: 'ja', value: 'ja' },
  { displayName: 'ko', value: 'ko' },
  { displayName: 'nb_NO', value: 'nb_NO' },
  { displayName: 'nep', value: 'nep' },
  { displayName: 'nl', value: 'nl' },
  { displayName: 'pl', value: 'pl' },
  { displayName: 'pt_BR', value: 'pt_BR' },
  { displayName: 'ru', value: 'ru' },
  { displayName: 'sk', value: 'sk' },
  { displayName: 'sv', value: 'sv' },
  { displayName: 'tr', value: 'tr' },
  { displayName: 'uk', value: 'uk' },
  { displayName: 'vi', value: 'vi' },
  { displayName: 'zh_CN', value: 'zh_CN' },
  { displayName: 'zh_TW', value: 'zh_TW' },
];

const ARG_LOCALES = {
  displayName: 'Localization',
  defaultValue: 'en_US',
  type: 'enum',
  options: LOCALES,
};

module.exports = {
  LOCALES,
  ARG_LOCALES,
};