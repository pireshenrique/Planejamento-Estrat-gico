const fs = require('fs');
const filePath = './src/components/layout/StrategicReportView.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove isEditorial, isUpdating, updateFeedback states
content = content.replace(/const \[isEditorial, setIsEditorial\] = useState[^;]+;\n/g, '');
content = content.replace(/const \[isUpdating, setIsUpdating\] = useState[^;]+;\n/g, '');
content = content.replace(/const \[updateFeedback, setUpdateFeedback\] = useState[\s\S]*?\| null>\(null\);\n/g, '');

// Remove showExportModal and copiedExport states
content = content.replace(/const \[showExportModal, setShowExportModal\] = useState[^;]+;\n/g, '');
content = content.replace(/const \[copiedExport, setCopiedExport\] = useState[^;]+;\n/g, '');

// Remove the handleUpdateAnalysis function
content = content.replace(/const handleUpdateAnalysis = async \([\s\S]*?\}\n  };\n/g, '');

// Remove handleDownloadExportFile, handleCopyExportText, getPublishedReportFileContent
content = content.replace(/const handleDownloadExportFile = \(\) => \{[\s\S]*?\};\n/g, '');
content = content.replace(/const handleCopyExportText = async \(\) => \{[\s\S]*?\};\n/g, '');
content = content.replace(/const getPublishedReportFileContent = \(\) => \{[\s\S]*?\};\n/g, '');

// Remove {isEditorial && (...)} block
const isEditorialStart = content.indexOf('{isEditorial && (');
if (isEditorialStart !== -1) {
    const isEditorialEnd = content.indexOf(')}', isEditorialStart + 10) + 2;
    content = content.slice(0, isEditorialStart) + content.slice(isEditorialEnd);
}

// Remove {updateFeedback && (...)} block
const updateFeedbackStart = content.indexOf('{updateFeedback && (');
if (updateFeedbackStart !== -1) {
    const updateFeedbackEnd = content.indexOf('</header>', updateFeedbackStart);
    if (updateFeedbackEnd !== -1) {
        content = content.slice(0, updateFeedbackStart) + content.slice(updateFeedbackEnd);
    }
}

// Remove MODAL: EXPORTAR RELATÓRIO PUBLICADO
const exportModalStart = content.indexOf('{showExportModal && (');
if (exportModalStart !== -1) {
    const nextModalMarker = content.indexOf('{/* =========================================================================', exportModalStart);
    if (nextModalMarker !== -1) {
         content = content.slice(0, exportModalStart) + content.slice(nextModalMarker);
    } else {
         const endDiv = content.lastIndexOf('</div>');
         // We'll just be careful, using a regex might be safer
    }
}

// More surgical removal of the export modal since the above might be fragile
content = content.replace(/\{\s*\/\* =+\s*MODAL: EXPORTAR RELATÓRIO PUBLICADO[\s\S]*?\{showExportModal && \([\s\S]*?\)\}\n/g, '');

fs.writeFileSync(filePath, content, 'utf-8');
console.log("StrategicReportView cleaned up");
