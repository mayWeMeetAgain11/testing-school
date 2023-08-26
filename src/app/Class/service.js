const { ClassModel} = require('../index');
const httpStatus = require('../../../utils/httpStatus');

class Class {

    constructor(data) {
        this.name = data.name;
    }

    async add() {
        try {
            const classVar = await ClassModel.create(this);
            return {
                data: classVar,
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

module.exports = { Class };