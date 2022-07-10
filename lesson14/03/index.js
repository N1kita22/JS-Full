//add() decrease() reset() getMemo()
let defualtNum = 0;
export function add(num) {
  defualtNum += num;
}
export function decrease(num) {
  defualtNum -= num;
}
export function reset() {
  defualtNum = 0;
}
export function getMemo() {
  return defualtNum;
}
