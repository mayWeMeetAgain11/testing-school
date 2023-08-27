const { SubjectModel} = require('../index');
const httpStatus = require('../../../utils/httpStatus');

class Subject {

    constructor(data) {
        this.name = data.name;
    }

    async add() {
        try {
            const subject = await SubjectModel.create(this);
            return {
                data: subject,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }
            
    async update(id) {
        try {
            const subject = await SubjectModel.update(this, {
                where: {
                    id: id
                }
            });
            if (subject == 1) {
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

module.exports = { Subject };