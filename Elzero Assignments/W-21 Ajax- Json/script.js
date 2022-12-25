const articlesRequest = new XMLHttpRequest();
articlesRequest.open('GET', 'articles.json');
articlesRequest.send();
articlesRequest.onreadystatechange = function(){
    if(articlesRequest.readyState === 4 && articlesRequest.status === 200){
        // console.log(this.responseText);
        // console.log("Data Loaded")
        let mainData = JSON.parse(this.responseText);
        const div = document.createElement('div');
        div.id = 'data';
        mainData.map((article)=>{
            // article.section = 'All';
            div.innerHTML += `
            <div>
            <h2>${article.title}</h2>
            <p>${article.article}<p>
            <p>author: ${article.author}<p>
            <p>Category: ${article.section}
            `;
        })
        document.body.appendChild(div)
        console.log(mainData)
    }
}