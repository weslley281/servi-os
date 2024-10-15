import { DataTypes } from 'sequelize';
import { connection } from '../db';

const userModel = connection.define('users', {
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_type: {
    type: DataTypes.ENUM('admin', 'manager', 'supervisor', 'client', 'doctor', 'employee'),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  CPF: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CRM: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

function createTableUser() {
  return userModel.sync({ force: false }).then(() => {
    console.log('*******Tabela de usuarios criada com sucesso*******');
  });
}

export { userModel, createTableUser };
