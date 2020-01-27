const aws = require('aws-sdk');

const sendImageToS3 = async (buffer, imagePath, bucket) => {
  const s3 = new aws.S3({ apiVersion: '2006-03-01' });
  const { Location } = await s3
    .upload({
      ACL: 'public-read',
      Body: buffer,
      Bucket: bucket,
      ContentType: 'image/png',
      Key: imagePath
    })
    .promise();

  return Location;
};

module.exports = { sendImageToS3 };
