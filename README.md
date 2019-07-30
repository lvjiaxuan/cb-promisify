# cb-promisify

将回调函数转换为promise的形式

## 示例

```javascript
const readdir = promisify(fs.readdir);

fsReaddirPro(workplace + 'images/')
  .then(res => console.log(res))
  .catch(err => console.log(err))
```