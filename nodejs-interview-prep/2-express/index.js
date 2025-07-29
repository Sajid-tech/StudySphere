// express js is web framework for nodejs

// advantage or the key feature of the express js 

// Here are the key features and advantages of Express.js, explained in simple language:

// ✅ 1. Fast and Lightweight
// - Express is built on top of Node.js.
// - It adds very little overhead and is fast to start.
// - You can build APIs or websites quickly.

// ✅ 2. Minimal but Powerful
// - It doesn’t come with too much by default — just what you need.
// - But you can add any extra features using middleware.

// ✅ 3. Easy to Use
// - Simple syntax like:
//
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
//
// - Easy to read, easy to write.

// ✅ 4. Routing Made Easy
// - Express lets you create routes for different URLs like:
//
// app.get('/users', ...)
// app.post('/login', ...)

// ✅ 5. Middleware Support
// - Middleware functions can modify requests, add security, log data, etc.
//
// app.use((req, res, next) => {
//   console.log('Request received');
//   next();
// });

// ✅ 6. Works Well with Templates
// - You can render HTML using template engines like:
//   - EJS
//   - Pug
//   - Handlebars

// ✅ 7. Great for APIs
// - Express is commonly used to build RESTful APIs and backend for web/mobile apps.

// ✅ 8. Huge Community and Ecosystem
// - Tons of ready-made npm packages, tutorials, and help online.
// - Easy to integrate with MongoDB, MySQL, authentication tools, etc.

// ✅ 9. Error Handling Made Simple
//
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).send('Something went wrong');
// });

// ✅ 10. Cross-Platform and Open Source
// - Runs on any system.
// - Fully free and open-source.

// 📌 Summary Table
// | Feature             | Description                            |
// |---------------------|----------------------------------------|
// | Lightweight         | Minimal setup and fast performance     |
// | Easy Routing        | Define endpoints like GET, POST easily |
// | Middleware Support  | Add features like auth/logging easily  |
// | REST API Support    | Perfect for backend APIs               |
// | Template Engine     | Renders HTML with dynamic data         |
// | Large Ecosystem     | Thousands of packages and plugins      |
// | Great Documentation | Easy to learn and use                  |




const express = require('express')

const app = express() 

app.get('/',(req,res)=>{
    res.send("hello world sajid")
})

const port = 3000 

app.listen(port,()=>{
    console.log(`Server is now running at port ${port}`)
})