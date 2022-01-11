const express = require('express')
const app = express()
const port = 3000 

app.get('/tin', (req, res) => { // nếu nhận được path từ user là /main-home thì nó sẽ res lại 'hello world'
  let a = 3;
  let b = 4;
  let c = a+b;
  debugger;
  res.send('Hello Luu Nguyen!')
})  

app.listen(port, () => { // tạo port 3000 
  console.log(`Example app listening at http://localhost:${port}`) // nếu tạo xong
})