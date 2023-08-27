const { GroupModel} = require('../index');
const httpStatus = require('../../../utils/httpStatus');

class Group {

    constructor(data) {
        this.number = data.number;
        this.class_id = data.class_id;
    }

    async add() {
        try {
            const group = await GroupModel.create(this);
            return {
                data: group,
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

module.exports = { Group };