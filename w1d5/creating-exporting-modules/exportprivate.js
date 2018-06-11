var dataList = [];

var numStore = function(...arr) {

 dataList = dataList.concat(arr).sort(sort);

 return dataList;

}

function sort (a, b) {

 return a - b;

}

// store.numStore(13, 5, 9);
// store.numStore(6);
// store.numStore(7, 10);
// store.numStore(8);

module.exports = { numStore: numStore };