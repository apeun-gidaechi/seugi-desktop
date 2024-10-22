import axios from "axios";
import { useState } from "react";

// TODO: Move to file
export enum FileType {
  IMG,
  FILE,
  EMOJI
}

export interface FileResult {
  url: string;
  name: string;
  byte?: number;
}

export type FileCompletion = (result: FileResult, type: FileType) => void

const useFileUpload = (completion: FileCompletion) => {
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (file: File, type: FileType) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await axios.post(`/upload/${type}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      const result: FileResult = response.data.data;
      completion(result, type);
    } catch (error) {
      console.error("File upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return { uploadFile, uploading };
};

export default useFileUpload;