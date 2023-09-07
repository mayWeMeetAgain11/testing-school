
const httpStatus = require('../../../../../utils/httpStatus');

class Factory {

    // constructor() {

    // }

    static relateAllObjectsWithOneProperty (teacher_subject_ids, group_id) {
        try {
            const refactoredData = [];
            let record = {};
            for (let i = 0; i < teacher_subject_ids.length; i++) {
                record.group_id = group_id;
                record.teacher_subject_id = teacher_subject_ids[i];
                refactoredData.push(record);
                record = {};
            }
            return refactoredData;
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

}

module.exports = { Factory };