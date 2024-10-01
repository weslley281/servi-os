import { DataTypes } from 'sequelize';
import { connection } from '../db';

const clientModel = connection.define('clients', {
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
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

function createTableClient() {
  return clientModel.sync({ force: false }).then(() => {
    console.log('*******Tabela de médico criada com sucesso*******');
  });
}

export { clientModel, createTableClient };
