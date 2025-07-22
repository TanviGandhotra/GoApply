import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

export const streamUpload = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(  { resource_type: "raw",
        }, (error, result) => {
            if (result) resolve(result);
            else reject(error);
        });

        streamifier.createReadStream(fileBuffer).pipe(stream);
    });
};


