import  { SET_LANG }  from '../action/lang';

export default function(state = {language: 'zh'}, action) {
  switch (action.type) {
    case SET_LANG: {
      return {
        ...state,
        language: action.payload.language
      }
    }
    default:
      return state;
  }
}