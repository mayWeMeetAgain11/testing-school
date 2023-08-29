const { SessionModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class Session {

    constructor(data) {
        this.group_teacher_subject_id = data.group_teacher_subject_id;
        this.date = data.date;
    }

    async add() {
        try {
            const session = await SessionModel.create(this);
            return {
                data: session,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async delete(session_id) {
        try {
            const deletedSession = await SessionModel.destroy({
                where: {
                    id: session_id
                }
            });
            if (deletedSession == 1) {
                return {
                    data: 'deleted successfully',
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: 'something wrong happend',
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

    static async update(data) {
        try {
            const session = await SessionModel.findByPk(data.session_id);
            session.date = data.date || session.date;
            session.group_teacher_subject_id = data.group_teacher_subject_id || session.group_teacher_subject_id;
            session.save();
            return {
                data: 'updated successfully',
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

module.exports = { Session };