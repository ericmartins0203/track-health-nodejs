import { ProfileImageRepository } from "../../repositories/profileImage/profileImageRepository";
import { deleteObjectFromS3 } from "../../utils";

const deleteProfileImageService = async (userId: string) => {
  const profileImage = await new ProfileImageRepository().findProfileImage(
    userId
  );

  if (!profileImage) {
    throw new Error("User don't have a profile image.");
  }

  const deleted = await deleteObjectFromS3(profileImage.key);

  const deletedImage = await new ProfileImageRepository().deleteProfileImage(
    userId
  );

  return { message: "success" };
};

export { deleteProfileImageService };
