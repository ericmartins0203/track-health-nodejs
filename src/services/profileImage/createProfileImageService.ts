import { ProfileImageRepository } from "../../repositories/profileImage/profileImageRepository";

const createProfileImageService = async (
  file: Express.Multer.File,
  userId: string
) => {
  const { originalname: name, location: url = "", key: keyBucket } = file;

  const profileImage = {
    name,
    url,
    key: keyBucket,
    user: {
      id: userId,
    },
  };

  const newProfileImage = await new ProfileImageRepository().saveProfileImage(
    profileImage
  );

  const { user, key, ...serializedProfile } = newProfileImage;

  return serializedProfile;
};

export { createProfileImageService };
