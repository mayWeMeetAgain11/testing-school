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

}

module.exports = { Teacher };