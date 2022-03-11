let map=[];
let score=0;
let person=[0,0];
let currenttime=0;

const prize_SCORE=10
const prize_COUNT=10

const spiderweb_SCORE=-10
const spiderweb_COUNT=5


const MAP_SIZE={width:10,height:10}
const TIME=30
const IMAGE_RESOURCES={}
const IMAGES=[
    {name:'robot',url:'./images/robot.svg'},
    {name:'prize',url:'./images/prize.svg'},
    {name:'bomb',url:'./images/bomb.svg'},
    {name:'spiderweb',url:'./images/spiderweb.svg'},
    {name:'hourglass',url:'./images/hourglass.svg'}
]//数组



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//先填装 row,再把 row 填装进 map
//在 row 中,一个方块里是放一个 prize 还是啥都不放通过 isInRecord 判断
const initMap = (size,count,score)=>{
    const map=[]
    const prizeRecord=initThing(size, count);
    const bombRecord=initThing(size, 5);
    const spiderwebRecord=initThing(size, 5);
    const hourglassRecord=initThing(size,5)

    for(let row=0;row<size.width;row++){
        const rowItem=[];

        for (let col=0;col<size.height;col++){
            if(isInRecord([row,col],prizeRecord)){
                rowItem.push({prize:getRandomInt(10)})
                continue;
            }          
            if(isInRecord([row,col],bombRecord)){
                rowItem.push({bomb:-2010})
                continue;
            }               
            if(isInRecord([row,col],spiderwebRecord)){
                rowItem.push({spiderweb:-getRandomInt(10)})
                continue;
            } 
            if(isInRecord([row,col],hourglassRecord)){
                rowItem.push({hourglass:5})
                continue;
            } 
            else{rowItem.push(null)} 
        }
        map.push(rowItem)
    }
    return map
}

const initThing =(size, count)=>{
    const record=[];

    while(record.length<count){
        const row=Math.floor(Math.random()*size.width);
        const col=Math.floor(Math.random()*size.height);

        //如果该坐标已被使用或是坐标是原点
        if((row===0&&col===0)||isInRecord([row,col],record)){continue;}
        record.push([row,col])
    }
    return record
}


const drawMap=(map)=>{
    const mapContainer=document.getElementsByClassName('map')[0];
    mapContainer.innerHTML=' '//这样设置 innerHTML 的值可以删除所有 class 名为 map 元素的全部内容。

    for(let[rowIndex,row] of map.entries()){
        const rowEl=document.createElement('div')
        rowEl.className='row'

        for(let[colIndex,col] of row.entries()){
            const colEl=document.createElement('div');
            colEl.className='cell'

            const isprizeCell=isprize(col)
            const isPersonCell=isEqualVector(person,[rowIndex,colIndex])
            const isbombCell=isbomb(col)
            const isspiderwebCell=isspiderweb(col)
            const ishourglassCell=ishourglass(col)

            drawCellWithImage(colEl,{map,rowIndex,colIndex,col},{isprizeCell,isbombCell,isspiderwebCell,ishourglassCell,isPersonCell})

            rowEl.appendChild(colEl)
        }
        mapContainer.appendChild(rowEl)
    }
}



const drawCellWithImage=(container,{map,rowIndex,colIndex,col},{isprizeCell,isbombCell,isspiderwebCell,ishourglassCell,isPersonCell})=>{
    if(isPersonCell){
        const person=createImageContainer()
        person.appendChild(createImage(IMAGE_RESOURCES.robot))
        container.appendChild(person)
    }

    if(isprizeCell){
        if(isPersonCell){
            score+=col.prize;
            map[rowIndex][colIndex]=null;
        }else{
            const prize=createImageContainer();
            prize.appendChild(createImage(IMAGE_RESOURCES.prize))
            container.appendChild(prize)
        }
    }

    if(isbombCell){
        if(isPersonCell){
            score=-2010;
            map[rowIndex][colIndex]=null;
        }else{
            const bomb=createImageContainer();
            bomb.appendChild(createImage(IMAGE_RESOURCES.bomb))
            container.appendChild(bomb)
        }
    }
    if(isspiderwebCell){
        if(isPersonCell){
            score+=col.spiderweb;
            map[rowIndex][colIndex]=null;
        }else{
            const spiderweb=createImageContainer();
            spiderweb.appendChild(createImage(IMAGE_RESOURCES.spiderweb))
            container.appendChild(spiderweb)
        }
    }
    if(ishourglassCell){
        if(isPersonCell){
            currenttime+=col.hourglass;
            map[rowIndex][colIndex]=null;
        }else{
            const hourglass=createImageContainer();
            hourglass.appendChild(createImage(IMAGE_RESOURCES.hourglass))
            container.appendChild(hourglass)
        }
    }
}

const move=(timer)=>(e)=>{
    const [y,x]=person

    switch(e.code){
        case 'ArrowRight':
            person=[y,x+1]
            break;
        case 'ArrowUp':
            person=[y-1,x]
            break;
        case 'ArrowDown':
            person=[y+1,x]
            break;
        case 'ArrowLeft':
            person=[y,x-1]
            break;
        defult:
        return;
    }
    console.log(e)
    drawMap(map)
    const scoreEl=document.getElementsByClassName('score')[0];
    scoreEl.innerHTML=`Score: ${score}`

    setTimeout(()=>{
        if(isprizeEmpty(map)){
            alert('Game Complete...')
            clearInterval(timer);
        }
    },0)

    setTimeout(()=>{
        if(score<0){
            alert('Game Complete...')
            clearInterval(timer);
        }
    },0)
}

const startGame=()=>{
    const timerEl=document.getElementsByClassName('time')[0];

    currenttime=TIME;
    timerEl.innerHTML=`time: ${currenttime}s`

    const scoreEl=document.getElementsByClassName('score')[0];
    scoreEl.innerHTML=`score: ${score}`

    const timer=setInterval(()=>{
        if(currenttime<=0){
            alert('Game over')
            clearInterval(timer)
            return;
        }
        currenttime--;
        timerEl.innerHTML=`time: ${currenttime}`
    },1000)
    document.addEventListener('keydown', move(timer))
}


//比较两个节点的 rol和 row
const isEqualVector=(a,b)=>a[0]===b[0] && a[1]===b[1]

//比较当前节点和 有没有和某一个prize 节点重合
const isInRecord=(pos,record)=>record.some(x=>isEqualVector(x,pos))//some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。

//如果 item 是 null 的话,显然返回 false
const isprize=(item)=>item && typeof item.prize==='number'
const isbomb=(item)=>item && typeof item.bomb==='number'
const isspiderweb=(item)=>item && typeof item.spiderweb==='number'
const ishourglass=(item)=>item && typeof item.hourglass==='number'
//
const isPerson=(item)=>item&&item.person

//every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
const isprizeEmpty=(map)=>map.every(row=>row.every(col=>!isprize(col)))

//Image()函数将会创建一个新的HTMLImageElement实例。
//它的功能等价于 document.createElement('img')
const createImage=(url)=>{
    const image=new Image();
    image.src=url;
    return image
}

const createImageContainer=()=>{
    const container=document.createElement('div');
    container.className='image-container'
    return container
}


const loadImage=({name,url})=>{
    return new Promise((resolve,reject)=>{
        const image=new Image();
        image.src=url;
        image.onload=()=>resolve({name,url});
        image.onerror=()=>reject(url)
    })
}

const loadImages=async()=>{
    //当我们需要同时等待多个 promise 时，我们可以用 Promise.all 把它们包装起来，然后使用 await
    const images=await Promise.all(IMAGES.map(loadImage))//promise.all 这个静态方法等待所有 promise 都准备就绪
    //IMAGES.map 是什么用法
    for(let {name,url} of images){ IMAGE_RESOURCES[name]=url }
}



const main=async()=>{
    map=initMap(MAP_SIZE,prize_COUNT,prize_SCORE)
    console.log(map)
    await loadImages()
    drawMap(map)    
}
main();