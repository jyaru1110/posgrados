const { DataTypes } = require("sequelize");
var sequelize = require("../database/database");

const Programa = sequelize.define(
  "programa",
  {
    // Atributos del modelo
    programa: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    grado: {
      type: DataTypes.STRING,
    },
    tipo: {
      type: DataTypes.STRING,
    },
    codigo: {
      type: DataTypes.STRING,
    },
    cuenta: {
      type: DataTypes.STRING,
    },
    escuela: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "escuela",
        key: "escuela",
      },
    },
    tipo_programa: {
      type: DataTypes.STRING,
      defaultValue: "Base",
      validate: {
        customValidator: (value) => {
          const enums = ["Nuevo", "Actualización", "Base"];
          if (!enums.includes(value)) {
            throw new Error("El tipo debe ser Nuevo, Actualización o Base");
          }
        },
      },
    },
    programa_previo: {
      type: DataTypes.STRING,
      references: {
        model: "programa",
        key: "programa",
      },
    },
    modalidad: {
      type: DataTypes.STRING,
      defaultValue: "Presencial",
      validate: {
        customValidator: (value) => {
          const enums = ["Presencial", "En línea", "Mixta"];
          if (!enums.includes(value)) {
            throw new Error("La modalidad debe ser Presencial o Virtual");
          }
        },
      },
    },
    campus: {
      type: DataTypes.STRING,
      defaultValue: "Mixcoac",
      validate: {
        customValidator: (value) => {
          const enums = [
            "Mixcoac",
            "Santa Fe",
            "Guadalajara",
            "Aguascalientes",
          ];
          if (!enums.includes(value)) {
            throw new Error("El campus debe ser Mixcoac o Santa Fe");
          }
        },
      },
    },
    duracion: {
      type: DataTypes.STRING,
    },
    rvoe: {
      type: DataTypes.STRING,
    },
    fecha_rvoe: {
      type: DataTypes.DATE,
    },
    creditos: {
      type: DataTypes.STRING,
    },
    year_inicio: {
      type: DataTypes.STRING,
    },
    num_materias: {
      type: DataTypes.STRING,
    },
    num_materias_ingles: {
      type: DataTypes.STRING,
    },
    esta_activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    website: {
      type: DataTypes.STRING,
    },
    encarte: {
      type: DataTypes.STRING,
    }
  },
  {
    // Opciones del modelo
    tableName: "programa",
    timestamps: false,
  }
);

module.exports = Programa;
