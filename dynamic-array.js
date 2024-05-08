class DynamicArray {
  constructor(capacity = 4) {
    this.length = 0
    this.capacity = capacity
    this.data = new Array(this.capacity)
  }

  read(index) {
// We need to iterate through the array and return i
for (let i = 0; i <= this.data.length; i++) {
  return this.data[index]
}

  }

  unshift(val) {
// We need to add values to the front using unshift method
// We need a way to add val to the front of array
// The array we have is this.data, which also has a capacity initialized

for (let i = this.length; i > 0; i--) {
this.data[i] = this.data[i - 1]
}
this.data[0] = val
  this.length++;

  }

}


module.exports = DynamicArray;
