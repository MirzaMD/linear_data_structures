class hashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++)
            total+=key.charCodeAt(i)
        return total%this.size
    }
    set(key,value){
        let index=this.hash(key)
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }
        else {
            let sameKey=bucket.find(item=>item[0]==key)
             if(sameKey){
                sameKey[1]=value
             }
             else
               bucket.push([key,value])
        }
    }
    get(key){
        let index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            let sameKey=bucket.find(item=>item[0]==key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }
    remove(key){
        let index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            let itemIndex=bucket.findIndex(item=>item[0]==key)
            if(itemIndex!=-1){
                bucket.splice(itemIndex,1)
                if(bucket.length==0)
                    this.table[index]=undefined
            }
        }
    }
    display(){
            for(let i=0;i<this.size;i++){
                if(this.table[i])
                console.log(i,this.table[i])
            }
    }
}
const h=new hashTable(5)
h.set("1","mirza")
h.set("2",20)
h.set("occ","engineer")
h.set("add","richmond")
h.remove("2")
h.display()