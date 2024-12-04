"use client";

import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function UploadThangButton({className = ""}) {
    const router = useRouter ();
    return (
        <UploadButton className={className}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            router.refresh();
        }}
        onUploadError={(error: Error) =>{
            alert('ERROR! ${error.message}');
        }}
        />
    );
}