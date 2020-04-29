const reverseString = (inputArr) => {
  //NEED TO TRACK HEAD AND TAIL POINTERS AND REVERSE THOSE INDICES IN ARRAY UNTIL POINTERS MEET
  let head = 0;
  let tail = inputArr.length - 1;
  while (head !== tail) {
    lastHead = inputArr[head];
    lastTail = inputArr[tail];
    inputArr[head] = lastTail;
    inputArr[tail] = lastHead;
    head++;
    tail--;
  }
  return inputArr;
}

module.exports = reverseString;
