// import{v4 as uuidv4 } from 'uuid';
// let user1 ={
//     name:"nrupul",
//     id:uuidv4()
// }
// let user2 ={
//     name:"nihal",
//     id:uuidv4()
// }
// console.log(user1,user2)

function updatefun()
{
    let id=document.querySelector("input").value
    // console.log(id)
    let data={
      
        "name":"nihal"
    }
    data=JSON.stringify(data)
    fetch(`http://localhost:3000/users/${id}`,{
        method:"PATCH",
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

}
function updadeletefun()
{
    let id=document.querySelector("input").value
    console.log(id)
}