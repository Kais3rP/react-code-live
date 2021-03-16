export function hasHooks(str) {
  const reg = /(useState|useEffect|useRef|useCallback|useMemo)/;
  return reg.test(str);
}

export function isClass(str) {
  const reg = /^\s*class\s*/;
  return reg.test(str);
}

export function hasRender(str) {
  const reg = /render\s*\(\)/s;
  return reg.test(str);
}

export function getClass(str) {
  const reg = /^class.*};*\s*$/s;
  return reg.exec(str) && reg.exec(str)[0];
}

export function getClassAndConst(str) {
  const reg = /^class.*};*\s*?(?=(const|let|var))/s;
  return reg.exec(str) && reg.exec(str)[0];
}

export function getFunction(str) {
  console.log(str)
  const reg = /^function.*};*\s*$/s;
  return reg.exec(str) && reg.exec(str)[0];
}

export function getFunctionAndConst(str) {
  const reg = /^function.*};*\s*?(?=(const|let|var))/s;
  return reg.exec(str) && reg.exec(str)[0];
}

export function getArrowFunction(str) {
  const reg = /^\(.*\)\s*=>.*};*\s*$/s;
  return reg.exec(str) && reg.exec(str)[0];
}

export function getArrowFunctionAndConst(str) {
  const reg = /^\(.*\)\s*=>.*};*\s*?(?=(const|let|var))/s;
  return reg.exec(str) && reg.exec(str)[0];
}

export function getKey(str) {
  const reg = /(?<=Key).*/;
  return reg.exec(str) && reg.exec(str)[0];
}

export function calcNewCode(str, char, idx) {
  return str.slice(0, idx) + char + str.slice(idx, str.length + 1);
}
