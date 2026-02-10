const input = document.getElementById("imageInput");
const result = document.getElementById("result");

input.addEventListener("change", () => {
  const file = input.files[0];
  if (!file) return;

  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);

  result.innerHTML = "";
  result.appendChild(img);
});
