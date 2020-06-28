const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
//定义启动的端口号
app.listen(8082);
//vue目录
// app.use(express.static(path.resolve(__dirname, './dist')))

app.get('/profile',(req,res)=>{
  res.set('Access-Control-Allow-Origin',"*")
  res.json({
    name:'张三',
    age:'18'
  })
})

app.get('*', function(req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
  res.send(html)
})

