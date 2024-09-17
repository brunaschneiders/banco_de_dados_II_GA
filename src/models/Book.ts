import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import Detail from "./Detail";

interface BookAttributes {
  id: number;
  title: string;
}

interface BookCreationAttributes extends Optional<BookAttributes, "id"> {}

class Book
  extends Model<BookAttributes, BookCreationAttributes>
  implements BookAttributes
{
  public id!: number;
  public title!: string;

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
  },
  {
    sequelize,
    modelName: "Book",
  }
);

export default Book;
