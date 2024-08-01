const arrayImage =['2.jpg','3.jpg','4.jpg','8.jpg','i.jpeg']
const arrayLength= arrayImage.length

let i= 0
const demoFunction=()=>{
    i++
    // if (i>4){
    // i=0}

    i=i%arrayLength
    // i = 0%5=0, 1%5=1, 2%5=2 , 3=3 ,4=4 ,5=0
    document.querySelector('img').src =`image/${arrayImage[i]}`
}

let set =setInterval(demoFunction , 3000)

document.querySelector('.container .right').addEventListener('click',()=>{
    i++
    // if (i>4){
    // i=0}

    i=i%arrayLength
    // i = 0%5=0, 1%5=1, 2%5=2 , 3=3 ,4=4 ,5=0
    document.querySelector('img').src =`image/${arrayImage[i]}`
})
document.querySelector('.container .left').addEventListener('click',()=>{
    i--
    if (i<0){
    i=arrayLength-1
}

    
    document.querySelector('img').src =`image/${arrayImage[i]}`
})
document.querySelector('.container').addEventListener('mouseover',()=>{
    clearInterval(set)
})
document.querySelector('.container').addEventListener('mouseout',()=>{
    set = setInterval(demoFunction,3000)
})

