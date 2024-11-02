class node{
    constructor(val){
        this.data=val
        this.next=null
    }
}
class singlyLinkedList{
      constructor(){
        this.head=null
        this.count=0
      }
      append(ele){
        const newNode=new node(ele)
        if(this.head==null){
            this.head=newNode
            this.count++
        }
        else{
            let temp=this.head
            while(temp.next!=null){
                temp=temp.next
            }
            temp.next=newNode
            this.count++
        }
      }
      prepend(ele){
        const newNode=new node(ele)
        if(this.head==null){
            this.head=newNode
            this.count++
        }
        else{
            newNode.next=this.head
            this.head=newNode
            this.count++
        }
      }
      pendAtPos(ele,pos){
        const newNode=new node(ele)
        if(pos==0){
            this.prepend(ele)
        }
        else if(pos==this.count){
            this.append(ele)
        }
        else{
            let temp=this.head
            let i=0
            while(i<pos-1){
                temp=temp.next
                i++
            }
            newNode.next=temp.next
            temp.next=newNode
            this.count++
        }
      }
      removerear(){
        if(this.head==null){
            console.log("List is empty")
        }
        else{
            let temp=this.head
            while(temp.next.next!=null){
                 temp=temp.next
            }
            temp.next=null
            this.count--
        }
      }
      removeFront(){
        if(this.head==null){
            console.log("List is empty")
        }
        else{
            this.head=this.head.next
            this.count--
        }
      }
      removeAtPos(pos){
        if(this.head==null){
            console.log("List is empty")
        }
        else{
            if(pos==0){
                this.removeFront()
            }
            else if(pos==this.count-1){
                this.removerear()
            }
            else{
                let temp=this.head
                let i=0
                while(i<pos-1){
                    temp=temp.next
                    i++
                }
                temp.next=temp.next.next
                this.count--
            }
        }
      }
      display(){
        if(this.head==null){
            console.log("List is empty")
        }
        else{
            let temp=this.head
            while(temp!=null){
                console.log(temp.data+"\t")
                temp=temp.next
            }
        }
      }
    reverseList(){
        if(this.head==null){
            console.log("List is empty")
            return
        }
        let current=this.head
        let next=null,prev=null
        while(current!=null){
            next=current.next
            current.next=prev
            prev=current
            current=next
        }
        this.head=prev
    }  
}
const sl=new singlyLinkedList()
sl.append(1)
sl.append(2)
sl.prepend(3)
sl.prepend(4)
sl.pendAtPos(5,1)
sl.pendAtPos(6,2)
sl.removeFront()
sl.removeFront()
sl.removeAtPos(1)
sl.removeAtPos(1)
sl.reverseList()
sl.display()