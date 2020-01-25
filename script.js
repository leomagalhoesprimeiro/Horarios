var date = new Date;
var horas = date.getHours();

var img = document.createElement("img");
var foto = document.getElementById("foto").appendChild(img);
var msg = document.getElementById("msg");

if(horas>=6 && horas<=11){
   img.src = "./fotos/amanhecer.jpg";
   msg.innerHTML = "Bom Dia !";


}
else if(horas>=12 && horas<=18){
    img.src = "./fotos/Tarde.jpg";
    msg.innerHTML = "Bom Tarde !";
    document.body.style.background = 'orange';

}else{
    img.src = "./fotos/Noite.jpg";
    msg.innerHTML = "Bom Noite !";
    document.body.style.background = 'brown';


}