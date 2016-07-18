CREATE ROLE "pups" WITH SUPERUSER LOGIN PASSWORD 'pups';

ALTER DATABASE puppies OWNER TO pups;

postgres://pups:pups@localhost:5432/puppies