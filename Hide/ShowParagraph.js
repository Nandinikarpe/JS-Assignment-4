document.getElementById("togglePara").addEventListener("click", function () {
    const para = document.getElementById("myPara");
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});
