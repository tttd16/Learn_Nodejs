1.Tìm toàn bộ quyển sách trong document book

query:

```
db.manageBook.find({})
```

result:

2.  Tìm 1 quyển sách theo \_id
query:

```
 db.manageBook.find({\_id: ObjectId("63f32fce3789196fcc69e883")})
```
result:

    ```
       {
       \_id: ObjectId("63f32fce3789196fcc69e883"),
       title: 'To Kill a Mockingbird',
       author: 'Harper Lee',
       publication_date: '1960-07-11',
       pages: 281,
       genres: [
       'Novel',
       'Fiction',
       'Literary'
       ],
       publisher: {
       name: 'J. B. Lippincott & Co.',
       location: 'Philadelphia, PA'
       }
       }
    ```

    <!--  -->

3.  Thêm 1 quyển sách mới (insert toàn bộ thông tin)

    query:

    ```
    db.manageBook.insertOne({
    "title": "The Fountainhead",
    "author": "Ayn Rand",
    "publication_date": "1943-04-15",
    "pages": 1210,
    "genres": ["Philosophical novels"],
    "publisher": {
    "name": "Bobbs-Merrill Company",
    "location": "American"
    }
    })
    ```

    result:

    ```
    {
    acknowledged: true,
    insertedId: ObjectId("63f334cae6cef1c0afbc2488")
    }
    ```

4.  Tìm 1 quyển sách có lớn hơn 400 trang và đúng 2 thể loại

    query:

    ```
    db.manageBook.find({"pages" : {$gt : 400}, "genres": {$size: 2}})
    ```

    result:

```

{
\_id: ObjectId("63f32fce3789196fcc69e887"),
title: 'One Hundred Years of Solitude',
author: 'Gabriel García Márquez',
publication_date: '1967-06-01',
pages: 417,
genres: [
'Novel',
'Magic realism'
],
publisher: {
name: 'Editorial Sudamericana',
location: 'Buenos Aires, Argentina'
}
}
{
\_id: ObjectId("63f32fce3789196fcc69e888"),
title: 'The Lord of the Rings',
author: 'J.R.R. Tolkien',
publication_date: '1954-07-29',
pages: 1178,
genres: [
'Fantasy',
'Adventure'
],
publisher: {
name: 'George Allen & Unwin',
location: 'London, UK'
}
}

```

5.Update thông tin của quyển sách có title là "One Hundred Years Of Solitude"

- publisher_date
- genres
- Publisher

query:

```

db.manageBook.updateOne({"title": "One Hundred Years of Solitude"}, {$set : {"publication_date":"2000-10-16", "genres":["Dung", "LTD"], "publisher": {"name":"LTD", "location":"HN,VN"}}})

```

result:

```

{
acknowledged: true,
insertedId: null,
matchedCount: 1,
modifiedCount: 1,
upsertedCount: 0
}

```

6.Delete những quyển sách xuất bản trước năm 1967

query:

```

db.manageBook.deleteMany({"publication_date": { $lt: ("1967-01-01")}})

```

result:

```

db.manageBook.deleteMany({"publication_date": { $lt: ("1967-01-01")}})

```
