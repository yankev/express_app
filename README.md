
```sql
CREATE ROLE "kevin" WITH SUPERUSER LOGIN PASSWORD 'pass';
ALTER DATABASE puppies OWNER TO kevin;
```

postgres://kevin:pass@localhost:5432/puppies
