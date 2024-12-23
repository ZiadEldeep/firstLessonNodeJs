// // const http = require('http');  // Corrected the import statement
// // const port=3000

// // const app = http.createServer((req, res) => {
// //     let myObj=[
// //         {name:'ziad',age:22,email:'ziaeldeep84@gmail.com'},
// //         {name:'ziad',age:21,email:'ziaeldeep84@gmail.com'},
// //         {name:'ziad',age:29,email:'ziaeldeep84@gmail.com'},
// //         {name:'ziad',age:20,email:'ziaeldeep84@gmail.com'},
// //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //         {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
// //     ]
// //     const {url,method} =req
// //     if(url=='/'&&method=='GET'){
// //         res.write(JSON.stringify(myObj))
// //     }
// //     else if(url=='/posts'){
// //         res.write('hello posts api')
// //     }
// //     else{
// //         res.write('<h1 style="color:red">404 NOT FOUND Page</h1>')        
// //     }
// //     res.end()
// // });
// // app.listen(3000, () => {
// //     console.log(`Server is running on port ${port}`);
// // });
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
// const express=require('express')
// const app=express()
// app.get('/home',(req,res)=>{
//     res.json(myObj)
// })
// app.listen(3000,()=>{
//     console.log('server is running...');
    
// })
let myObj=[
            {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
            {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
            {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
            {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
            {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
            {name:'ziad',age:20,email:'ziaeldeep84@gmail.com'},
            {name:'ziad',age:22,email:'ziaeldeep84@gmail.com'},
            {name:'ziad',age:24,email:'ziaeldeep84@gmail.com'},
        ]
        const express=require('express')
        const app=express()
        app.use(express.json())
        app.get('/home',(req,res)=>{
            res.json(myObj)
        })
        app.post('/addUser',(req,res)=>{
            console.log(req.body);          
            res.send('addeedddd')
        })
        app.get('*',(req,res)=>{
            res.send('404 NOT FOUND PAGE')
        })
        app.listen(3000,()=>{
            console.log('hiii');
            
        })
