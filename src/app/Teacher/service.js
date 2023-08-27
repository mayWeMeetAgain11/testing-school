const { TeacherModel} = require('../index');
const httpStatus = require('../../../utils/httpStatus');

class Teacher {

    constructor(data) {
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.email = data.email;
        this.password = data.password;
        this.phone = data.phone;
        this.address = data.address;
    }

    async add() {
        try {
            const teacher = await TeacherModel.create(this);
            return {
                data: teacher,
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
            const teacher = await TeacherModel.findOne({
                where: {
                    email: email
                }
            });
            if (!teacher) {
                return {
                    data: 'email Not Found',
                    status: httpStatus.NOT_FOUND
                }
            } else if (password !== teacher.password) {
                return {
                    data: 'Invalid password',
                    status: httpStatus.NOT_FOUND
                }
            } else {
                return {
                    data: {
                        token: teacher.generateToken(),
                        data: teacher
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
            const teacher = await TeacherModel.update(this, {
                where: {
                    id: id
                }
            });
            if (teacher == 1) {
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

}

module.exports = { Teacher };