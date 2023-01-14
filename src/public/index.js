

 

const socketCliente = io();
let user ;
Swal.fire({
    title: "hola usuario",
    text : "bienvenido, ingrese su usuario",
    input: "text",
    allowOutsideClick : false
}).then( res=> user= res.value);

socketCliente.on("menssageFromServer",(data)=>{
    
});
const MenCon = document.getElementById("MensaggesContainer")
const campo = document.getElementById("menssageField");

campo.addEventListener("keydown",(evt)=>{
    //console.log(evt.key)
    if(evt.key === "Enter"){
    socketCliente.emit("message",{menssage : campo.value, username : user})
        campo.value = "";
}
})
socketCliente.on("menssages",(data)=>{
let elementos = "";
console.log(data)
data.forEach(i => {
    elementos += `<p><strong>${i.username}</strong>:${i.menssage}</p>`

    
});
MenCon.innerHTML = elementos
})  
socketCliente.on("newUser",(data)=>{
    Swal.fire({
        text : "nuevo usuario conectado",
        toast : true 

    })
})