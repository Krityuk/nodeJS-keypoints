// SARA GAME EXPRESS PACKAGE KA HAI

// FIRST OF ALL WE DO IMPORTING OF EXPRESS PACKAGE AND 5 MORE PACKAGES TO BE USED INSIDE EXPRESS
const express = require('express');// imported express here from node_modules folder
const bodyParser = require('body-parser');// imported body-parser here
const helmet = require('helmet');// imported helmet here
const morgan = require('morgan');// imported morgan here
const cors = require('cors');// imported morgan here
const mongoose = require('mongoose');// imported mongoose here from node_modules folder "npm install mongoose" run kiya tha
// package.json is like pubspec.yaml so us file me we can see everything that is imported in this app

//
// ye hmari app hai, express framework provides this datatype; just like firebase ka instance hota tha similarly express ka instance h ye
const app = express();// app is the instance of express module/framework now
// module and framework are similar terms, flutter/react these are also a framework

//One should always add these 5 middle-wares in the express framework
//app ko batao ki use ye sare packages use krne h,
// "use" is a method in Express.js used to mount all middleware functions like- "morgan('dev') function", "helmet() function" etc fn.
app.use(bodyParser.json());//body-parser parses this JSON data into a JavaScript object that can be easily accessed, json format that we sent is not easy to access to there is need of body-parser to convert it into a format that is easily accessible
app.use(bodyParser.urlencoded({ extended: false })); //This line overrides body-parser for urlencoded formats, (to handle URL-encoded data in a specific way).
app.use(helmet());// helmet is for security purpose, to enhance the security of web applications by setting various HTTP headers. These headers provide a layer of defense against common web vulnerabilities.
app.use(morgan('dev'));//for log/debugPrint continuously; 'dev' is a specific format that most of developers use, there are some more formats , but 'dev' fomrat is best for us.// developer friendly format
app.use(cors());//Suppose, if your front-end code (JavaScript running in a browser) needs to make API requests to a server with a different domain than the one hosting the front-end code, you'd need to enable CORS on the server to allow these cross-origin requests. The app.use(cors()); line in your server code achieves this by setting the appropriate headers to permit such requests.
// e.g.. suppose i made a flutter web and its front end is in netlify hosted and my backend/api s is in aws/heroku,GCP hosted, now i need Cors. Because When your Flutter web application tries to make requests to the backend server (which might be on a different domain or port(as hosted-areas are diff)), you might encounter CORS restrictions.To resolve CORS issues in this setup, you need to enable CORS on your backend server. If backend is built using Node.js and Express, one can use middleware like cors to handle CORS.

// NOW BELOW WE WOULD CONNECT MONGODB ATLAS DATABASE TO THIS PROJECT VIA THIS LINK,
// IT IS JUST LIKE FIREBASE PROJECT INTIGRATE KRNE KE LIYE VO 3 FIREBASE CLI COMMANDS RUN KR DETE THE TERMINAL PR
// SIMILARLY WE CONNECT A MONGODB PROJECT VIA THE LINK GIVEN BY THAT MONGODB PROJECT
mongoose.connect("mongodb+srv://sharmakshat19t:akshat%40mp19@clusterx.ahx47es.mongodb.net/?retryWrites=true&w=majority&appName=Clusterx").then(
    () => {
        // AFTER CONNECTING TO MONGOOSE, APP CAN USE THESE ROUTES|  app.use('/api/user',require('./routes/user_routes'));
        // "use" is a method in Express.js used to mount all middleware functions like- "morgan('dev') function", "helmet() function" etc fn.
        const UserRoutes = require('./routes/user_routes');// import other file as UserRoutes
        app.use('/api/user', UserRoutes);// "/api/user" fn got mounted or made
        const CategoryRoutes = require('./routes/category_routes');
        app.use('/api/category', CategoryRoutes);// /api/category fn got mounted
        const ProductRoutes = require('./routes/product_routes');
        app.use('/api/products', ProductRoutes);// /api/category fn got mounted
        const CartRoutes = require('./routes/cart_routes');
        app.use('/api/cart', CartRoutes);// http://localhost:3000/ ke baad isko likhte hai
        const OrderRoutes = require('./routes/order_routes');
        app.use('/api/order', OrderRoutes);// http://localhost:3000/ ke baad isko likhte hai
    });

// app.get("/",function(req,res){    "/" means HomePage ("localhost:5000" is currently our homePage), Homepage pe Hello world naam ka msg here dekhne ko milega
//     res.send("This is Home Page");
// });
// app.get("/notes",function(req,res){    "/" means localhost:5000/notes "Page 1" naam ka msg here dekhne ko milega
//     res.send("This is Notes Page");
// });

// const port = 5000;
const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server started at port = ${port}`));
// app.listen(5000); this line is used to create a server "localhost:5000", you can search this at chrome as well
// ABOVE LINE IS JUST LIKE:-
// function onStart() {
//     console.log(`Server started at port = ${port}`);
// }
// app.listen(port, onStart);
// app.listen(port,func)
//see that it takes two arguments port and func, first argument should be port no, and second argument should be a func- ".then()" func


// COMMON HTTP Status Codes:
// 200 :- OK: Indicates that the request was successful.
// 201 :- Created: Shows that the request has been fulfilled and a new resource has been created.
// 400 :- Bad Request: Indicates that the server cannot process the request due to incorrect syntax or invalid request parameters.
// 401 :- Unauthorized: Denotes that the client needs to authenticate itself before accessing the resource.
// 403 :- Forbidden: Shows that the client does not have permission to access the resource.
// 404 :- Not Found: Indicates that the requested resource could not be found on the server.
// 500 :- Internal Server Error: Denotes that an unexpected condition was encountered on the server, causing it to fail to fulfill the request.

//
// NOTE npm init likha terminal pe to package.json ban jaega
// THEN npm install express run kiya terminal pe to express install ho gya i.e.. "package-lock.json" & node_modules folder ban gya


// WE had downloaded nodeJS 18.3.2 version from chrome, and nodeJs ke sath automatically npm bhi install ho jata h
// SO since we had npm installed, thats why we were able to run this command "npm install express" on our computer

// in flutter we have debugPrint(""); similarly in js we have console.log("Hii");

// node server.js is the command to run this server.js file
// we can also use "npm run dev" instead of it
// node src/server.js


// SO there are basically 3 steps of nodeJS
// 1. initialization of express
// const express = require('express');
// const app = express();

// 2. App Routes defining
// app.get("/"    ,      function(req,res){res.send("THIS IS HOMEPAGE")}     );
// app.get("/notes"    ,      function(req,res){res.send("THIS IS NOTESPAGE")}     );

// 3, STARTNG A SERVER
// app.listen(5000);

// then node server.js command se run kr lena is code ko





// *********************** JS DATA TYPES *****************************

// Number
let num = 10;
console.log(num);  // Output: 10

// String
let str = "Hello, World!";
console.log(str);  // Output: Hello, World!

// Boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue);   // Output: true
console.log(isFalse);  // Output: false

// Undefined
let undefinedVar;
console.log(undefinedVar);  // Output: undefined

// Null
let nullVar = null;
console.log(nullVar);  // Output: null

// Symbol
const sym = Symbol('unique');// object
console.log(sym);  // Output: Symbol(unique)

// BigInt
const bigIntNum = 9007199254740991n;
console.log(bigIntNum);  // Output: 9007199254740991n



// Object
let person = {
    name: 'John',
    age: 30
};
console.log(person);  // Output: { name: 'John', age: 30 }

// Array
let colors = ['red', 'green', 'blue'];
console.log(colors);  // Output: [ 'red', 'green', 'blue' ]

// Function
function greet(name) {
    console.log('Hello, ' + name + '!');
}
greet('Alice');  // Output: Hello, Alice!

// Date
let currentDate = new Date();
console.log(currentDate);  // Output: Current date and time


// Error
let error = new Error('Something went wrong');
console.log(error.message);  // Output: Something went wrong
