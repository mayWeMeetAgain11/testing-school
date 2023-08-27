
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class StudentModel extends Model {

        static associate(models) {
            this.belongsTo(models.GroupModel, {
                foreignKey: 'group_id',
                as: 'group'
            }); 
            this.hasMany(models.ExistingStudentModel, {
                foreignKey: 'student_id',
                as: 'existing_students'
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