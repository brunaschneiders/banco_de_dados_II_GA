import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import Book from "./Book";

interface AuthorAttributes {
  id: number;
  name: string;
}

interface AuthorCreationAttributes extends Optional<AuthorAttributes, "id"> {}

class Author
  extends Model<AuthorAttributes, AuthorCreationAttributes>
  implements AuthorAttributes
{
  public id!: number;
  public name!: string;

  // Association methods
  public addBook!: (book: Book) => Promise<void>;
  public addBooks!: (books: Book[]) => Promise<void>;
  public getBooks!: () => Promise<Book[]>;
}

Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Author",
  }
);

export default Author;
