/** Created by guangqiang on 2018-07-22 22:38:29 */

const isEmptyStr = str => {
  if (str == null || str == undefined || str == '') {
    return true
  } else {
    return false
  }
}

const isEmptyObj = obj => {
  if (typeof (obj) === 'object') {
    return !obj || (Array.isArray(obj) && obj.length === 0) || (obj.toString() === '[object Object]' && Object.keys(obj).length === 0);
  }
  if (typeof (obj) === 'boolean' || typeof (obj) === 'number') {
    return false;
  }
  if (typeof (obj) === 'string' && obj.trim().length === 0) {
    return true;
  }
  return !obj;
}

export {
  isEmptyStr,
  isEmptyObj
}