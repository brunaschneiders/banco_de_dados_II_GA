import Author from "./Author";
import Book from "./Book";
import Loan from "./Loan";
import Student from "./Student";
import sequelize from "../config/database";

// Relationships
Author.hasMany(Book, { onDelete: "CASCADE" });
Book.belongsTo(Author);

Book.belongsToMany(Student, { through: Loan });
Student.belongsToMany(Book, { through: Loan });

// Sync with Database
sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

export { Author, Book, Loan, Student };
