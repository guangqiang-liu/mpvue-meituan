/** Created by guangqiang on 2018-07-02 14:57:01 */

const jointStyle = style => {
  let str = []
  Object.keys(style).forEach(key => {
    str.push(`${key}:${style[key]};`)
  })
  return str.join(';');
}

export {jointStyle}
