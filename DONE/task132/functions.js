export const getLocale = (userConfig, knownLocales) => {
  let i;
  for(i=0 ; i<knownLocales.length ; i++){
    if(userConfig.locale===knownLocales[i]){
    return userConfig.locale;
    }
  }
    return 'en';
}
