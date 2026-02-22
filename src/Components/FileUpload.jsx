import { useRef } from 'react';

export const FileUpload = ({ onFileSelect }) => {
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add('drag-active');
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) onFileSelect(file);
    };

    return (
        <div 
        className="upload-area" 
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
        >
        <div className="upload-icon">📄</div>
        <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Upload Medical Report</h3>
        <p style={{ color: 'var(--text-secondary)' }}>Click to browse or drag and drop your files here</p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Supports: PDF, JPG, PNG (Max 10MB)
        </p>
        <input 
            type="file" 
            ref={fileInputRef}
            accept=".pdf,.jpg,.jpeg,.png" 
            style={{ display: 'none' }} 
            onChange={(e) => onFileSelect(e.target.files[0])}
        />
        </div>
    );
};