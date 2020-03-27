function loopingATriangle() {
  // Your code goes here
  let ans = '';
  for (let i=0; i<7; i++) {
    if (i !== 6) {
      ans += '#'.repeat(i+1) + '\n';
    } else {
      ans += '#'.repeat(i+1);
    }
  }
  return ans;
}

module.exports = loopingATriangle;