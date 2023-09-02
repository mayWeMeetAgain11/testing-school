const { ManagerNoteModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class ManagerNote {

    constructor(data) {
        this.manager_id = data.manager_id;
        this.note = data.note;
        this.type = data.type;
    }

    async add() {
        try {
            const managerNote = await ManagerNoteModel.create(this);
            return {
                data: managerNote,
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
            const managerNote = await ManagerNoteModel.update(this, {
                where: {
                    id: id
                }
            });
            if (managerNote == 1) {
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

    static async getAllWithTypeCondition(type) {
        try {
            const managerNote = await ManagerNoteModel.findAll({
                where: {
                    type: type
                }
            });
            return {
                data: managerNote,
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

module.exports = { ManagerNote };