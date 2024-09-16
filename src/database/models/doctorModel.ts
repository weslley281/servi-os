import { DataTypes } from 'sequelize';
import { connection } from '../db';
import { userModel } from './userModel';

const doctorModel = connection.define('doctors', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: userModel, // Referência ao modelo de usuários
      key: 'id', // Coluna que será referenciada (id)
    },
    onUpdate: 'CASCADE', // Atualizar 'user_id' caso o 'id' do usuário seja alterado
    onDelete: 'CASCADE', // Excluir registro do médico se o usuário for excluído
  },
  CRM: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.ENUM(
      'acupuntura',
      'alergologia',
      'anestesiologia',
      'angiologia',
      'cardiologia',
      'cirurgia geral',
      'cirurgia plástica',
      'cirurgia torácica',
      'cirurgia vascular',
      'clínico geral',
      'dermatologia',
      'endocrinologia',
      'endoscopia',
      'gastroenterologia',
      'geriatria',
      'ginecologia',
      'hematologia',
      'hepatologia',
      'infectologia',
      'nefrologia',
      'neurologia',
      'nutrologia',
      'oftalmologia',
      'oncologia',
      'ortopedia',
      'otorrinolaringologia',
      'pediatria',
      'pneumologia',
      'psiquiatria',
      'radiologia',
      'reumatologia',
      'urologia'
    ),
    allowNull: false,
    defaultValue: 'clínico geral', // Valor padrão
  },
});

function createTableDoctor(doctor: any) {
  return doctor.sync({ force: false }).then(() => {
    console.log('*******Tabela de médico criada com sucesso*******');
  });
}

export { doctorModel, createTableDoctor };
