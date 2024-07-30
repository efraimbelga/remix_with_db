CREATE TABLE IF NOT EXISTS "contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"first" varchar(25),
	"last" varchar(25),
	"avatar" varchar(25),
	"twitter" varchar(246),
	"favorite" integer
);
