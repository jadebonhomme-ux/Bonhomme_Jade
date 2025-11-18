let imgListe;
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
let step =20
let newFeuille;
let size = 20;
let pinceau;
let couleur =1;
let opacité=100;


function preload(){
// for (let i = 1; i <= 19; i++) {
//     imgListe[i-1]=loadImage('css/Images_nuages/nuages (1)' ('+i+').png');  
//     }  


    for (let i = 1; i <= 5; i++) {
    imgMasque[i-1]=loadImage('Masques/masque1 ('+i+').png');  
    }




    imgListe=loadImage('Pinceaux/imageRond (1).png');
    imgTexture=loadImage('Pinceaux/imageRond (1).png');
    imgTex=loadImage('Pinceaux/imageGriboullis (1).png');


}


function setup() {



  angleMode(DEGREES)
  rectMode(CENTER)
  imageMode(CENTER)
  createCanvas(windowWidth,windowHeight);
 


    for (let i = 0; i <imgMasque.length; i++) {
       imgMasque[i].resize(0,height/2)
    }
   
    imgListe.resize(200,0)
    imgTexture.resize(300,0)
    imgTex.resize (100,0)

    newFeuille = createGraphics(width,height)
    newFeuille.background(255);
    newFeuille.blendMode(REMOVE);
    newFeuille.imageMode(CENTER)
    newFeuille.image(imgMasque[5],width/2,height/2)


    x=width/2;
    y=height/2
}


function draw(){


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


  push()
      noTint()
         image(newFeuille,width/2,height/2)//masque forme
         pop()




pop()
     


      if (couleur == 1){
           tint(225,0,0,opacité)
        }if (couleur == 2){
            tint(0,0,255,opacité)
        }if (couleur == 3){
            tint (15,20,79,opacité)
        }if (couleur == 4){
            tint (84,0,198,opacité)

             }if (couleur == 5){
            tint (18,103,46,opacité)
        }



        if (gomme == 1){
           
             circle (mouseX,mouseY,20)




        }else if (gomme==0){




        }

}



function mouseDragged(){//brush qui apparait quand on clique




  // image(imgTexture,mouseX,mouseY)
      image(imgListe,mouseX,mouseY,size,size)
       
     
}




function keyPressed(){
 console.log(key);
if (key == 'ArrowRight'){
  opacity= 10
}




if (key == 'ArrowLeft'){
  opacité-= 10
}




 if (key == 'ArrowUp'){
  size+= 10
}




if(key=='ArrowDown'){
       
 size-=10
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
            couleur = 1
          }




          if (key== '2'){
            couleur = 2
          }




            if (key== '3'){
            couleur = 3
          }




           if (key== '4'){
            couleur = 4
          }




         if (key== '5'){
            couleur = 5
          }




    }