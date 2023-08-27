const { StudentModel} = require('../index');
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

}

module.exports = { Student };