// const express=require('express');
// const mongoose=require('mongoose');
// const userRoutes=require('./routes/userRoutes');
// const bodyparser=require('body-parser');
// const cors=require('cors');
// const path=require('path');
// const app=express();

// app.use(cors());
// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());
// app.use('/uploads',express.static(path.join(__dirname,'uploads')));
// app.use(express.static('public'));
// app.set('view engine','ejs');

// mongoose.connect('mongodb://localhost:27017/contect');
// app.set('/',userRoutes);

// app.listen(5000,()=>{
//     console.log('server is Start: http://localhost:5000');
// });


const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static('public'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/fullstack_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/', userRoutes);

app.listen(5000, () => console.log('Server started on http://localhost:5000'));
