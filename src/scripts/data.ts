import { Author, Book, Student, Loan } from "../models";
import sequelize from "../config/database";

async function createData() {
  const author = await Author.create({ name: "J.K. Rowling" });
  const book1 = await Book.create({
    title: "Harry Potter and the Philosopher's Stone",
    summary: "First book in the Harry Potter series",
    pageCount: 223,
  });
  const book2 = await Book.create({
    title: "Harry Potter and the Chamber of Secrets",
    summary: "Second book in the Harry Potter series",
    pageCount: 251,
  });
  await author.addBooks([book1, book2]);

  const student1 = await Student.create({ name: "John Doe" });
  const student2 = await Student.create({ name: "Jane Smith" });

  await student1.addBook(book1, { through: { loanDate: new Date() } });
  await student2.addBook(book2, { through: { loanDate: new Date() } });

  console.log("Data created successfully!");
}

async function fetchData() {
  const authors = await Author.findAll({ include: [Book] });
  console.log(JSON.stringify(authors, null, 2));

  const books = await Book.findAll({ include: [Author, Student] });
  console.log(JSON.stringify(books, null, 2));

  const students = await Student.findAll({ include: [Book] });
  console.log(JSON.stringify(students, null, 2));
}

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
  createData().then(() => fetchData());
});
