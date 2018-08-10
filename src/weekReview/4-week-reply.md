# 本周主要学习了数据扁平化normalizr
## normalizr:
### 好处：
+ 数据扁平化使数据分层便于管理
+ 当对于数据进行修改和删除时非常的方便
+ 可以去除冗余的数据
### 用法：
+ 定义schema：从normalizr里引入shcema，新建一个schema.Entity的对象 对象中第一个字段名为当对数据进行数据扁平化时返回的entities字段名，第二个字段为当对复杂数据进行拆分时所拆分后的字段， 第三个字段idAttribute为将数据扁平化时所根据的主键

+ action中对数据进行处理：将后端返回的response中的数据和shchema中schema.Entity传入normalize中以达到数据扁平化的结果。normalize处理数据后会返回entities和result对象分别对应着数据扁平化后的实体和主键idAtribute对应的id数组
              
+ reducer中处理数据：对数据进行分类管理

+ 更改normalizr处理后的数据：diapatch action到reducer里
             
    