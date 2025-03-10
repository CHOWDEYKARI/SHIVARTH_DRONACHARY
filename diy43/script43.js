class BinaryHeap
{
    constructor(){
        this.arr=[];
    }
    push(element){
        this.arr.push(element);
        let index = this.arr.length -1;
        const current = this.arr[index];

        while(index >0){
            let parentIndex = Math.floor((index-1)/2);
            let parent =this.arr[parentIndex];

            if(parent<= current){
                this.arr[parentIndex]=current;
                this.arr[index]=parent;
                index=parentIndex;
            }else break
        }
    }
}

const BH = new BinaryHeap();
BH.push(50);
BH.push(40);
BH.push(30);
BH.push(20);
console.log(BH);