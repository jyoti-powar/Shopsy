const express = require('express')
const app = express()
const mongoose = require('mongoose')

const bodyparser = require('body-parser')
const jsonparser = bodyparser.json()


const cors = require('cors')
app.use(cors())

mongoose.connect('mongodb+srv://jyoti:1234@cluster0.abbyjyt.mongodb.net/shopsy?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(
    () => { console.log('Database Connected') }
)
//for mens prd
const pd = require("./model/info.js")
//for womes prd
const wd = require("./model/info1.js")


app.get('/mens',(req, res) => {
   pd.find({}).then((data) => {
        res.json(data);
    })
})

app.post('/saveprd', jsonparser, (req,res) => {

    const pr = new pd({
        _id: new mongoose.Types.ObjectId(),
        cat_id:req.body.cat_id,
        cat_name:req.body.cat_name,
        pr_id:req.body.pr_id,
        pr_name: req.body.pr_name,
        color: req.body.color,
        price: req.body.price,
        
        
    })

    pr.save().then(
        (msg) => { res.json(msg) }
    )
})


// to update mens prd

app.put('/updprd/:id',jsonparser,(req,res)=>{

    pd.updateOne({_id:req.params.id},
        {
            $set:{
                
                cat_id:req.body.cat_id,
                cat_name:req.body.cat_name,
                pr_id:req.body.pr_id,
                pr_name: req.body.pr_name,
                color: req.body.color,
                price: req.body.price,

            }
        }).then(
            (info)=>{
                console.log(info); res.json(info)
            }
        )
})


//to delete mens prd

app.delete('/product/:id',(req,res)=>{
    pd.deleteOne({_id:req.params.id}).then((info)=>{res.json(info)}).catch(
        (err)=>{console.log(err)}
    )
})


// for womens prd

app.get('/womens',(req, res) => {
    wd.find({}).then((data) => {
         res.json(data);
     })
 })
app.get('/products/:cat',(req, res) => {
    wd.find({cat_name:req.params.cat}).then((data) => {
         res.json(data);
     })
 })
 
 app.get('/cat',(req, res) => {
    wd.distinct('cat_name').then((data) => {
         res.json(data);
     })
 })
 app.post('/saveprd1', jsonparser, (req,res) => {
 
     const wr = new wd({
         _id: new mongoose.Types.ObjectId(),
         cat_id:req.body.cat_id,
         cat_name:req.body.cat_name,
         pr_id:req.body.pr_id,
         pr_name: req.body.pr_name,
         color: req.body.color,
         price: req.body.price,
         
         
     })
 
     wr.save().then(
         (msg) => { res.json(msg) }
     )
 })

 // to update womens prd
 app.put('/updprd1/:id',jsonparser,(req,res)=>{

    wd.updateOne({_id:req.params.id},
        {
            $set:{
                
                cat_id:req.body.cat_id,
                cat_name:req.body.cat_name,
                pr_id:req.body.pr_id,
                pr_name: req.body.pr_name,
                color: req.body.color,
                price: req.body.price,

            }
        }).then(
            (info)=>{
                console.log(info); res.json(info)
            }
        )
})


//to delete womens prd

app.delete('/product1/:id',(req,res)=>{
    wd.deleteOne({_id:req.params.id}).then((info)=>{res.json(info)}).catch(
        (err)=>{console.log(err)}
    )
})






app.listen(3400, () => { console.log('server running on 3400') })

