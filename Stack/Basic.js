class Stack{
    constructor(){
        this.stack = []
    }

    //push function - pushes elements
    push(element){
        this.stack.push(element)
    }
    //pop function - removies the last element 
    pop(){
        if(this.isEmpty()){
            return "stack is empty pop"
        }else{
            return this.stack.pop()
        }
    }
    // peek function -gives last element from the array 
    peek(){
        if(this.isEmpty()){
            return " stack is empth peek"
        }
        else{
            return this.stack[this.stack.length-1]
        }
    }
    // isEmpty function - returns boolean values if the size is empty 
    isEmpty(){
            return this.size() ===0;
    }

    // size function - return  the length of array

    size(){
            return this.stack.length;
    }

}


const newStack = new Stack();

newStack.push(10)
newStack.push(20)
newStack.push(30)
console.log( newStack)
