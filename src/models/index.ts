import Author from "./Author";
import Book from "./Book";
import Detail from "./Detail";
import Loan from "./Loan";
import Student from "./Student";

// Relationships
Author.hasMany(Book, { onDelete: "CASCADE" });
Book.belongsTo(Author);

Book.hasOne(Detail, { onDelete: "CASCADE" });
Detail.belongsTo(Book);

Book.belongsToMany(Student, { through: Loan });
Student.belongsToMany(Book, { through: Loan });

Loan.belongsTo(Book);
Loan.belongsTo(Student);

// Sync with Database
import sequelize from "../config/database";
sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

export { Author, Book, Detail, Loan, Student };
