import { Sequelize } from "sequelize";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDb() {
  return open({
    filename: "./tmp/database.db",
    driver: sqlite3.Database,
  });
}

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./tmp/database.db",
  logging: false, // Desabilitar logging para menos verbosidade
});

export default sequelize;
