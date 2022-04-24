import { ProfileImageRepository } from "../../repositories/profileImage/profileImageRepository";

const getProfileImageService = async (userId: string) => {
  const profileImage = await new ProfileImageRepository().findProfileImage(
    userId
  );

  if (!profileImage) {
    throw new Error("User don't have a profile image.");
  }

  return profileImage;
};

export { getProfileImageService };
