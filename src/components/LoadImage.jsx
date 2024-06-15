import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';

function LoadImage() {
    const [files, setFiles] = useState([]);

     const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

   const removeFile = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  };
  return (
    <div className='w-full flex justify-center items-center px-[20%] '>
    <div className='flex w-full justify-center border-white border-2 border-dashed rounded-lg '>
    
      <div
      {...getRootProps({
        className:
          ' w-full rounded-lg p-6 text-center cursor-pointer',
      })}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-gray-600">Drop the files here ...</p>
      ) : (
        <p className="text-gray-600">
          Drag 'n' drop some files here, or click to select files
        </p>
      )}
      <div className="mt-4 grid grid-cols-5 gap-4  ">
      
        {files.map((file) => (
          <div key={file.name} className="relative w-full h-24 overflow-hidden">
            <img src={file.preview} alt="preview" className="object-cover w-full h-full" />
            <button
              onClick={() => removeFile(file.name)}
              className="absolute w-[25px] top-0 right-0 mt-1 mr-1 bg-red-500 text-white rounded-full p-1 text-xs"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default LoadImage
