function findWaldo(arr, found) {
    arr.forEach(function(name, index) {
        if (name === "Waldo") {
            found(index); // execute callback
        }
    });
}

function actionWhenFound(index) {
    // var index = 2;
    console.log("Found Waldo at index " + index + "!");
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);