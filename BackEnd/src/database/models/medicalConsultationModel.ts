import { DataTypes } from 'sequelize';
import { connection } from '../db';

const medicalConsultationModel = connection.define('medical_consultations', {
  m_consultation_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  appointment_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  duration: {
    type: DataTypes.DOUBLE, // Duração em minutos
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('agendada', 'realizada', 'cancelada', 'pendente'),
    allowNull: false,
    defaultValue: 'agendada',
  },
  doctor_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: 'users',
      key: 'user_id',
    },
    allowNull: false,
  },
  client_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: 'users',
      key: 'user_id',
    },
    allowNull: false,
  },
  reported_symptoms: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  diagnosis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  prescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  requested_exams: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  exam_results: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reason_for_visit: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  payment_method: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  consultation_fee: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

function createTableMedicalConsultation() {
  return medicalConsultationModel.sync({ force: false }).then(() => {
    console.log('*******Tabela de consultas médicas criada com sucesso*******');
  });
}

export { medicalConsultationModel, createTableMedicalConsultation };
