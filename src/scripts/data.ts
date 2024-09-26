import { Author, Book, Detail, Student, Loan } from "../models";
import sequelize from "../config/database";

async function createData() {
  // Authors
  const author = await Author.create({ name: "J.K. Rowling" });

  // Books
  const book1 = await Book.create({
    title: "Harry Potter and the Philosopher's Stone",
  });
  const book2 = await Book.create({
    title: "Harry Potter and the Chamber of Secrets",
  });

  // Associate books with author
  await author.addBooks([book1, book2]);

  // Details
  const detail1 = await Detail.create({
    summary: "First book in the Harry Potter series",
    pageCount: 223,
  });
  const detail2 = await Detail.create({
    summary: "Second book in the Harry Potter series",
    pageCount: 251,
  });

  // Associate details with books
  await book1.setDetail(detail1);
  await book2.setDetail(detail2);

  // Students
  const student1 = await Student.create({ name: "John Doe" });
  const student2 = await Student.create({ name: "Jane Smith" });

  // Loans
  await student1.addBook(book1, { through: { loanDate: new Date() } });
  await student2.addBook(book2, { through: { loanDate: new Date() } });

  console.log("Data created successfully!");
}

async function fetchData() {
  const authors = await Author.findAll({ include: [Book] });
  console.log("Authors with their books:");
  console.log(JSON.stringify(authors, null, 2));

  const books = await Book.findAll({ include: [Detail, Author, Student] });
  console.log("Books with their details, authors, and students:");
  console.log(JSON.stringify(books, null, 2));

  const students = await Student.findAll({ include: [Book] });
  console.log("Students with their borrowed books:");
  console.log(JSON.stringify(students, null, 2));

  const loans = await Loan.findAll({ include: [Book, Student] });
  console.log("Loans with their associated books and students:");
  console.log(JSON.stringify(loans, null, 2));
}

async function updateReturnDate(loanId: number, returnDate: Date) {
  const loan = await Loan.findByPk(loanId);
  if (loan) {
    loan.returnDate = returnDate;
    await loan.save();
    console.log(`Return date for loan ${loanId} updated to ${returnDate}`);
  } else {
    console.log(`Loan with ID ${loanId} not found`);
  }
}

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
  createData().then(() => {
    // Update the return date for a specific loan
    updateReturnDate(1, new Date("2024-12-31")).then(() => {
      fetchData();
    });
  });
});
