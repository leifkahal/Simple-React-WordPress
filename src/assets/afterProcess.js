 function afterProcess() {
    document.getElementById('footer_dark').style.opacity = '1';
   
    if (document.querySelector(".single-post")) {
        document.querySelector(".single-post").style.opacity = "1"
    }
   
    //custom classes for WP Forms Builder - Gutenberg Froms
    const formInputs = document.querySelectorAll("input");
    formInputs.forEach(function (form_input) {
        form_input.classList.add("form-control")
    });
    const formSelect = document.querySelectorAll("select");
    formSelect.forEach(function (form_select) {
        form_select.classList.add("form-control");
    });
    const dateInput = document.querySelectorAll("input[data-validation='date']");
    dateInput.forEach(function (date_input) {
        date_input.readOnly = false;
        date_input.onload = () => { date_input.type = 'text' };
        date_input.onclick = () => { date_input.type = 'date' };
        date_input.placeholder = "Please select a date";
    });
    const phoneInput = document.querySelectorAll("input[data-phone='true']");
    phoneInput.forEach(function (phone_input) {
        phone_input.type = "tel";
        phone_input.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
        phone_input.readOnly = false;
    });
    if (document.querySelector(".react-fof-wrapper")) {
        document.querySelector('.react-fof-wrapper').style.display = 'none';
    }
    if (document.querySelector(".react-fof-wrapper")) {
        document.querySelector('.react-fof-wrapper').style.display = 'block';
    }
    if (document.querySelector("#four-o-four")) {
        document.querySelector("#four-o-four").style.display = "block"
    }
    document.getElementById('spinner').style.display = 'none';
 }

 export default afterProcess
