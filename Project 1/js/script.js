// const inputSearch = document.querySelector(".input-search2")
// const autoBox = document.querySelector(".autobox")
// inputSearch.onkeyup = (e)=> {
//     let checkData = e.target.value
//     let dataArray = []
//     if(checkData) {
//         dataArray = recomentlist.filter((data)=> {
//             return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase())
//         })
//         // console.log (dataArray)
//         dataArray = dataArray.map((data)=>{
//             return data = '<li>' + data + '</li>'
//         })
//         // console.log (dataArray)
//         showAdress (dataArray)
//     }
// }

// function showAdress (list) {
//     let listData
//     if (!list.length) {

//     } else {
//         listData = list.join('')
//     }
//     autoBox.innerHTML = listData
// }
document.addEventListener('DOMContentLoaded', function () {
    const inputSearch = document.querySelector(".input-search2");
    const autoBox = document.querySelector(".autobox");

    let isUserTyping = false; // Thêm biến kiểm soát

    inputSearch.addEventListener('input', function (e) {
        isUserTyping = true; // Người dùng đang nhập
        let checkData = e.target.value.trim().toLowerCase();
        let dataArray = [];

        if (checkData) {
            dataArray = recomentlist.filter((data) => {
                return data.toLowerCase().includes(checkData);
            });

            dataArray = dataArray.map((data) => {
                return '<li>' + data + '</li>';
            });

            showAdress(dataArray);
        } else {
            autoBox.innerHTML = '';
            isUserTyping = false; // Không có đang nhập
        }
    });

    function showAdress(list) {
        let listData;

        if (!list.length) {
            autoBox.innerHTML = '';
        } else {
            listData = list.join('');
            autoBox.innerHTML = listData;

            // Nếu không phải là sự kiện load lại trang, thì hiển thị
            if (isUserTyping) {
                autoBox.style.display = 'block';
            }
        }
    }

    document.addEventListener('click', function (e) {
        if (!e.target.matches('.input-search2') && !e.target.matches('.autobox li')) {
            autoBox.style.display = 'none';
        }
    });

    autoBox.addEventListener('click', function (e) {
        if (e.target.matches('li')) {
            inputSearch.value = e.target.innerText;
            autoBox.style.display = 'none';
        }
    });

    let recomentlist = [
        "Hà Nội",
        "Hồ Chí Minh",
        "Đà Nẵng",
        "Huế",
        "Hải Dương",
        "Cần Thơ",
        "Quảng Ninh",
        "Bắc Ninh",
        "Ninh Bình",
        "Hải Phòng",
        "Hưng Yên",
        "Nam Định",
        "Thái Bình",
        "Hà Nam",
        "Vĩnh Phúc",
        "Phú Thọ",
        "Thái Nguyên",
        "Lào Cai",
        "Yên Bái",
        "Sơn La",
        "Hòa Bình",
        "Tuyên Quang",
        "Cao Bằng",
        "Bắc Giang",
        "Lạng Sơn",
        "Quảng Bình",
        "Quảng Trị",
        "Thừa Thiên-Huế",
        "Quảng Nam",
        "Quảng Ngãi",
        "Bình Định",
        "Phú Yên",
        "Khánh Hòa",
        "Ninh Thuận",
        "Bình Thuận",
        "Kon Tum",
        "Gia Lai",
        "Đắk Lắk",
        "Đắk Nông",
        "Lâm Đồng",
        "Bình Phước",
        "Tây Ninh",
        "Bình Dương",
        "Đồng Nai",
        "Long An",
        "Đồng Tháp",
        "Tiền Giang",
        "An Giang",
        "Bến Tre",
        "Vĩnh Long",
        "Trà Vinh",
        "Hậu Giang",
        "Kiên Giang",
        "Sóc Trăng",
        "Bạc Liêu",
        "Cà Mau"
    ];
});

//SIGNIN & SIGNUP
const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

// Email Validtion
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

// Confirm Password Validtion
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkEmail();
  createPass();
  confirmPass();

  //calling function on key up
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});