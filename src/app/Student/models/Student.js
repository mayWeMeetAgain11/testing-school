
const { Model } = require('sequelize');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    class StudentModel extends Model {
        generateToken(){
            const token = jwt.sign({ id: this.id, user : this.user }, process.env.SECRETKEY);
            return token;
        }

        static associate(models) {
            this.belongsTo(models.GroupModel, {
                foreignKey: 'group_id',
                as: 'group'
            }); 
            this.hasMany(models.ExistingStudentModel, {
                foreignKey: 'student_id',
                as: 'existing_students'
            }); 
            this.hasMany(models.TeacherNoteStudentModel, {
                foreignKey: 'student_id',
                as: 'teacher_note_students'
            }); 
            this.hasMany(models.FeedbackModel, {
                foreignKey: 'student_id',
                as: 'feedbacks'
            }); 
            this.hasMany(models.ManagerNoteStudentModel, {
                foreignKey: 'student_id',
                as: 'manager_note_students'
            }); 
        }
    }
    StudentModel.init({
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
        modelName: 'StudentModel',
        tableName: 'students',
        underscored: true
    });
    return StudentModel;
};