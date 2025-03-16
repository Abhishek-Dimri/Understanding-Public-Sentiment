import { useState } from 'react';
import styles from './Upload.module.css';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    // TODO: Add API call to backend
    console.log('Uploading:', file);
  };

  return (
    <div className={styles.container}>
      <h2>Upload CSV</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
