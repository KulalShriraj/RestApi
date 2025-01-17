import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router=express.Router();
let users=[
    
]

router.get('/',(req,res)=>{
   
    res.send(users);
});

router.post('/',(req,res)=>{
    console.log("post route reached");
    const user=req.body;
    users.push({...user,id:uuidv4()});
    res.send(`user with name ${user.firstName} added to the database`);
});

router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const foundUser=users.find((user)=>user.id==id);
    res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    users=users.filter((user) => user.id!==id);
    res.send(`user with the id ${id} deleted from database`);


});


router.patch('/:id',(req,res)=>{
 const {id}=req.params;
 const {firstName,lastName,age}=req.body;
 if(firstName){
    users.firstName=firstName;

 }
 if(lastName){
    
    users.lastName=lastName;
 }
 if(age){
    users.age=age;
 }
 res.send(`user  with id ${id} has been updated`)
 

});

export default router;