import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import Detail from "./Detail";

interface BookAttributes {
  id: number;
  title: string;
  summary?: string;
  pageCount?: number;
}

interface BookCreationAttributes extends Optional<BookAttributes, "id"> {}

class Book
  extends Model<BookAttributes, BookCreationAttributes>
  implements BookAttributes
{
  public id!: number;
  public title!: string;
  public summary?: string;
  public pageCount?: number;

  // Association methods
  public setDetail!: (detail: Detail) => Promise<void>;
  public getDetail!: () => Promise<Detail>;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pageCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Book",
  }
);

export default Book;
