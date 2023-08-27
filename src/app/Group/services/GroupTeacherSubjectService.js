const { GroupTeacherSubjectModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class GroupTeacherSubject {

    constructor(data) {
        this.group_id = data.group_id;
        this.teacher_subject_id = data.teacher_subject_id;
    }

    async add() {
        try {
            const groupTeacherSubject = await GroupTeacherSubjectModel.create(this);
            return {
                data: 'related succcuessfully',
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

module.exports = { GroupTeacherSubject };