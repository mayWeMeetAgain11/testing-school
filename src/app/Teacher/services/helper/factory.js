
class Factory {

    // constructor() {

    // }

    static relateAllObjectsWithOneProperty (subject_ids, teacher_id) {
        try {
            const refactoredData = [];
            let record = {};
            for (let i = 0; i < subject_ids.length; i++) {
                record.teacher_id = teacher_id;
                record.subject_id = subject_ids[i];
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

    static relateAllStudentssWithOneNote (student_ids, teacher_note_id) {
        try {
            const refactoredData = [];
            let record = {};
            for (let i = 0; i < student_ids.length; i++) {
                record.teacher_note_id = teacher_note_id;
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