const submitBtn = document.querySelector(".submit");
const imageInput = document.getElementById("media");

imageInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const imageData = reader.result;
      const wishData = { media: imageData };
      localStorage.setItem("wish", JSON.stringify(wishData));
      alert("wish saved");
    };
    reader.readAsDataURL(file);
  }
});
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const wishTo = document.getElementById("receiver").value;
  const wish = document.getElementById("wish").value;
  const mediaData = JSON.parse(localStorage.getItem("wish"));
  const wishType = document.getElementById("wish-type").value;
  const sendBy = document.getElementById("send").value;
  const formData = {
    wishTo: wishTo,
    wish: wish,
    media: mediaData ? mediaData.media : null,
    wishType: wishType,
    sendBy: sendBy,
  };

  console.log("clicked");
  localStorage.setItem("wishData", JSON.stringify(formData));
});

function redirectToWishingPage() {
  window.location.href = "wishing_page.html";
}
