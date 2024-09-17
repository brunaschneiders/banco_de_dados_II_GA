import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface LoanAttributes {
  id: number;
  loanDate: Date;
  returnDate?: Date;
}

interface LoanCreationAttributes extends Optional<LoanAttributes, "id"> {}

class Loan
  extends Model<LoanAttributes, LoanCreationAttributes>
  implements LoanAttributes
{
  public id!: number;
  public loanDate!: Date;
  public returnDate?: Date;
}

Loan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    loanDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Loan",
  }
);

export default Loan;
