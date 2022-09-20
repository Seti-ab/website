function Sections(data) {
    const container = document.getElementById("container");
    data.forEach(element => {
        const section = document.createElement("section");
        section.id = element.id;
        const title = document.createElement("h2");
        title.innerHTML = element.title;
        section.append(title);
        const content = document.createElement("div");

        console.log("ele", typeof element.content)
        switch (element.id) {

            case 'projects':
                element.content.forEach((prj) => {
                    const projectContainer = document.createElement("div");
                    projectContainer.classList.add('projectContainer');
                    const projectTitle = document.createElement("h3");
                    projectTitle.innerText = prj.title;
                    projectContainer.append(projectTitle);
                    const projectText=document.createElement("p");
                    projectText.innerHTML=prj.text;
                    projectContainer.append(projectText)
                    projectContainer.append(PdfViewer(prj.pdfUrl,'projects'));
                    content.append(projectContainer);
                })

                break;
            default:
                if (element.content.hasOwnProperty('text')) {
                    const text = document.createElement("p");
                    text.innerText = element.content.text;
                    content.append(text);
                }
                if (element.content.hasOwnProperty('pdfUrl')) {
                    content.append(PdfViewer(element.content.pdfUrl, 'cv'));
                }
                break;
        }

        content.classList.add("content");
        section.append(content);
        container.append(section);
    });
}