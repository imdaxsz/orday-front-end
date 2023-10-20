import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { storage } from "@/libs/firebase";

export default function useUploadImage() {
  const fileRef = ref(storage, `userId/${uuidv4()}`);

  const uploadImage = async (file: File) => {
    const result = await uploadBytes(fileRef, file);
    const url = await getDownloadURL(result.ref);
    return url;
  };

  return uploadImage;
}
