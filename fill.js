Bitmap.prototype.fill = function(row, col, new_color) {
    const old_color = this.grid[row][col];
    if(old_color === new_color) return;
    this.setColor(row, col, new_color);

    var queue = [];
    // The rest of the flood fill algorithm is given in pseudo-code below.
    // Convert the following pseudo-code comments into javascript
    // to complete the implementation of this method.
    //
    //
    // Push the coordinates [row, col] onto the queue.
    // While the queue is not empty:
    //    Shift a pair of coordinates [r,c] off the front of the queue.
    //    The 4-connected neighbors are the cells above, below, left, and right.
    //    Check each of those 4 neighbors:
    //       If the neighbor is old_color:
    //          Set the neighbor to new_color.
    //          Add the neighbors coordinates to the queue
    //          (to ensure we later check its neighbors as well).
}