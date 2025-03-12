// Nav
var body = document.querySelector("body");
const navbarMenu = document.querySelector("#navigation");
const hamburgerMenu = document.querySelector("#navigation .toggle");

hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle("active");
    navbarMenu.classList.toggle("active");
    body.classList.toggle("open");
    ariaExpanded();
});


function ariaExpanded() {
    const UL = document.querySelector('#expanded');
    const Expanded = UL.getAttribute('aria-expanded');

    if (Expanded === 'false') {
        UL.setAttribute('aria-expanded', 'true');
    } else {
        UL.setAttribute('aria-expanded', 'false');
    }
}


document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});


// Mobile nav toggle
const dropDowns = Array.from(document.querySelectorAll('#navigation .dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('active')
    }
    item.addEventListener('click', onClick)
    }

// Pricing
const toggle = document.querySelector("#pricing .toggle");
        const cardGroup = Array.from(document.querySelectorAll('.card-group'))

        toggle.addEventListener('click', (e) => { 
            for (const item of cardGroup) {
                item.classList.toggle("active");
            }
            toggle.classList.toggle("active");
        });
//FAQ
const faqItems = Array.from(document.querySelectorAll('.faq-item'));
for (const item of faqItems) {
    const onClick = () => {
        item.classList.toggle('active');
    };
    item.addEventListener('click', onClick);
}

// MODAL WINDOW
const btnModal = document.querySelector("#cta button");
        //console.log(btnModal);
        btnModal.addEventListener("click", openModal);

        //declarar funcion 
        function openModal(event) {
            event.preventDefault();
            const modalWindow = document.querySelector("#modalWindow");
            modalWindow.classList.add("show-modal");

        }

        const btn_closeModal = document.querySelector("#modalWindow .close");
        btn_closeModal.addEventListener("click", closeModal);

        function closeModal() {
            const modalWindow = document.querySelector("#modalWindow");
            modalWindow.classList.remove("show-modal");
        }

    // El objeto window hace referencia toda la ventana de la web
        window.addEventListener("click", function(event){
            console.log("u clicked");
            const modalWindow = document.querySelector("#modalWindow");
            const condition = event.target === modalWindow;

            if (condition) {
                closeModal()
            }

        });


