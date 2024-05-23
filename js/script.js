//fungsi keliling
var hitungKelilingLink = document.getElementById("hitungKeliling");
var contentDiv = document.getElementById("main-section");

hitungKelilingLink.addEventListener("click", function (event) {
  event.preventDefault();

  contentDiv.innerHTML = `
    <div class="category">
        <h1>Keliling Segitiga</h1>
    </div>

    <!-- triangle canvas -->
    <div class="canvas-container">
        <canvas id="triangle" height="200"></canvas>
    </div>

    <!-- formula -->
    <div class="formula-container">
        <p>Rumus Kelilng Segitiga :</p>
        <p id="formula">K =  a + b + c</p>
    </div>

    <!-- formula description -->
    <div class="keterangan">
        <p>Keterangan :</p>
        <ul>
            <li>K = Keliling</li>
            <li>a = sisi 1</li>
            <li>b = sisi 2</li>
            <li>c = sisi 3</li>
        </ul>
    </div>

    <hr>

    <!-- calculator -->
    <section class="calculator">
        <h2>Hitung Kelling Segitiga</h2>
        <div id="calculator">
            <div>
                <form id="kelilingForm">
                    <div>
                        <div class="input-group">
                            <label for="sisi1">a:</label>
                            <input id="sisi1" type="number" name="sisi1" step="0.01">
                        </div>
                        <div class="input-group">
                            <label for="sisi2">b:</label>
                            <input id="sisi2" type="number" name="sisi2" step="0.01">
                        </div>
                        <div class="input-group">
                            <label for="sisi3">c:</label>
                            <input id="sisi3" type="number" name="sisi3" step="0.01">
                        </div>
                    </div>
                    <button type="submit">Hitung</button>
                </form>
            </div>
            <div>
                <h1 id="result">Keliling = 0</h1>
            </div>
        </div>
    </section>`;
  gambarSegitiga();

  var kelilingForm = document.getElementById("kelilingForm");
  kelilingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var sisi1 = parseFloat(document.getElementById("sisi1").value);
    var sisi2 = parseFloat(document.getElementById("sisi2").value);
    var sisi3 = parseFloat(document.getElementById("sisi3").value);

    var keliling = sisi1 + sisi2 + sisi3;

    var resultDisplay = document.getElementById("result");
    resultDisplay.textContent = "Keliling = " + keliling.toFixed(2);
  });
});

// fungsi luas
var luasForm = document.getElementById("luasForm");
luasForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var alas = parseFloat(document.getElementById("alas").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value);

  var luas = 0.5 * alas * tinggi;

  var resultDisplay = document.getElementById("result");
  resultDisplay.textContent = "Luas = 0" + luas.toFixed(2);
});



//fungsi untuk menggambar segitiga
function gambarSegitiga() {
  var canvas = document.getElementById("triangle");
  var ctx = canvas.getContext("2d");
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var centerY = canvasHeight / 2;

  ctx.beginPath();
  ctx.moveTo(canvasWidth / 2, centerY - 50);
  ctx.lineTo(canvasWidth / 2 - 50, centerY + 50);
  ctx.lineTo(canvasWidth / 2 + 50, centerY + 50);
  ctx.lineTo(canvasWidth / 2, centerY - 50);
  ctx.lineTo(canvasWidth / 2, centerY + 50);
  ctx.closePath();

  ctx.fillStyle = "#FF0000";
  ctx.fill();

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#000";
  ctx.font = "16px Arial";
  ctx.fillText("a", canvasWidth / 2.05, centerY + 65); // Label a
  ctx.fillText("b", canvasWidth / 2.9, centerY + 2); // Label b
  ctx.fillText("c", canvasWidth / 1.6, centerY + 2); // Label c
  ctx.fillText("t ", canvasWidth / 2.2, centerY + 30); // Label tinggi
}

window.onload = gambarSegitiga();