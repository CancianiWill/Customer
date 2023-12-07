import multer from "multer";
import crypto from "crypto";
import {extname, resolve} from "path";
//files
//aws s3 - amazon web service s3
//digital ocean spaces

export default {
    storege: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", "tmp", "uploads"),
        filename: (req, file, callback) => {
            crypto.randomBytes(16,(err, res) => {
                if (err) return callback(err);
                
                
                return callback(null, res.toString("hex") + extname(file.originalname))
            })
        }
    })
}