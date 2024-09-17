import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import Book from "./Book";

interface StudentAttributes {
  id: number;
  name: string;
}

interface StudentCreationAttributes extends Optional<StudentAttributes, "id"> {}

class Student
  extends Model<StudentAttributes, StudentCreationAttributes>
  implements StudentAttributes
{
  public id!: number;
  public name!: string;

  // Association methods
  public addBook!: (book: Book, options?: any) => Promise<void>;
  public addBooks!: (books: Book[], options?: any) => Promise<void>;
  public getBooks!: () => Promise<Book[]>;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "Student",
  }
);
export default Student;
