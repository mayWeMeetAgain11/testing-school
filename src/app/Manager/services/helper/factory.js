
class Factory {

    // constructor() {

    // }

    static relateAllObjectsWithOneProperty (group_teacher_subject_ids, manager_note_id) {
        try {
            const refactoredData = [];
            let record = {};
            for (let i = 0; i < group_teacher_subject_ids.length; i++) {
                record.manager_note_id = manager_note_id;
                record.group_teacher_subject_id = group_teacher_subject_ids[i];
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