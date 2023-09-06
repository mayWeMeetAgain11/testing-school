
class Factory {

    // constructor() {

    // }

    static relateAllObjectsWithOneProperty (group_ids, manager_note_id) {
        try {
            const refactoredData = [];
            let record = {};
            for (let i = 0; i < group_ids.length; i++) {
                record.manager_note_id = manager_note_id;
                record.group_id = group_ids[i];
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

    static relateAllTeachersWithOneManagerNote (teacher_ids, manager_note_id) {
        try {
            const refactoredData = [];
            let record = {};
            for (let i = 0; i < teacher_ids.length; i++) {
                record.manager_note_id = manager_note_id;
                record.teacher_id = teacher_ids[i];
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

    static relateAllStudentsWithOneManagerNote (student_ids, manager_note_id) {
        try {
            const refactoredData = [];
            let record = {};
            for (let i = 0; i < student_ids.length; i++) {
                record.manager_note_id = manager_note_id;
                record.student_id = student_ids[i];
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