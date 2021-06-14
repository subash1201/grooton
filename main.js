function fetchData(){
    fetch("https://grooton3.free.beeceptor.com/my/api/path").then(response => {
        return response.json();
    })
    .then(userdata => {
        console.log(userdata);
        const userhtml = userdata.map(user => 
            {
                return `<div class="user-content col-lg-3 col-md-4 col-sm-12">
                        <h2 class="heading"> ${user.name}</h2> 
                        <p class="age"><b>Age</b> : ${user.age}</p>
                        <p class="dob"><b>D.O.B</b> : ${user.dob}</p>
                        <p class="fName"><b>First Name</b> : ${user.firstName}</p>
                        <p class="lName"><b>Last Name</b> : ${user.lastName}</p>
                        <p class="address1"><b>Address 1</b> : ${user.more.address_line1}</p>
                        <p class="address2"><b>Address 2</b> : ${user.more.address_line2}</p>
                        <p class="phone"><b>Phone No.</b> : ${user.more.phone}</p>
                        </div>` ;
            }).join(" ");
            document.querySelector(".row").innerHTML=userhtml;
    })
    .catch(error => {
        console.log(error);
    });
}

fetchData();