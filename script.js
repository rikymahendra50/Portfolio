const dataProject = [{
    bannerKiri: "banner",
    title: "Website SPNF-SKB Badung",
    deskripsi: "I once worked on a landing page <br> website from one of the government agencies, SPNF-SKB Badung.",
    cekweb: "Project Diklat/Index.html",
    link: "https://badungspnfskb.github.io/"
},{
    bannerKiri: "diklat",
    title: "Website E-Commerce",
    deskripsi: "Website project assigned by the Denpasar Training Center to create a website using Bootstrap, HTML, CSS, Javascript and PHP.",
    cekweb: "Project Diklat/Index.html",
    link: "https://github.com/rikymahendra50/Project-Diklat-Computer.git"
},{
    bannerKiri: "news-berita",
    title: "News Website",
    deskripsi: "Create a news website using html, css, javascript",
    cekweb: "School Project/index.html",
    link: "https://github.com/rikymahendra50/News-WEB.git"
},{
    bannerKiri: "Travelsia",
    title: "Website Vacation",
    deskripsi: "My practice when creating a travel website",
    cekweb: "STIKI 2020/index.html",
    link: "https://badungspnfskb.github.io/"
}];


// membuat fungsi Arrow
const arrowKanan = document.querySelector(".arrow-kanan");
const arrowKiri = document.querySelector(".arrow-kiri");

let halamanPage = 0;
arrowKiri.disabled = true;

// console.log(arrowKanan)
arrowKanan.addEventListener('click', () => {

       halamanPage += 1;    
       if (halamanPage === dataProject.length){
            // arrowKanan.disabled = true;
            // arrowKanan.style.visibility = "hidden";
            halamanPage = 0;
        }
    //    } else if (halamanPage > dataProject.length - 1){
    //         halamanPage = dataProject.length - 1;
    //    } 
       
       let projectHTML = "";

       const dataObject = dataProject[halamanPage];

       const bannerKiri = dataObject.bannerKiri;
       const title = dataObject.title;
       const deskripsi = dataObject.deskripsi;
       const cekweb = dataObject.cekweb;
       const link = dataObject.link;

       const html = `<div class="project-container-kiri">
                <img src="img/${bannerKiri}.png">
            </div>
            <div class="project-container-kanan">
                <div class="project-container-kanan-deskripsi">
                    <h3>${title}</h3>
                    <p>${deskripsi}</p>
                </div>
                <div class="project-link">
                    <a href="${link}" target:"_blank"><img src="img/GitHub_Invertocat_Logo.svg.png"></a>
                    <a href="${cekweb}" target="_blank"><p>View Website</p></a>
                </div>
            </div>`
            projectHTML += html

        document.querySelector(".project-container").innerHTML = projectHTML;

});


// console.log(arrowKiri)
arrowKiri.addEventListener('click', () => {
    let projectHTML = "";

       halamanPage -= 1;

       if (halamanPage < 0){
            halamanPage = dataProject.length-1;
        } 

       const dataObject = dataProject[halamanPage];
       
       const bannerKiri = dataObject.bannerKiri;
       const title = dataObject.title;
       const deskripsi = dataObject.deskripsi;
       const cekweb = dataObject.cekweb;
       const link = dataObject.link;

       const html = `<div class="project-container-kiri">
                <img src="img/${bannerKiri}.png">
            </div>
            <div class="project-container-kanan">
                <div class="project-container-kanan-deskripsi">
                    <h3>${title}</h3>
                    <p>${deskripsi}</p>
                </div>
                <div class="project-link">
                    <a href="${link} target:"_blank"><img src="img/GitHub_Invertocat_Logo.svg.png"></a>
                    <a href="${cekweb}" target="_blank"><p>View Web</p></a>
                </div>
            </div>`
            projectHTML += html

        document.querySelector(".project-container").innerHTML = projectHTML;

});

// melihat certificate 
const tombolView = document.querySelectorAll('.container-contact ul li button').forEach((viewbutton,index) => {
    viewbutton.addEventListener('click', () => {
        if (index === 0){
            window.open('img/toeic.pdf', '_blank');
        } else if(index === 1){
            window.open('img/database.pdf', '_blank');
        } else if(index === 2){
            window.open('img/fundamentals.pdf', '_blank');
        }
    });
});

