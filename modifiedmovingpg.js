var cate=[["https://cdn.pixabay.com/photo/2021/05/27/20/53/field-6289253_960_720.jpg",
"https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg",
"https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_960_720.jpg",
"https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg",
"https://media.istockphoto.com/photos/inspiration-quote-message-sign-saying-you-are-who-you-decide-to-life-picture-id1225291460?s=612x612",
"https://cdn.pixabay.com/photo/2018/05/15/18/54/mug-3403963_960_720.jpg",
"https://cdn.pixabay.com/photo/2017/08/22/07/21/mug-2667959_960_720.jpg",
"https://cdn.pixabay.com/photo/2020/07/09/13/30/quotes-5387335_960_720.jpg",
"https://cdn.pixabay.com/photo/2016/01/12/22/37/accomplish-1136863_960_720.jpg",
"https://cdn.pixabay.com/photo/2016/06/11/20/41/graffiti-1450798_960_720.jpg",
"https://cdn.pixabay.com/photo/2019/01/02/11/24/idea-3908619__340.jpg"],
["https://images.pexels.com/photos/3806690/pexels-photo-3806690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1580625/pexels-photo-1580625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/669988/pexels-photo-669988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/760721/pexels-photo-760721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]
,["https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
"https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]
,["https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/624929/pexels-photo-624929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]]


// current category
currentCat=0;

// current category img 
currentCatImg=0;

// displaying No of category in circle form on the bottom side 
const circles =document.getElementById("circles").children[0];

for(let i=0;i<4;i++){
    let li=document.createElement('li');
    circles.append(li)
 
}
const imgholder=document.getElementById("imgholder");
imgholder.children[0].src=cate[currentCat][currentCatImg]

// darkening the current category circle 

circles.children[0].style.listStyle="disc"

// displaying circles of current category images
leftCircles=document.getElementById("moveleft").children[0]

for (let i=0;i<cate[currentCat].length;i++){
    let li=document.createElement("li");
    leftCircles.append(li)
}

// darkening the current category circle image 


leftCircles.children[0].style.listStyle="disc"


// writing logic for changing image and changing circle accordingly

const layer3=document.getElementById("imgholder");

// this for changing category (X)
var checkdiffX=[];
var diffX=0;

// this is for changing  that specific category images (Y)
var checkdiffY=[];
var diffY=0;


layer3.addEventListener("touchmove",(e)=>{
    checkdiffX.push(e.touches[0].screenX);
    checkdiffY.push(e.touches[0].screenY);
})

layer3.addEventListener("touchend",(e)=>{

    diffX=checkdiffX[checkdiffX.length-1]-checkdiffX[0];

    diffY=checkdiffY[0]-checkdiffY[checkdiffY.length-1];
    console.log(diffY,"diffY")
    console.log(diffX,"diffX")
// for both X Y positive
    if (diffX>=0 && diffY>=0  ){
        // this is for next category
        if (diffX>diffY && diffX>20){
            if (currentCat>0){
                console.log(currentCat,"<0")
                currentCatImg=0
                circles.children[currentCat].style.listStyle="circle"
                currentCat-=1
                imgholder.children[0].src=cate[currentCat][currentCatImg]
                circles.children[currentCat].style.listStyle="disc"
                console.log(document.getElementById("moveleft").children[0].innerHTML="","before")
                console.log(document.getElementById("moveleft"),"after")
                
                for (let i=0;i<cate[currentCat].length;i++){
                    let li=document.createElement("li");
                    leftCircles.append(li)
                }
                leftCircles.children[0].style.listStyle="disc"
                // leftCircles.children[0].style.listStyle="disc"
    
            }
            else{
                currentCat=0
            }
            
            

        }
        // this is for same category next img
        else if((diffY>diffX && diffY>30) ){
            console.log("this is for same category next img,++")
            if (currentCatImg<leftCircles.children.length-1){
                console.log("hiii elseee")
    
                leftCircles.children[currentCatImg].style.listStyle="circle";
                currentCatImg+=1
                imgholder.children[0].src=cate[currentCat][currentCatImg]
                leftCircles.children[currentCatImg].style.listStyle="disc"
            }
            else{
                currentCatImg=leftCircles.children.length-1;
            }
        }
        
    }
// for both X Y negative

if (diffX<=0 && diffY<=0 ){
    // this is for next category
    if (diffX<diffY && diffX<-20){
        console.log("hiii ifff")
        if (currentCat<3){
            currentCatImg=0
            circles.children[currentCat].style.listStyle="circle"
            currentCat+=1
            imgholder.children[0].src=cate[currentCat][currentCatImg]
            circles.children[currentCat].style.listStyle="disc"
            console.log(document.getElementById("moveleft").children[0].innerHTML="","before")
            console.log(document.getElementById("moveleft"),"after")
            
            for (let i=0;i<cate[currentCat].length;i++){
                let li=document.createElement("li");
                leftCircles.append(li)
            }
            leftCircles.children[0].style.listStyle="disc"
            // leftCircles.children[0].style.listStyle="disc"

        }
        else{
            currentCat=3
        }
        

    }
    // this is for same category next img
    else if(diffX>diffY && diffY<-25  ){

        if (currentCatImg>0){
            console.log("this is for same category next img,++ currentimg before",currentCatImg)
            leftCircles.children[currentCatImg].style.listStyle="circle";
            currentCatImg-=1
            console.log("this is for same category next img,++ currentimg after",currentCatImg)
            imgholder.children[0].src=cate[currentCat][currentCatImg]
            console.log(imgholder.children[0].src=cate[currentCat][currentCatImg])
            leftCircles.children[currentCatImg].style.listStyle="disc"
        }
        else{
            currentCatImg=0;
        }
    }
    
}

// 43 "diffX"
// -28 "diffY"
if (diffX>=0 && diffY<=0){
    diffY*=-1;
    if (diffX>diffY && diffX>20){
        if (diffX>diffY &&diffX>=0){
            if (currentCat>0){
                console.log(currentCat,"<0")
                currentCatImg=0
                circles.children[currentCat].style.listStyle="circle"
                currentCat-=1
                imgholder.children[0].src=cate[currentCat][currentCatImg]
                circles.children[currentCat].style.listStyle="disc"
                console.log(document.getElementById("moveleft").children[0].innerHTML="","before")
                console.log(document.getElementById("moveleft"),"after")
                
                for (let i=0;i<cate[currentCat].length;i++){
                    let li=document.createElement("li");
                    leftCircles.append(li)
                }
                leftCircles.children[0].style.listStyle="disc"
                // leftCircles.children[0].style.listStyle="disc"
    
            }
            else{
                currentCat=0
            }
        }
        

    }
    else if((diffY>diffX && diffY>30) ){
        console.log("this is for same category next img")
        if (currentCatImg<leftCircles.children.length-1){
            console.log("hiii elseee")

            leftCircles.children[currentCatImg].style.listStyle="circle";
            currentCatImg+=1
            imgholder.children[0].src=cate[currentCat][currentCatImg]
            leftCircles.children[currentCatImg].style.listStyle="disc"
        }
        else{
            currentCatImg=leftCircles.children.length-1;
        }
    }

}

// 43 "diffY"
// -28 "diffX"

if (diffX<=0 && diffY>=0){
    diffY*=-1;
    if (diffX<diffY && diffX<-20){
        console.log("hiii ifff")
        if (currentCat<3){
            currentCatImg=0
            circles.children[currentCat].style.listStyle="circle"
            currentCat+=1
            imgholder.children[0].src=cate[currentCat][currentCatImg]
            circles.children[currentCat].style.listStyle="disc"
            console.log(document.getElementById("moveleft").children[0].innerHTML="","before")
            console.log(document.getElementById("moveleft"),"after")
            
            for (let i=0;i<cate[currentCat].length;i++){
                let li=document.createElement("li");
                leftCircles.append(li)
            }
            leftCircles.children[0].style.listStyle="disc"
            // leftCircles.children[0].style.listStyle="disc"

        }
        else{
            currentCat=3
        }
        

    }
    // this is for same category next img
    else if(diffX>diffY && diffY<-25  ){
        if (currentCatImg>0){
            console.log("this is for same category next img,++ currentimg before",currentCatImg)
            leftCircles.children[currentCatImg].style.listStyle="circle";
            currentCatImg-=1
            console.log("this is for same category next img,++ currentimg after",currentCatImg)
            imgholder.children[0].src=cate[currentCat][currentCatImg]
            console.log(imgholder.children[0].src=cate[currentCat][currentCatImg])
            leftCircles.children[currentCatImg].style.listStyle="disc"
        }
        else{
            currentCatImg=0;
        }
    }
}







    diffX=0
    diffY=0
    checkdiffX=[]
    checkdiffY=[]

        

    

})
