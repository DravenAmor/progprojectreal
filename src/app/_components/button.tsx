"use client";

import { useRouter } from "next/navigation";
import { UploadButton } from "@uploadthing/react";
import { useState } from "react";

export default function UploadThangButton({ className = "" }) {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className={className}>
      {error && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          setUploading(false);
          setError(null);
          router.refresh();
        }}
        onUploadError={(error: Error) => {
          setUploading(false);
          setError(`ERROR! ${error.message}`);
        }}
        onUploadStart={() => {
          setUploading(true);
          setError(null);
        }}
      />
      {uploading && <p className="mt-2 text-sm">Uploading...</p>}
    </div>
  );
}


