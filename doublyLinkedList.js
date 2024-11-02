const max=10
class node{
      constructor(val){
        this.data=val
        this.next=null
        this.prev=null
      }
}
class doublyLinkedList{
      constructor(){
        this.head=null
        this.count=0
        this.tail=null
      }
      insertRear(ele){
            const newNode= new node(ele)
            if(this.head==null){
                this.head=newNode
                this.tail=newNode
                this.count++
            }
            else{
                let temp=this.head
                while(temp.next!=null){
                    temp=temp.next
                }
                newNode.prev=temp
                temp.next=newNode
                this.tail=newNode
                this.count++
            }
      }
      insertFront(ele){
        const newNode=new node(ele)
        if(this.head==null){
            this.head=newNode
            this.tail=newNode
            this.count++
        }
        else{
            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode
            this.count++
        }
      }
      insertAtPos(ele,pos){
        if(pos==0){
            this.insertFront(ele)
        }
        else if(pos==this.count){
            this.insertRear(ele)
        }
        else{
            const newNode=new node(ele)
            let temp=this.head
            let i=0;
            while(i<pos-1){
                temp=temp.next
                i++
            }
            newNode.prev=temp
            newNode.next=temp.next
            temp.next.prev=newNode
            temp.next=newNode
            this.count++
        }
      }
      deleteRear(){
        if(this.tail==null){
            console.log("List is empty")
        }
        else{
            this.tail.prev.next=null
            this.tail=this.tail.prev
            this.count--
        }
      }
      deleteFront(){
        if(this.head==null){
            console.log("List is empty")
        }
        else{
            this.head.next.prev=null
            this.head=this.head.next
            this.count--
        }
      }
      deletePos(pos){
        if(this.head==null){
            console.log("List is empty")
        }
        else if(pos==0){
            this.deleteFront()
        }
        else if(pos==this.count-1){
            this.deleteRear()
        }
        else{
            let temp=this.head
            let i=0;
            while(i<pos-1){
                temp=temp.next
                i++
            }
            temp.next.next.prev=temp
            temp.next=temp.next.next
            this.count--
        }
      }
      display(){
        if(this.head==null){
            console.log("List is empty")
        }
        else{
            let temp=this.head
            while(temp!=null){
                console.log(temp.data)
                temp=temp.next
            }
            console.log("")
        }
      }
      getCount(){
        return this.count
      }
reverseList(){
    if(this.head==null){
        console.log("List is empty")
        return
    }
    let current=this.head
    let temp=null
    while(current!=null){
        temp=current.prev
        current.prev=current.next
        current.next=temp
        current=current.prev
    }
    if(temp!=null){
        this.tail=this.head
        this.head=temp.prev
    }
}
}
const dll=new doublyLinkedList()
dll.insertRear(5)
dll.insertRear(6)
dll.insertRear(7)
dll.insertFront(1)
dll.insertFront(2)
dll.insertAtPos(3,2)
dll.insertAtPos(12,1)
dll.insertAtPos(12,1)
dll.insertAtPos(12,1)
dll.deleteFront()
dll.deleteFront()
dll.deleteRear()
dll.deleteRear()
dll.deletePos(2)
dll.deletePos(1)
dll.deletePos(2)
dll.reverseList()
dll.display()
console.log(dll.getCount())

