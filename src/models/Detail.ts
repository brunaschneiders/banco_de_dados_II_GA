import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface DetailAttributes {
  id: number;
  summary?: string;
  pageCount?: number;
}

interface DetailCreationAttributes extends Optional<DetailAttributes, "id"> {}

class Detail
  extends Model<DetailAttributes, DetailCreationAttributes>
  implements DetailAttributes
{
  public id!: number;
  public summary?: string;
  public pageCount?: number;
}

Detail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    modelName: "Detail",
  }
);

export default Detail;
