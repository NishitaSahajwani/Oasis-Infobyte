document.querySelector(".add").onclick = function () {
    if (document.querySelector(".input").value.length == 0) {
      alert("Please Enter a Task");
    } else {
      document.querySelector(".all").innerHTML += `
        <div class="allTask">
            <ul class="task">
                ${document.querySelector("input").value}
            </ul>
            <button class="dlt">Delete</button> 
        </div>
    `;
      document.querySelector(".input").value = "";
      var current_tasks = document.querySelectorAll(".dlt");
      for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
          this.parentNode.remove();
        };
      }
    }
  };