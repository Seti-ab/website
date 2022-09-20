function PdfViewer(url, type) {
    const pdfContainer=document.createElement("div");
    pdfContainer.classList.add("pdfContainer");
    const pdf = document.createElement("iframe");
    pdf.src = url;
    switch (type) {
        case 'cv':
            pdfContainer.style = "max-width:550px";
            break;
        case 'projects':
            pdf.style="height:410px";
            pdfContainer.style = "max-width:800px";
            break;
        default:
            pdfContainer.style = "max-width:750px";
    }
    pdf.border = 'none';
    pdfContainer.append(pdf);
    return pdfContainer;
}