const SERVICES = {
Facials: [
{ name: "Hydra Facial", desc: "Deep cleaning", price: "PKR 4500" }
],
Hair: [],
Makeup: [],
'Skin Care': [],
Nails: []
};

const VIDEOS = {
requested_instagram: "https://www.instagram.com/reel/DXZaL14jKWV/embed/"
};
function handleInquiry(e){
e.preventDefault();

document.getElementById("modal-user-name").innerText =
document.getElementById("inq-name").value;

document.getElementById("modal-user-email").innerText =
document.getElementById("inq-email").value;

document.getElementById("inquiry-success-modal").classList.add("active");
}
function closeModal(){
document.getElementById("inquiry-success-modal").classList.remove("active");
}
function loadVideo(){
document.getElementById("reels-iframe").src = VIDEOS.requested_instagram;
}

document.addEventListener("DOMContentLoaded", ()=>{
loadVideo();
});
