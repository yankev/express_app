```sql
CREATE ROLE "kevin" WITH SUPERUSER LOGIN PASSWORD 'pass';
ALTER DATABASE puppies OWNER TO kevin;
```

Access db with this address:
`postgres://kevin:pass@localhost:5432/puppies`

Make a simple `POST` request:
`curl --data "name=Coco1&color=purpz" http://localhost:3000/test-page`

#### Some key endpoints:
- /input (ajax form for adding elements to db)
- /rmarkdown (rmarkdown html page)
- /index/(some message) (trying url params)
- /select_all (displays contents of db)

