const express = require('express')
const mongoose = require('mongoose');
const app = express()
const Product  = reqiure('./models/productModel')



app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))


//routes
app.get('/', (req, res)=>{
    res.send("Hello Node API");
})


app.get('/blog',(req,res)=>{
    res.send("hello blog, my name is kinjal");
})


// upload data to the database
app.post('/products', async(req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


// fetch data from database
app.get('/products',async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch(error) {
       
        res.status(500).json({message: error.message})

    }
})

//fetch data by id from database
app.get('/products/:id', async(req, res) => {
    try{
        const {id} = req.params;

        const products = await Product.find({});
        res.status(200).json(products)
    }
    catch(error){

        res.status(500).json({message: error.message})

    }
})


//update or edit data in database
app.put('/products/:id', async(req, res) =>{
    try{
        const {id} = req.params;

        const products = await Product.findByIdAndUpdate(id, req.body);
       // we cannot find any product in database
        if(!product){
            return res. status(404).json({message: 'connot find user'})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct);

    }catch{
        res.status(500).json({message: error.message})

    }
})


//remove data from database
app.delete('/products/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res. status(404).json({message: 'connot find user'})

        }
        res.status(200).json(product);
    }
    catch{
        res.status(500).json({message: error.message})

    }
})






mongoose.set("strictQuery", false)


//connected with mongoDB
mongoose.connect('mongodb+srv://bhardavakinjal:kinjal@123@blogapi.ftpdumo.mongodb.net/Node-API')
.then(() => {
    connsole.log('connected to mongoDB');
    app.listen(3000, ()=> {
        console.log("node API app is runnig on port 3000");
    })
}).catch((error)=>{
    console.log(error);
})