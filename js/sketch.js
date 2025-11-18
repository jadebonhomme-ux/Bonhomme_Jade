let imgList = [];
let imgTexture;
let imgTex;
let compteur = 0;
let gomme =0;
let imgMasque = [];
let x;
let y;
let x1;
let y1;
let seed;
let step =50;
let newFeuille;
let size = 80;
let pinceau;
let couleur =1;
let opacité = 50;
let groupe = [];
let Changerpinceaux = 1;
let imgAffichée = []



function preload(){

// for (let i = 1; i <= 19; i++) {
//     imgList[i-1]=loadImage('css/Images_nuages/nuages (1)' ('+i+').png');  
//     }  



    for (let i = 1; i <= 19; i++) {
    imgMasque[i-1]=loadImage('Masques/masque'+i+'.png');  
    }




    imgList=loadImage('Pinceaux/imageCailloux (1).png');
    imgTexture=loadImage('Pinceaux/imageFleur (1).png');
    imgTex=loadImage('Pinceaux/imageGriboullis (1).png');


groupe [0]=loadImage('Pinceaux/imageBatons (2).png');  
groupe [1]=loadImage('Pinceaux/imageCailloux (1).png');  
groupe [2]=loadImage('Pinceaux/imageCellule (1).png');  
groupe [3]=loadImage('Pinceaux/imageCheveux (1).png');  
groupe [4]=loadImage('Pinceaux/imageFleur (1).png');  
groupe [5]=loadImage('Pinceaux/imageGoutte (1).png');  
groupe [6]=loadImage('Pinceaux/imageGriboullis (1).png');  
groupe [7]=loadImage('Pinceaux/imageRond (1).png');  
groupe [8]=loadImage('Pinceaux/imageTourbillon (1).png');  
groupe [9]=loadImage('Pinceaux/imageTraits (1).png');  
groupe [10]=loadImage('Pinceaux/imageTrouNoir (1).png');  





 }





function setup() {

 createCanvas(windowWidth,windowHeight);
 background(255)
 imageMode(CENTER)
 rectMode(CENTER)

    for (let i = 0; i <imgMasque.length; i++) {
       imgMasque[i].resize(height,height)
    }
   
    imgList.resize(900,0)
    imgTexture.resize(900,0)
    imgTex.resize (900,0)


    newFeuille = createGraphics(width,height)
    newFeuille.background(255);
    newFeuille.blendMode(REMOVE);
    newFeuille.imageMode(CENTER)
    newFeuille.image(random(imgMasque),width/2,height/2)


  x =width/2;
  y =height/2;

}


function draw (){


  //push()
      noTint()
         image(newFeuille,width/2,height/2)//masque forme
         //pop()

        if (couleur == 1){
           tint(255,192,203,opacité)
        }if (couleur == 2){
            tint(0,0,255,opacité)
        }if (couleur == 3){
            tint (15,20,79,opacité)
        }if (couleur == 4){
            tint (84,0,198,opacité)


             }if (couleur == 5){
            tint (18,103,46,opacité)
        }


image(groupe[Changerpinceaux],mouseX,mouseY,size,size)




a = (noise(54+frameCount*0.75)*windowWidth)
b = (noise(80+frameCount*0.555)*windowHeight)





image(groupe[Changerpinceaux],a,b,size,size)




        if (gomme == 1){
           
             circle (mouseX,mouseY,20)


        }else if (gomme==0){


        }



// let couleurActuelle;
//if (paletteCourante === "froid") {
  //} else {
   // couleurActuelle = random(couleursChaudes);
  // }

 // let opacité = map(mouseY, 0, height, 255, 50);


  // if(gomme === 0) {
    // tint(red(couleurActuelle), green(couleurActuelle), blue(couleurActuelle), opacité -= 50);
    // } else {
     // noTint (); // Pas de couleur pour la gomme


      // Mouvement automatique du pinceau
      // let x1 = noise(800 + frameCount * 0.01) * width;
      // let y1 = noise(frameCount * 0.01) * height;
      // let x2 = noise(500 + frameCount * 0.05) * width;
      // let y2 = noise(frameCount * 0.05) * height;


     // if (gomme === 1){
      // blendMode(REMOVE); // active la gomme
      // image(pinceau, x1, y1, size, size);
      // image(pinceau, x2, y2, size, size);
      // blendMode(BLEND); // repasse au mode normal
     // } else {
        // push();
        // tint(0.100);
        // image(pinceau, x1 + 5, y1 +5, size, size)
        // image (pinceau, x2 +5, y2 +5, size, size)
       // pop();


        // push()
        // tint(red(couleurActuelle), green(couleurActuelle), blue(couleurActuelle), opacité-=50)
        // image(pinceau, x1, y1, size, size);
       // image(pinceau, x2, y2, size, size);
        // pop();



// push()
// translate(x,y)
// rotate(frameCount)
//  image(imgListe,0,0)




// translate(x1,y1)
// rotate(frameCount)
//   image(imgTex,0,0)
// pop()




//       x =noise(200+frameCount*0.005)*width
//       y =noise(frameCount*0.001)*height




//       x1 =noise(500+frameCount*0.005)*width
//       y1 =noise(600+frameCount*0.001)*height




//     image (imgTex,x1,y1)




 }


  


function mouseDragged(){//brush qui apparait quand on clique

  //image(imgTexture,mouseX,mouseY)
  //image(imgList,mouseX,mouseY,size,size)
       
     
}




function keyPressed(){

 console.log(key);
if (key == 'ArrowRight'){
  opacité= 10
}






if (key == 'ArrowLeft'){
  opacité-= 10
}








 if (key == 'ArrowUp'){
  size+= 10
}






if(key=='ArrowDown'){
       
 size-= 10
}




          if (key == '0') {
            if(gomme == 1){
                gomme =0
                blendMode(BLEND)
        }else{
                gomme = 1
                blendMode(REMOVE)
        }
       
          }


          if(key == '1'){
            Changerpinceaux = 1
          }
          if (key == '2'){
            Changerpinceaux = 2
          }
            if (key  == '3'){ 
            Changerpinceaux = 3
          }
           if (key == '4'){
           Changerpinceaux = 4
          }
         if (key == '5'){
           Changerpinceaux = 5
          }
          if (key == '6'){
           Changerpinceaux = 6
          }
           if (key == '7'){
           Changerpinceaux = 7
          }
           if (key == '8'){
           Changerpinceaux = 8
          }
           if (key == '9'){
           Changerpinceaux = 9
          }
           if (key == '10'){
           Changerpinceaux = 10
          }






  //if(keyCode == RIGHT_ARROW){
           // imageAffichée++;
            //if (imageAffichée > 10){
           // imageAffichée = 1;}
           // background(255)
   // }

  //  if(keyCode == LEFT_ARROW){
           // imageAffichée--;
           // if (imageAffichée < 1){
          //  imageAffichée = 10;
       // }
        // background(255)
// }
    
}