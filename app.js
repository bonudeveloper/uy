// let fname = prompt("ismingizni kiriting")
// let year = prompt("yilingiz")
// let month = prompt("oy kiring tug'ilgan")
// let day =prompt("kun");
 
// let now = Date.now();
// let bday = new Date(year, month - 2, day).getTime();
// let oraliqKunlar = (now - bday) / 1000 / 60 / 60 / 24;
// let yil = parseInt(oraliqKunlar / 365.25); // wu vohtgacon nechi yil yawagani chqadi
// let oy = parseInt((oraliqKunlar % 365.25)/(365.25/12)); //yilni 12oyga bolganimiz bzaga aniq har oy uchun tasimlab beradi
// let kun = parseInt((oraliqKunlar % 365.25) % (365.25/12));
// alert(fname + " siz "+ yil + " yil "+ oy + " oy "+ kun + " kun "+' yashagansiz ');


// let fname = prompt("ismingizni kiriting")
// let year = prompt("yilingiz")
// let month = prompt("oy kiring tug'ilgan")
// let day =prompt("kun");

// let now = Date.now();
// let bday = new Date(year, month - 1, day).getTime();
// let hozirgiKun = (now - bday) / 1000 / 60 / 60 / 24;
// let yil = parseInt(hozirgiKun / 365.25);
// let oy = parseInt((hozirgiKun % 365.25) / (365.25 / 12));
// let kun = parseInt((hozirgiKun % 365.25) % (365.25 / 12));
// alert(
//   fname +
//     " siz " +
//     yil +
//     " yil " +
//     oy +
//     " oy " +
//     kun +
//     " kun " +
//     " yashagansiz "
// );

// switch cars 
// let cars = ["audi", "bmw", "bwd"];
// let user = prompt("marka kirit");
// let userKichkina = user.toLowerCase();

// if (cars.includes(userKichkina)){
//     alert("bu marka bor");
// }else {
//     cars.push(userKichkina);
//     alert(cars + " qo'shildi");
// }

// desimal vazifa
// let random = Math.random();
// let base16 = random.toString(16); //base 16lik sanoq sistemaga o'tish
// let desimal = base16.slice(2,8); // 1,(2,3,4,5,6,7,8)-kesadi
// console.log("#"+ desimal);

// loop vazifa

//1
// let user = prompt("so'z kiriting");
// str="";
// for (i=user.length-1; i>=0; i--){
//     str+=user[i];
//     
// }
// alert(str);

//2
// let num = prompt("son kiriting");
// str="";
// for(i=num.length-1; i>=0; i--){
//     str+=num[i];
    
// }
// alert(str);

//3
// let son = prompt("son kirit");
// for(i=0; i<=son; i++){
//     if(i % 2==0){
//         console.log(i + " juft");
//     }else {
//         console.log(i+ " toq")
//     }
// }

//4 tub-1va oziga bolinadigan son 2-ta bolinuvchisi bor
// let son = prompt("son kirit");
// count=0
// for( i=1; i<=son; i++){
//     count=0;
//     for ( a=1; a<=i; a++){
//         if (i % a==0) {
//             count++;
//         }
//     }
//     if (count<=2){
//         console.log(i + " tub son")
//     }else {
//         console.log(i + " murakab son")
//     }
// }

//5 mukammal son bolinuvchilari yigindisi o'ziga teng
// let son = prompt("son kirit");
// let yigindisi = 0;
// for(i=1; i<=son; i++){
//     yigindisi=0;
//     for (a=1; a<i; a++){
//         if(i % a==0){
//             yigindisi+=a;
//         }
//     }
//     if (yigindisi==i){
//         console.log(i + " mukammal son")
//     }else {
//         console.log(i + " emas")
//     }
// }

//6 berilgan son indexlari yig'indisi
// let son = prompt("son kirit");
// let yigindisi = 0;
// let t =true;

// while(t) {
//     son= String(son);
//     if(son.length===1){
//         t=false;
//     }else {
//         yigindisi=0

//         for(i=0; i<son.length; i++){
//             yigindisi+= +son[i];
            
//         }
//         son = yigindisi;
//     }
// }
// alert(yigindisi);

// 6 berilgan son indexlari yig'indisi

let user = prompt('son kiriting');
let sum = 0;
 while (user.length>1) {
    sum=0;
    for (let i=0; i<user.length; i++) {
        sum = sum + +user[i];
    }
    user = sum + "";
 }
 console.log(sum);

//7 matn ichidagi harf soni
// let matn = prompt("matn kiriting");
// let harf = prompt("harf kiriting");
// count=0;
// for(i=0; i<=matn.length; i++){
//     if(harf==matn[i]){
//         count++;
        
//     }
// }
// if (count!==0) {
//     alert( harf + " " + count + " takrorlangan");
// } else {
//     alert("bunday harf matnda yo'q")
// }

// teskari qilsa bo'ladimi yo'qmi
// let soz = prompt("so'z kirit");
// str="";
// for (i=soz.length-1; i>=0; i--){
//     str+=soz[i];
// }
// if(str==soz){
//     alert(true);
// }else {
//     alert(false);
// }




