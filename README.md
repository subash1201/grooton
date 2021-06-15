# grooton

register.html:
    In the registration page(dummy page), the user will register by providing email address and password and the page will redirect to the user database where the user informations were displayed.

login.html:
    Once the user registered their account , they can login by providing their correct email id and password and the page will redirect to the user information as previous.

user.html: 
    Here's where the main.js is linked.

    main.js
        In the function Data ,the fetch() method is called and the json file is fetched from the network.
        The map function is used to trace every element of the array and the function is assigned to the const - userhtml.
        By using DOM (document.querySelector(".row").innerHTML=userhtml;) , the fetched data get reflected to user.html file.
