const max=10
class array{
    constructor(){
        this.array=new Array(max)
        this.capacity=0;
    }
    insertRear(ele){
        if(this.capacity==max){
            console.log("Array overflow");
            return
        }
        if(this.array[0]==undefined){
            this.array[0]=ele
            this.capacity++
        }
        else{
            for(let i=0;i<max;i++){
                if(this.array[i]==undefined){
                    this.array[i]=ele;
                    this.capacity++
                    break
                }
            }
        }
    }
    insertFront(ele){
        if(this.capacity==max){
            console.log("Array overflow");
            return
        }
        if(this.array[0]==undefined){
            this.array[0]=ele
            this.capacity++
        }
        else{
            for(let i=this.capacity-1;i>=0;i--){
                this.array[i+1]=this.array[i];
            }
            this.array[0]=ele
            this.capacity++
        }
    }
    insertAtPos(ele,pos){
        if(this.capacity==max){
            console.log("Array overflow");
            return
        }
        if(pos==0){
            this.insertFront(ele)
        }
        else if(pos==this.capacity){
            this.insertRear(ele)
        }
        else{
            for(let i=this.capacity-1;i>=pos;i--){
                this.array[i+1]=this.array[i]
            }
            this.array[pos]=ele 
            this.capacity++
        }
    }
    deleteRear(){
        if(this.array[0]==undefined){
            console.log("Array underflow");
        }
        else{
           this.array[this.capacity-1]=undefined
           this.capacity--
        }
    }
    deleteFront(){
        if(this.array[0]==undefined){
            console.log("Array underflow");
        }
        else{
            for(let i=0;i<this.capacity;i++){
                this.array[i]=this.array[i+1]
            }
            this.capacity--
        }
    }
    deletePos(pos){
        if(pos==0){
            this.deleteFront()
        }
        else if(pos==this.capacity-1){
            this.deleteRear()
        }
        else{
            for(let i=pos;i<this.capacity;i++){
                this.array[i]=this.array[i+1]
            }
            this.capacity--
        }
    }
    display(){
        if(this.array[0]==undefined){
            console.log("Array underflow");
        }
        else{
            for(let i=0;i<this.capacity;i++){
                console.log(this.array[i]+"\t")
            }
        }
    }
}
const a=new array()
a.insertRear(1)
a.insertRear(2)
a.insertRear(3)
a.insertFront(10)
a.insertFront(11)
a.insertAtPos(15,2)
a.insertAtPos(17,3)
a.deleteRear()
a.deleteRear()
a.deleteFront()
a.deleteFront()
a.deletePos(1)
a.deletePos(1)
a.display()