const { DrivePdfModel } = require('../index');
const httpStatus = require('../../../utils/httpStatus');

class DrivePdf {

    constructor(data) {
        this.pdf = data.pdf;
    }

    static async add(data) {
        try {
            let DrivePdf = await DrivePdfModel.findOne({});
            if (DrivePdf) {
                DrivePdf.pdf = data.pdf
                await DrivePdf.save();
            } else {
                DrivePdf = await DrivePdfModel.create({pdf: data.pdf});
            }
            
            return {
                data: DrivePdf,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async get() {
        try {
            const DrivePdf = await DrivePdfModel.findOne({});
            return {
                data: DrivePdf,
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

module.exports = { DrivePdf };