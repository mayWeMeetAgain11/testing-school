const { 
    FeedbackModel,
} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class Feedback {

    constructor(data) {
        this.student_id = data.student_id;
        this.content = data.content;
    }

    async add() {
        try {
            const feedback = await FeedbackModel.create(this);
            return {
                data: feedback,
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

module.exports = { Feedback };