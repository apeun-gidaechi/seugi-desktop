import axios from "axios";
import { useState } from "react";

const useFileUpload = (chatRoom: string, currentUser: string, sendMessage: (message: string, type: string) => void) => {
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (file: File, type: string) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await axios.post(`/upload/${type}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      const fileUrl = response.data;
      sendMessage(fileUrl, type);
    } catch (error) {
      console.error("File upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return { uploadFile, uploading };
};

export default useFileUpload;