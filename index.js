const express = require('express')
const app = express()
const PORT = 4141 || process.env.PORT
app.use(express.json())
app.get("/", (req,res) =>{
    res.send("heyyy");
})

app.post("/order", async (req,res)=>{
    const amount = req.body.amount

    var instance = new Razorpay({ 
        key_id: 'rzp_test_onvzvBLXrK44wR',
        key_secret: 'J1z8AheDSLH1QBwUGZlq1ymf',
     })

var options ={
  amount: amount *100,
  currency: "INR",
  receipt: "order_rcptid_11",
   
  };

  // instance.orders.create(options, function (err, order){
  //   console.log(order);
  // });
  
  const myOrder = await instance.orders.create(options)


  res.status(200).json({
    success: true,
    amount,
    order: myOrder
  })
});



app.listen(4141, () => {
    console.log('server is running at 4141')
});