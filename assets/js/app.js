let cl = console.log;
const student = document.getElementById('stdForm');
const InputFname = document.getElementById('InputFname')
const InputLname = document.getElementById('InputLname')
const InputEmail = document.getElementById('InputEmail')
const InputNumber = document.getElementById('InputNumber')
const stdInfo = document.getElementById('stdInfo')


let StdArray = [];
const Onsubmit = (e) => {
    e.preventDefault();
    let std = {
        fname: InputFname.value,
        lname: InputLname.value,
        email: InputEmail.value,
        contact: InputNumber.value
    }
    // cl(std);
    StdArray.push(std);
    cl(StdArray);
    e.target.reset()
    let result = "";
    StdArray.forEach((std , i )=> {
        result +=
            `
                <tr class="text-warning">
                    <td>${i + 1}</td>
                    <td>${std.fname}</td>
                    <td>${std.lname}</td>
                    <td>${std.email}</td>
                    <td>${std.contact}</td>
                </tr>
            `
    })
    stdInfo.innerHTML = result;
}

const Onfocus = (e) => {
    e.target.style.border = '2px solid pink'
}
const Onblur = (e) => {
    e.target.style.border = '2px solid red'
}
const Onkeyup = (e) => {
    e.target.style.backgroundColor = 'thistle'
}
const Onkeydown = (e) => {
    e.target.style.backgroundColor = 'aqua'
}

student.addEventListener('submit', Onsubmit);
InputFname.addEventListener('focus' , Onfocus)
InputFname.addEventListener('blur' , Onblur);
InputFname.addEventListener('keyup' , Onkeyup);
InputFname.addEventListener('keydown' , Onkeydown);