// ex. 0.14 * 100 = 14.00000000002 => 14
// ex. 0.28 + 0.07 = 0.35000000000000003 => 0.35
Math.__safeCaculate = function (formula = '0 + 0', log = false) {
  let result = 0
  try {
    result = eval(formula)
  } catch (err) {
    console.error(`'${formula}' not a formula`)
    return 0
  }
  return Math.__safeNumber(eval(formula), formula, log)
}
Math.__safeNumber = function (n, desc, log = false) {
  if (Number.isNaN(Number(n))) {
    console.error(`${n} not a number`)
    return 0
  }
  let [h, t] = String(Number(n)).split('.')
  if (!t || t.length < 8) return n
  let reg = /(0|9)\1{5,}[^\1]/
  let [ts, m] = t.match(reg) || []

  if (!m) return n
  t = t.split(ts)[0]
  if (m === '9') {
    if (!t) return Number(h) + 1
    t = String(Number('9' + t) + 1).slice(1)
  }
  let result = Number([h, t].join('.'))
  if (desc && log) console.log(['safeCaculate:', desc, `${n} => ${result}`])
  return result
}

Math.__toFixed = function (n, f = 2, log = false) {
  let [h, t] = String(Number(n)).split('.')
  if (!t) return n
  const xl = t.length
  let result = n
  if (xl > f) {
    let m = Number(t[f])

    if (m >= 5) {
      m = 9
    }
    if (n < 0) m = 0

    result = Number([h, '.', t.slice(0, 2), m].join(''))

    if (log) console.log(['toFixed:', n, n.toFixed(f), result])
  }
  return Number(result.toFixed(f))
}

