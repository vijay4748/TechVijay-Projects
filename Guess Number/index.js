let number;

const generate_number = () => {
    let n1 = Math.random();

    let n2 = n1 * 10;


    n2 = Math.trunc(n2);


    n2 = (n2 % 6) + 1;

    number = n2;
    console.log(number);

};
// generate_number();"
const generate_number_btn_click = () => {

    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "none";
    document.querySelector("#section3").style.display = "block";

    setTimeout(() => {
        generate_number();

        document.querySelector("#field").value = "";

        document.querySelector("#section1").style.display = "none";
        document.querySelector("#section2").style.display = "block";
        document.querySelector("#section3").style.display = "none";

    }, 3000);
};
//check number
const check_number = () => {
    let value = document.querySelector("#field").value;

    if (value != '') {
        let temp = parseInt(value);
        if (temp <= 6 && temp >= 0) {
            console.log(value);
            if (value == number) {
                swal("Congrats 👍", "You Won 🥇", 'success');
            } else {
                swal("Sorry, Incorrect ❎", "Try Again", 'info');
            }
            document.querySelector('#gen_num').innerHTML = `(Last time, it was : ${number})`;
            generate_number_btn_click();
        } else {
            swal("Oops", "Number must be in between 1 to 6", "error");
        }
    } else {
        swal(" 😠", "Please enter any number !", 'warning');
    }



    generate_number_btn_click();
};