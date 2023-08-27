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

    async update(id) {
        try {
            const manager = await ManagerModel.update(this, {
                where: {
                    id: id
                }
            });
            if (manager == 1) {
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
    
    static async login(email, password) {
        try {
            const manager = await ManagerModel.findOne({
                where: {
                    email: email
                }
            });
            if (!manager) {
                return {
                    data: 'email Not Found',
                    status: httpStatus.NOT_FOUND
                }
            } else if (password !== manager.password) {
                return {
                    data: 'Invalid password',
                    status: httpStatus.NOT_FOUND
                }
            } else {
                return {
                    data: {
                        token: manager.generateToken(),
                        data: manager
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

module.exports = { Manager };