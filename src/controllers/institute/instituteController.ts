import { Request, Response } from 'express'
import sequelize from '../../database/connection'


class InstituteController {
  async createInstitute(req: Request, res: Response) {
    const { instituteName, instituteEmail, institutePhoneNumber, instituteAddress } = req.body
    const instituteVatNo = req.body.instituteVatNo || null
    const institutePanNo = req.body.institutePanNo || null
    if (!institutePanNo || !instituteEmail || !institutePhoneNumber || !instituteAddress) {
      res.status(400).json({
        message: "please provide all details"
      })
      return
    }

    // aayo vane create garne hai ta
   const instituteNumber = 
    await sequelize.query(`CREATE TABLE IF NOT EXISTS institute (
      id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      instituteName VARCHAR(255) NOT NULL,
      instituteEmail VARCHAR(255) NOT NULL UNIQUE,
      institutePhoneNumber VARCHAR(255) NOT NULL,
      instituteAddress VARCHAR(255) NOT NULL,
      institutePanNo VARCHAR(255),
      instituteVatNo VARCHAR(255),
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )`)

      await sequelize.query(`INSERT INTO institute_${instituteNumber}`)


      res.status(200).json({
        message : "Institute created sucessfully"
      })

  }
}

export default InstituteController