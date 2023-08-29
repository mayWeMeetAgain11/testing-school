const { StudentModel, GroupModel } = require('../index');
const httpStatus = require('../../../utils/httpStatus');

class Student {

    constructor(data) {
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.email = data.email;
        this.password = data.password;
        this.phone = data.phone;
        this.address = data.address;
        this.group_id = data.group_id;
    }

    async add() {
        try {
            const student = await StudentModel.create(this);
            return {
                data: student,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }
        
    static async login(email, password) {
        try {
            const student = await StudentModel.findOne({
                where: {
                    email: email
                }
            });
            if (!student) {
                return {
                    data: 'email Not Found',
                    status: httpStatus.NOT_FOUND
                }
            } else if (password !== student.password) {
                return {
                    data: 'Invalid password',
                    status: httpStatus.NOT_FOUND
                }
            } else {
                return {
                    data: {
                        token: student.generateToken(),
                        data: student
                    },
                    status: httpStatus.OK
                }
            }
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.INTERNAL_SERVER_ERROR
            }
        }
    }
    
    async update(id) {
        try {
            const student = await StudentModel.update(this, {
                where: {
                    id: id
                }
            });
            if (student == 1) {
                return {
                    data: "updated",
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: "something went wrong!",
                    status: httpStatus.BAD_REQUEST
                };
            }
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }
    
    static async linkToGroup(id, data) {
        try {
            const student = await StudentModel.findByPk(id);
            student.group_id = data.group_id;
            student.save();
            return {
                data: "related to a new group",
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }
    
    static async delete(id) {
        try {
            const student = await StudentModel.destroy({
                where: {
                    id: id
                }
            });
            if (student != 0) {
                return {
                    data: "deleted",
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: "something went wrong!",
                    status: httpStatus.BAD_REQUEST
                };
            }
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }
    
    static async getAll() {
        try {
            const students = await StudentModel.findAll({
                include: [
                    {
                        model: GroupModel,
                        as: 'group'
                    }
                ]
            });
            return {
                data: students,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }
    
    static async getAllForOneGroup(group_id) {
        try {
            const students = await StudentModel.findAll({
                where: {
                    group_id: group_id
                }
            });
            return {
                data: students,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

}

module.exports = { Student };