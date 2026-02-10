const input = document.getElementById("imageInput");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    if (input.files.length === 0) {
        alert("اختاري صورة أولاً");
        return;
    }

    alert("تم رفع الصورة بنجاح (التحليل قادم)");
});
