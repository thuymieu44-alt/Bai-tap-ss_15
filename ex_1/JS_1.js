let aArray=[];
let bArray=[];
    aArray = prompt(" Mời nhập vào 10 chứ số của mảng a:").split(" ").map(Number);
    bArray = prompt(" Mời nhập vào 10 chứ số của mảng b:").split(" ").map(Number);
   if (aArray.length !== 9 || bArray.length !== 9){
    console.log("Số lượng chữ số nhập vào chưa đủ. Mời nhập lại!");
    }
    else 
        {let cArray = aArray.concat(bArray);
    console.log(`Mảng c sau khi nối 2 mảng a và b là: ${cArray}`);
   }    