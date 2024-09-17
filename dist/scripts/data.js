"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const database_1 = __importDefault(require("../config/database"));
function createData() {
    return __awaiter(this, void 0, void 0, function* () {
        const author = yield models_1.Author.create({ name: "J.K. Rowling" });
        const book1 = yield models_1.Book.create({
            title: "Harry Potter and the Philosopher's Stone",
            summary: "First book in the Harry Potter series",
            pageCount: 223,
        });
        const book2 = yield models_1.Book.create({
            title: "Harry Potter and the Chamber of Secrets",
            summary: "Second book in the Harry Potter series",
            pageCount: 251,
        });
        yield author.addBooks([book1, book2]);
        const student1 = yield models_1.Student.create({ name: "John Doe" });
        const student2 = yield models_1.Student.create({ name: "Jane Smith" });
        yield student1.addBook(book1, { through: { loanDate: new Date() } });
        yield student2.addBook(book2, { through: { loanDate: new Date() } });
        console.log("Data created successfully!");
    });
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const authors = yield models_1.Author.findAll({ include: [models_1.Book] });
        console.log(JSON.stringify(authors, null, 2));
        const books = yield models_1.Book.findAll({ include: [models_1.Author, models_1.Student] });
        console.log(JSON.stringify(books, null, 2));
        const students = yield models_1.Student.findAll({ include: [models_1.Book] });
        console.log(JSON.stringify(students, null, 2));
    });
}
database_1.default.sync({ force: true }).then(() => {
    console.log("Database & tables created!");
    createData().then(() => fetchData());
});
