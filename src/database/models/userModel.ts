import { DataTypes } from 'sequelize';
import { connection } from '../db';

const userModel = connection.define('users', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
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
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

function createTableUser(user: any) {
  return user.sync({ force: false }).then(() => {
    console.log('*******Tabela de usuário criada com sucesso*******');
  });
}

export { userModel, createTableUser };
