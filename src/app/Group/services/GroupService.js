const { GroupModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

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
        
    async update(id) {
        try {
            const group = await GroupModel.update(this, {
                where: {
                    id: id
                }
            });
            if (group == 1) {
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
            const group = await GroupModel.destroy({
                where: {
                    id: id
                }
            });
            if (group != 0) {
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

module.exports = { Group };