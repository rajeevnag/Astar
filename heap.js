/*|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\

    Heap Sort Stencil | JavaScript support functions

    Quick JavaScript Code-by-Example Tutorial 
     
    @author ohseejay / https://github.com/ohseejay
                     / https://bitbucket.org/ohseejay

    Chad Jenkins
    Laboratory for Perception RObotics and Grounded REasoning Systems
    University of Michigan

    License: Michigan Honor License 

|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/*/


// create empty object 
minheaper = {}; 

// define insert function for min binary heap
function minheap_insert(heap, new_element) {
    // STENCIL: implement your min binary heap insert operation
    heap.push(new_element);
    let idx = heap.length -1;
    let parent = Math.floor((idx-1)/2);

    while(idx > 0 && heap[parent] > heap[idx]){
        swap(heap,parent,idx);
        idx = parent;
        parent = Math.floor((idx-1)/2);
    }

}

// assign insert function within minheaper object
minheaper.insert = minheap_insert;
/* Note: because the minheap_insert function is an object, we can assign 
      a reference to the function within the minheap object, which can be called
      as minheap.insert
*/

// define extract function for min binary heap
function minheap_extract(heap) {
    // STENCIL: implement your min binary heap extract operation
    
    let idx = 0;
    let top= heap[0];
    let last = heap.pop();


    if(heap.length > 0){ // if the heap is nonempty still, 
        heap[0] = last;
        
        while(true){
            var leftChild = idx * 2 + 1;
            var rightChild = idx * 2 + 2;

            var swapIdx = null;
            
            if(leftChild < heap.length){ // within bounds
                if(heap[leftChild] < heap[idx]){ // left child smaller
                    swapIdx = leftChild;
                }
            }
            if(rightChild < heap.length){ //within bounds
                if(swapIdx == null){
                    if(heap[rightChild] < heap[idx]){
                        swapIdx = rightChild;
                    }
                } else{
                    if(heap[rightChild] < heap[swapIdx]){
                        swapIdx = rightChild;
                    }
                }
            }
            if(swapIdx == null){ // in right spot, quit
                break;
            }

            //swap the swapIdx value and the idx value
            var temp = heap[idx];
            heap[idx] = heap[swapIdx];
            heap[swapIdx] = temp;
            
            idx = swapIdx;

        }
        

    }
    return top;
}

// assign extract function within minheaper object

// STENCIL: ensure extract method is within minheaper object
minheaper.extract = minheap_extract


//EVERYTHING AFTER THIS IS STUFF I ADDED
function swap(heap,left,right){
    var temp = heap[left];
    heap[left] = heap[right];
    heap[right] = temp;
}
minheaper.heap = [];

function printHeap(heap){
    console.log("New Heap!");
    for(i=0; i < heap.length; i++){
        console.log(heap[i]);
    }
}
function test(minheaper){
    let arr = [1,2,3,4,5,6,7,8,9];
    for(var i = 0; i < arr.length; ++i){
        minheaper.insert(minheaper.heap,arr[i]);
        printHeap(minheaper.heap);
    }
    for(var i = 0; i < 3; ++i){
        console.log("Extract");
        console.log(minheaper.extract(minheaper.heap));
    }
    printHeap(minheaper.heap);
}

test(minheaper);

