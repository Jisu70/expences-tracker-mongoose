//Dependencies
const AWS = require("aws-sdk");

// To downloadExpenses
const uploadToS3 = async (data, fileName) => {
  try {
    const s3bucket = new AWS.S3({
      accessKeyId: process.env.IAM_USER_KEY,
      secretAccessKey: process.env.IAM_USER_SECRET,
    });
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: fileName,
      Body: data,
      ACL: "public-read",
    };
    // Returning the ashyncronus task
    return new Promise((resolve, reject) => {
      s3bucket.upload(params, (err, s3response) => {
        if (err) {
          reject(err);
        } else {
          resolve(s3response.Location);
        }
      });
    });
    //  Or we also can do that to retun the promise
    // const uploadPromise = await s3bucket.upload(params).promise();
    // return uploadPromise.Location;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  uploadToS3,
};
