const express = require("express");
const db = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const models = require("./models/models");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


db.connect("mongodb://localhost/tp",{useNewUrlParser:true});
    db.connection.once("open",()=>{console.log("Connected")
    }).on("error",(err)=>{console.log(err);
    });


app.get("/",(req,res)=>{
       res.send("ok");
});

app.get("/readers",(req,res)=>{
    models.Reader.find((err,doc)=>{
        if(err)
        {
            res.json({msg:"faild to fetch readers"});
        }else{
            res.json(doc);
        }
    });
})

app.get("/reader/:id",(req,res)=>{
    models.Reader.findById({_id: req.params.id}).exec((err,doc)=>{
        if(err)
        {
            res.json({msg:"faild to fetch Reader"});
        }else{
            res.json(doc);
        }
    })
})

app.get("/books",(req,res)=>{
    models.Book.find((err,doc)=>{
        if(err)
        {
            res.json({msg:"faild to fetch Books"});
        }else{
            res.json(doc);
        }
    });
})


app.get("/book/:id",(req,res)=>{
    models.Book.findById({_id: req.params.id}).exec((err,doc)=>{
        if(err)
        {
            res.json({msg:"faild to fetch Books"});
        }else{
            res.json(doc);
        }
    })
})

app.post("/registerReader",(req,res)=>{
    const rd = new models.Reader({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password
    });
    rd.save((err,doc)=>{
        if(err)
        {
            if(err === 'ValidationError')
            res.json({msg:err.name})
        }else{
            res.json({msg:"Registered Successfully",data:doc})
        }
    })
})

app.post("/addBook",(req,res)=>{
    const bk = new models.Book({
        name:req.body.name,
        author:req.body.author,
        category:req.body.category,
        copies:req.body.copies,
        availableCopies:req.body.availableCopies
   });
   console.log(req.body);
   
   bk.save((err,doc)=>{
       if(err)
       {
            res.json({msg:"faild to add book"})
        }else{
            res.json({msg:"Book Added Successfully"})
        }
   });
})

app.post("/issueBook",(req,res)=>{
    const iB = new models.IssuedBook({
        bookId : req.body.bookId,
        phone : req.body.phone
    });

    iB.save((err,doc)=>{
        if(err)
        {
             res.json({msg:"faild to add book"})
         }else{
             res.json({msg:"Book Issued Successfully"})
         }
    });
})

app.post("/returnBook",(req,res)=>{

})

app.post("/login",(req,res)=>{
    const data = {phone:req.body.phone};
    models.Reader.find(data,(err,doc)=>{
        if(err)
        {
            res.json({msg:err});
        }
        else if(doc.length){
            res.json(doc);
        }
        else{
            
            res.json({msg:"No User Available Please Register First"});
        }
    })
})


app.listen("8080",(res)=>{
    console.log("Server is live");
})