import { DataTypes } from 'sequelize';
import { connection } from '../db';

const doctorModel = connection.define('doctors', {
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
  CRM: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'clínico geral', // Valor padrão
  },
});

function createTableDoctor() {
  return doctorModel.sync({ force: false }).then(() => {
    console.log('*******Tabela de médico criada com sucesso*******');
  });
}

export { doctorModel, createTableDoctor };
