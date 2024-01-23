Integrations
--

## UI程序
在Tables页面添加一个表格Books

| Name   | Author   | Published At | Price   | Stock   |
|--------|----------|--------------|---------|---------|
| Book A | Author A | date A       | price A | stock A |
| Book B | Author B | date B       | price B | stock B |
| Book C | Author C | date C       | price C | stock C |

## BFF服务
实现如下接口：
```
/settings/account, GET ---> 获取用户详细数据；
/settings/account, PUT ---> 修改用户详细数据；
/settings/security/password, POST ---> 更新密码，后端更新的时候先校验当前密码是否正确；
/tables/books, GET ---> 获取books详细数据；
```
`account`的数据格式和UI显示的一致。


## 库存服务
实现如下接口：
```
/stock/book, GET ---> 查询books的数据；
/stock/book, POST ---> 创建单个book的数据；
/stock/book, DELETE ---> 删除单个book的数据；
/stock/book, PUT ---> 更新单个book的数据；
```
`book`的数据格式如下：
```json
{
  "name": "book name",
  "author": "book author",
  "publishedAt": "published date",
  "price": "price",
  "stock": "stock"
}
```
## 集成
- UI程序调用BFF服务的`/settings/account`接口获取和修改用户详细数据；
- UI程序调用BFF服务的`/settings/security/password`接口更新密码；
- UI程序调用BFF服务的`/tables/books`接口获取books的数据列表；
- BFF服务调用库存服务的`/stock/book`查询接口获取books的数据列表；
- 库存服务的创建、删除、更新接口不提供给BFF服务使用，单独给测试使用；
