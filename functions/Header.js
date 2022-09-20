function Header(navItems) {
    //create nav element
    const container = document.getElementById("container");
    const navBar = document.createElement("nav");
    navBar.id = "navBar"
    container.prepend(navBar);
    const navItemsUl = document.createElement('ul');

    //mainImage
    const titleContainer = document.createElement("div");
    titleContainer.id = 'titleContainer';
    const imageContainer = document.createElement("div");
    imageContainer.id = "imageContainer";
    const circle = document.createElement("div");
    circle.classList.add("circle");
    imageContainer.append(circle);
    const myPicture = document.createElement("img");
    myPicture.src = "../assets/images/profile.jpg";
    myPicture.alt = 'profile'
    myPicture.id = 'profileImage'
    imageContainer.append(myPicture)
    titleContainer.append(imageContainer);
    //description
    const description = document.createElement("div");
    description.id = "description";
    const farsiTitle = document.createElement("h1");
    farsiTitle.innerHTML = "ستایش ابوئی"
    const englishTitle = document.createElement("h2");
    englishTitle.innerHTML = "Setayesh Abouei";
    description.append(farsiTitle)
    description.append(englishTitle);
    const text = document.createElement("p");
    text.innerHTML = "Junior Front-end Developer";
    description.append(text);
    titleContainer.append(description);

    navBar.append(titleContainer);
    //navigation menu
    navItems.forEach(element => {
        let navItem = document.createElement('li');
        let linkItem = document.createElement('a');
        linkItem.innerText = element.title;
        linkItem.href = '#' + element.scrollTo;
        navItem.append(linkItem);
        navItemsUl.append(navItem);
    })

    navBar.append(navItemsUl);
}
