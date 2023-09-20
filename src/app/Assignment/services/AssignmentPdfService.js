const { 
    AssignmentPdfModel,
} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');
const { Op } = require('sequelize');
const fs = require('fs');


class AssignmentPdf {

    constructor(data) {
        this.url = data.url.path;
        this.assignment_id = data.assignment_id;
    }

    async add() {
        try {
            const AssignmentPdf = await AssignmentPdfModel.create(this);
            return {
                data: 'pdf added successfully',
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async delete(id) {
        try {
            const pdf = await AssignmentPdfModel.findByPk(id);
            const assignmentPdf = await AssignmentPdfModel.destroy({
                where: {
                    id: id
                }
            });
            if (assignmentPdf === 1) {
                // if (pdf.url) {
                    // fs.unlinkSync(pdf.photo);
                // }
                return {
                    data: 'pdf deleted successfully',
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: 'something went wrong',
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

module.exports = { AssignmentPdf };