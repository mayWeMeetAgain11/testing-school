const { ManagerModel} = require('../index');
const httpStatus = require('../../../utils/httpStatus');

class Manager {

    constructor(data) {
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.email = data.email;
        this.password = data.password;
        this.phone = data.phone;
    }

    async add() {
        try {
            const manager = await ManagerModel.create(this);
            return {
                data: manager,
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

module.exports = { Manager };