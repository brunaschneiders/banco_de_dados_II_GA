"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Loan = exports.Book = exports.Author = void 0;
const Author_1 = __importDefault(require("./Author"));
exports.Author = Author_1.default;
const Book_1 = __importDefault(require("./Book"));
exports.Book = Book_1.default;
const Loan_1 = __importDefault(require("./Loan"));
exports.Loan = Loan_1.default;
const Student_1 = __importDefault(require("./Student"));
exports.Student = Student_1.default;
const database_1 = __importDefault(require("../config/database"));
// Relationships
Author_1.default.hasMany(Book_1.default, { onDelete: "CASCADE" });
Book_1.default.belongsTo(Author_1.default);
Book_1.default.belongsToMany(Student_1.default, { through: Loan_1.default });
Student_1.default.belongsToMany(Book_1.default, { through: Loan_1.default });
// Sync with Database
database_1.default.sync({ force: true }).then(() => {
    console.log("Database & tables created!");
});
