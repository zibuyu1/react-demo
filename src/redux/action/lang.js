export const SET_LANG = 'SET_LANG';

/**
 *语言切换
 *
 * @export
 * @param {语言参数} lang
 * @returns
 */
export function setLang(lang) {
  return {
    type: SET_LANG,
    payload: {
      language: lang
    }
  }
}
