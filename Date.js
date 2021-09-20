let p = Date.prototype
//  time to
p.__tto = function(o = new Date()){
  return ((this.getTime() - o.getTime()) / 1000).__tstr()
}
/*
 * How to use
 * tomorrow: __bf(1)
 * yesterday: __bf(-1)
 */
p.__bf = function(n = 0) {
  this.__d(this.getDate() + n)
  return this
}
p.__bfm = function(n = 0) {
  this.__m(this.getMonth() + 1 + n)
  return this
}
p.__bfy = function(n = 0) {
  this.__y(this.getFullYear() + n)
  return this
}
p.__date = function(s) {
  if (!s) return this
  s = s.split('-')
  this.__y(s[0]).__m(s[1]).__d(s[2])
  return this
}
p.__time = function(s) {
  if (!s) return this
  s = s.split(':')
  return this.__h(s[0]).__mm(s[1]).__s(s[2])
}
/*
 * ?
 * __str('y-m-d hh:mm:ss')
 */
p.__str = function(s = 'yyyy-mm-dd hh:mm:ss') {
  let y = this.getFullYear().__padStart('0', 4),
      m = this.getMonth().__padStart('0', 2),
      d = this.getDate().__padStart('0', 2),
      hh = this.getHours().__padStart('0', 2),
      mm = this.getMinutes().__padStart('0', 2),
      ss = this.getSeconds().__padStart('0', 2)
  return s.replace(/:s+/ig, ':' + ss)
    .replace(/:m+/ig, ':' + mm)
    .replace(/h+/ig, hh)
    .replace(/d+/ig, d)
    .replace(/m+/ig, m)
    .replace(/y+/ig, y)
}
p.__y = function(n) {
  n !== undefined && this.setFullYear(n)
  return this
}
p.__m = function(n) {
  n !== undefined && this.setMonth(n - 1)
  return this
}
p.__d = function(n) {
  n !== undefined && this.setDate(n)
  return this
}
p.__h = function(n) {
  n !== undefined && this.setHours(n)
  return this
}
p.__mm = function(n) {
  n !== undefined && this.setMinutes(n)
  return this
}
p.__s = function(n) {
  n !== undefined && this.setSeconds(n)
  return this
}
Date.__S = 1
Date.__MM = 60
Date.__H = 3600
Date.__D = 24 * 3600
Date.__M = 30 * 24 * 3600
Date.__Y = 365 * 24 * 3600
