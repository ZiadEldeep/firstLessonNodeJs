const http = require('http');  // Corrected the import statement
const port=3000

const app = http.createServer((req, res) => {
    let myObj=[
        {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
        {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
        {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
        {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
        {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
        {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
        {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
        {name:'ziad',age:23,email:'ziaeldeep84@gmail.com'},
    ]
    const {url,method} =req
    if(url=='/'&&method=='GET'){
        res.write('hello in home api')
    }
    else if(url=='/posts'){
        res.write('hello posts api')
    }
    else{
        res.write('<h1 style="color:red">404 NOT FOUND Page</h1>')        
    }
    res.end()
});
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});
