
const { Model } = require('sequelize');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    class TeacherModel extends Model {
        generateToken(){
            const token = jwt.sign({ id: this.id, user : this.user }, process.env.SECRETKEY);
            return token;
        }

        static associate(models) {
            this.hasMany(models.TeacherNoteModel, {
                foreignKey: 'teacher_id',
                as: 'teacher_note'
            }); 
            this.hasMany(models.TeacherSubjectModel, {
                foreignKey: 'teacher_id',
                as: 'teacher_subjects'
            }); 
        }
    }
    TeacherModel.init({
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        sequelize,
        modelName: 'TeacherModel',
        tableName: 'teachers',
        underscored: true
    });
    return TeacherModel;
};