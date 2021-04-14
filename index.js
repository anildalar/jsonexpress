const express = require('express')
const app = express()
 

//Middleware
//We are telling express to read the incomming parmeter as json
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/testjson',(req, res)=>{

    //req.body.paramtername
    console.log(req.body.name);
    console.log(req.body.surname);
    console.log(req.body.mobno);
    //Server -> JSON  -> Client
    res.status(200).send({
                            msg:'ok',
                            fn:req.body.name
                        });
    //req.query.paramtername
});

//global var
 let port = 3000;
app.listen(port,()=>{
   console.log(`Server is running on port ${port} `); 
})