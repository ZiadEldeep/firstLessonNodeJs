// // // const http = require('http');  // Corrected the import statement
// // // const port=3000

// // // const app = http.createServer((req, res) => {
// // //     let myObj=[
// // //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// // //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// // //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// // //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// // //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// // //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// // //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// // //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// // //     ]
// // //     const {url,method} =req
// // //     if(url=='/'&&method=='GET'){
// // //         res.write(JSON.stringify(myObj))
// // //     }
// // //     else if(url=='/posts'){
// // //         res.write('hello posts api')
// // //     }
// // //     else{
// // //         res.write('<h1 style="color:red">404 NOT FOUND Page</h1>')        
// // //     }
// // //     res.end()
// // // });
// // // app.listen(3000, () => {
// // //     console.log(`Server is running on port ${port}`);
// // // });
// // let myObj=[
// //             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //         ]
// // const express=require('express')
// // const app=express()
// // app.get('/home',(req,res)=>{
// //     res.json(myObj)
// // })
// // app.listen(3000,()=>{
// //     console.log('server is running...');
    
// // })
// let myObj=[
//             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
//             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
//             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
//             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
//             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
//             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
//             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
//             {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
//         ]
//         const express=require('express')
//         const app=express()
//         const mysql=require('mysql2')
//         app.use(express.json())
//         const q=mysql.createConnection({
//             host:'localhost',
//             database:'nodedb',
//             user:'root',
//             password:''
//         })
//         app.post('/addUser',(req,res)=>{
//             const {name,email,password}=req.body
//             q.execute(`insert into users (name,email,password) values ('${name}','${email}','${password}')`)
//             res.json({message:"success"})
//         })
//         app.patch('/updateUser',(req,res)=>{
//             const {name,newname}=req.body
//             q.execute(`update users set name = '${newname}' where name = '${name}'`)
//             res.json({message:"updated"})
//         })
//         app.get('/getUser',(req,res)=>{
//             q.execute(`Select * from users`,(err,result)=>{
//                 res.json({user : result})
//             })
//             })
//         app.get('/getUser/:id',(req,res)=>{
//             q.execute(`Select * from users where id =${req.params.id}`,(err,result)=>{
//                 res.json({user : result})
//             })
//             })
//             app.delete('/delete',(req,res)=>{
//                 q.execute(`delete from users where id='${req.body.id}'`)
//                 res.json({message:'deleted'})
//             })
       
//         // app.get('/home',(req,res)=>{
//         //     res.json(myObj)
//         // })
//         // app.post('/addUser',(req,res)=>{
//         //     console.log(req.body);          
//         //     res.send('addeedddd')
//         // })
//         // app.get('*',(req,res)=>{
//         //     res.send('404 NOT FOUND PAGE')
//         // })
//         app.listen(3000,()=>{
//             console.log('hiii');
            
//         })