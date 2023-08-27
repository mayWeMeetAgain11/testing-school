const { Group } = require('./services/GroupService');
const { GroupTeacherSubject } = require('./services/GroupTeacherSubjectService');


module.exports = {

    addGroup: async (req, res) => {
        const result = await new Group(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    updateGroup: async (req, res) => {
        const result = await new Group(req.body).update(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    addTeacherSubjectToGroup: async (req, res) => {
        const result = await new GroupTeacherSubject(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    unRelateGroupWithOneTeacherSubject: async (req, res) => {
        const {teacher_subject_id} = req.params;
        let data = req.body;
        data.teacher_subject_id = teacher_subject_id;
        const result = await GroupTeacherSubject.delete(data);
        res.status(result.status).send({
            data: result.data,
        });
    },

}