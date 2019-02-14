# Promisify

将回调函数转换为promise的形式

## 示例

```javascript
const fsReaddirPro = promisify(fs.readdir);

fsReaddirPro(workplace + 'images/')
.then(rs => {
  const [err, files] = rs;
  console.log(rs);
})
```