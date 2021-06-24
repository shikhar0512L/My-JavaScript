console.log(`This is tut 44`);

let a = `Shikhar bhai`;
a=undefined;
if(a!=undefined){
    throw new Error(`This is not undefined`);
}else{
    console.log(`This is undefined`);   
};

try {
    // deryregdfgdfhtfbertg
    console.log(`We are inside try block`);
    harry();
} catch (error) {
    console.log(`Are you okay`);
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log(`Finally We will run this`);
}