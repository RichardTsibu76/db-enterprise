const form = document.querySelector('form');
const nameInput = document.querySelector('.firstName');
const emailInput = document.querySelector('.email');
const messageInput= document.querySelector('.message');

const serviceID = "service_81sixo5";
const templateID = "template_xlw0p8e";
const publickey = "v1jqec9Elo8f6Ibdq";

emailjs.init(publickey);
form.addEventListener("submit", (e) => {
  e.preventDefault();  
  const inputData = {
    from_name: nameInput.value,
    user_email: emailInput.value,
    message: messageInput.value,

  };
  emailjs.send('service_81sixo5', 'template_xlw0p8e', inputData).then(
    ()=>{
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        console.log("Success!");

    },
     (error) => {
        console.log(error)
     }
  );
});