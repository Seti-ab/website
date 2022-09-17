function Sections(data){
    const container = document.getElementById("container");
    data.forEach(element => {
        const section=document.createElement("section");
        section.id=element.id;
        const title=document.createElement("h2");
        title.innerHTML=element.title;
        section.append(title);
        container.append(section);
    });
}