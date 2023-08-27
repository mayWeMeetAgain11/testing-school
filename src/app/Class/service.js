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
    
    async update(id) {
        try {
            const classVar = await ClassModel.update(this, {
                where: {
                    id: id
                }
            });
            if (classVar == 1) {
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
    
    static async delete(id) {
        try {
            const classVar = await ClassModel.destroy({
                where: {
                    id: id
                }
            });
            if (classVar != 0) {
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

}

module.exports = { Class };