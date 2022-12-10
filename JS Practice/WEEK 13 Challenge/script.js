const headerContainer = document.createElement("div");
const header = document.createElement("h3");
const headerNav = document.createElement("ul");
const body = document.querySelector("body")

//lis
for (i = 0 ; i< 4; i++){
    let newLi = document.createElement("li")
    let liA = document.createElement("a");
    newLi.style.cssText = `
        list-style-type : none;
        display: inline-block;
        padding: 0 6px;
        font-size: 13px;
        color: #7C7877;
    `;
    liA.href = "#"
    newLi.appendChild(liA)
    newLi.id = i;
    if(newLi.id == 0) newLi.textContent = "Home";
    if(newLi.id == 1) newLi.textContent = "About";
    if(newLi.id == 2) newLi.textContent = "Service";
    if(newLi.id == 3) newLi.textContent = "Contact";
    headerNav.append(newLi)

}


//style
header.textContent = "Elzero";
header.style.cssText = `
        color: #23A96E;
        font-weight: bold;
        font-size: 26px;
`;
headerContainer.style.cssText = `
        display: flex;
        padding: 20px;
        background-color: rgb(255, 255, 255);
        justify-content: space-between;
        align-items: center;
        height: 10px
`
body.style.cssText = "background: #ECECEC";
headerNav.style.cssText = `
        padding: 0px;
        margin: 0px;
        display: flex;
        list-style: none;
`
//append
document.body.appendChild(headerContainer);
headerContainer.append(header, headerNav)

//------Menue
const menuContainer = document.createElement("div");
document.body.append(menuContainer)

menuContainer.style.cssText = `
        display: flex;
        padding: 20px;
        flex-wrap: wrap; 
        justify-content: center;
        gap: 20px;
        min-height: calc(100vh - 142px);
        box-sizing: border-box;

`

//products
for(i = 0; i < 15 ; i++){
    let product = document.createElement("div");
    let productNo = document.createElement("span");
    let productText = document.createTextNode("product")

    product.style.cssText = `
            padding: 20px;
            background-color: white;
            border = 1px solid #eee;
            width: calc((100% - 40px) /3);
            box-sizing: border-box;
            text-align: center;
            color: rgb(136, 136, 136);
            border-radius: 6px;
    `
    productNo.style.cssText = `
            font-size: 40px;
            color: black;
            font-weight: normal;
            display: block;
            margin-bottom: 10px;
            margin-top: 10x;
    `

    productNo.textContent = `${i + 1}`;
    menuContainer.append(product)
    product.append(productNo, productText)

}

//footer
const footer = document.createElement("footer");
const footerText = document.createTextNode("copyRight 2022 | javaScriptOnly");

footer.append(footerText);
document.body.append(footer);

footer.style.cssText = `
        background-color: #23A96E;
        font-size: 26px;
        text-align: center;
        padding: 20px;
        color: white;
`