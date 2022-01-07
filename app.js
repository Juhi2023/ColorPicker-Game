let num=3;
let colors=getRandomColors(num);
let pickedColor=pickColor();
let colorValue=document.getElementById('colorValue');
colorValue.textContent=pickedColor.toUpperCase();
let head=document.getElementById('head');
let easy= document.querySelector('#easy');
let medium= document.querySelector('#medium');
let hard= document.querySelector('#hard');
let newGame=document.querySelector('#newGame');
let block=document.getElementsByClassName('block');
let message=document.getElementById('message');
message.textContent="";

function getRandomColors(num)
{
    let arr=[];
    for(let i=0; i<num; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

function pickColor()
{
    let ran = Math.floor(Math.random() * colors.length);
	return colors[ran];
}

easy.addEventListener('click',()=>{
    easy.classList.add('selected');
    medium.classList.remove('selected');
    hard.classList.remove('selected');
    newGame.classList.remove('selected');
    num=3;
    colors=getRandomColors(num);
    pickedColor=pickColor();
    colorValue.textContent=pickedColor.toUpperCase();
    message.textContent="";
    for (let i = 0; i < block.length; i++) {
        if(colors[i])
        {
			block[i].style.background = colors[i];
		}else{
			block[i].style.display = "none";
		}
    }
    head.style.backgroundColor="rgb(4, 36, 78)";
});

medium.addEventListener('click',()=>{
    medium.classList.add('selected');
    easy.classList.remove('selected');
    hard.classList.remove('selected');
    newGame.classList.remove('selected');
    num=6;
    colors=getRandomColors(num);
    pickedColor=pickColor();
    colorValue.textContent=pickedColor.toUpperCase();
    message.textContent="";
    for (let i = 0; i < block.length; i++) {
        if(colors[i])
        {
			block[i].style.background = colors[i];
            block[i].style.display = "inline-block";
        }
        else{
            block[i].style.display = "none";
        }
    }
    head.style.backgroundColor="rgb(4, 36, 78)"; 
});

hard.addEventListener('click',()=>{
    hard.classList.add('selected');
    easy.classList.remove('selected');
    medium.classList.remove('selected');
    newGame.classList.remove('selected');
    num=9;
    colors=getRandomColors(num);
    pickedColor=pickColor();
    colorValue.textContent=pickedColor.toUpperCase();
    message.textContent="";
    for (let i = 0; i < block.length; i++) {
        if(colors[i])
        {
			block[i].style.background = colors[i];
            block[i].style.display = "inline-block";
        }
    }
    head.style.backgroundColor="rgb(4, 36, 78)"; 
});

newGame.addEventListener('click', ()=>
{
    colors=getRandomColors(num);
    pickedColor=pickColor();
    message.textContent="";
    for (let i = 0; i < block.length; i++) {
        if(colors[i])
        {
			block[i].style.background = colors[i];
            block[i].style.display = "inline-block";
        }
    }
    head.style.backgroundColor="rgb(4, 36, 78)";
});


for (let i = 0; i < block.length; i++) {
    if(colors[i])
    {
        block[i].style.background = colors[i];
    }
    else{
        block[i].style.display = "none";
    }
}

for (let i = 0; i < block.length; i++) {
    block[i].addEventListener('click', ()=>
    {
        let clickedColor=block[i].style.backgroundColor;
        if(clickedColor == pickedColor)
        {
            changeColor(clickedColor);
            message.textContent="Correct";
            console.log(clickedColor);
            head.style.backgroundColor=clickedColor;
            newGame.textContent="PLAY AGAIN";
        }
        else
        {
            block[i].style.backgroundColor="rgb(53, 53, 53)";
            message.textContent="Try Again!";
        }
    });
}

function changeColor(color){
    for (var i = 0; i <block.length; i++){
        block[i].style.background = color;
    }
};