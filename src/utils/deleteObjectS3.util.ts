import aws from "aws-sdk";

const deleteObjectFromS3 = async (key: string) => {
  const s3 = new aws.S3();

  const deleted = await s3
    .deleteObject({
      Bucket: process.env.BUCKET_NAME as string,
      Key: key,
    })
    .promise();

  return deleted;
};

export { deleteObjectFromS3 };
