const insert = document.querySelector(".insert");
import "./style.css";
window.addEventListener("keydown", (e) => {
  console.log(e);
  insert.innerHTML = `
    <div class="card text-center mb-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Key</h5>
        <p class="card-text">${e.key == " " ? "Space" : e.key}</p>
      </div>
    </div>
    <div class="card text-center mb-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Key Code</h5>
        <p class="card-text">${e.keyCode}</p>
      </div>
    </div>
    <div class="card text-center mb-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Code</h5>
        <p class="card-text">${e.code}</p>
      </div>
    </div>`;
});
