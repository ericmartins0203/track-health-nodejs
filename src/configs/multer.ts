/* eslint-disable no-param-reassign */
import aws from "aws-sdk";
import crypto from "crypto";
import { Express, Request } from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import path from "path";

const storageTypes = (folder = "imageProfile") => {
  return {
    s3: multerS3({
      s3: new aws.S3(),
      bucket: process.env.BUCKET_NAME as string,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: "public-read",
      key: (req, file, cb) => {
        crypto.randomBytes(32, (err, hash) => {
          if (err) cb(err, "");

          const fileName =
            folder === "imageProfile"
              ? `imagesProfile/${hash.toString("hex")}-${file.originalname}`
              : `exams/${hash.toString("hex")}-${file.originalname}`;

          cb(null, fileName);
        });
      },
    }),
  };
};

const multerConfigs = (folder = "imageProfile") => {
  return {
    dest: path.resolve(__dirname, "..", "tmp", "uploads"),
    storage: storageTypes(folder).s3,
    limits: {
      fileSize: Number(process.env.MAXIMUM_FILE_SIZE),
    },
    fileFilter: (
      req: Request,
      file: Express.Multer.File,
      cb: multer.FileFilterCallback
    ) => {
      const allowedMimes =
        folder === "imageProfile"
          ? ["image/jpeg", "image/png", "image/jpg"]
          : ["image/jpeg", "image/png", "image/jpg", "application/pdf"];

      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Invalid file type."));
      }
    },
  };
};

export { multerConfigs };
