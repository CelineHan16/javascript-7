var button1 = document.querySelector ("#light_mode");
var button2 = document.querySelector ("#dark_mode");
var button3 = document.querySelectorAll (".show_btn");
var allArticles = document.querySelectorAll ('article');

button1.addEventListener('click', function() {
  document.body.style.background = "white";
  document.body.style.color = "black";
});
button2.addEventListener('click', function() {
  document.body.style.background = "black";
  document.body.style.color = "white";
});
button3.addEventListener('click', function() {
  for (let article of allArticles) {
    article.innerHTML += " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam ducimus alias facere natus officia neque sunt! Est reprehenderit dolorem nobis optio at esse mollitia libero, harum hic officia dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odio eum tenetur perferendis, eveniet, nostrum possimus nisi praesentium animi expedita earum quam cum officiis impedit nesciunt veritatis itaque repellendus asperiores quis tempora vel voluptate maiores velit deleniti! Eligendi provident asperiores, illum magni quos est suscipit? Autem velit id ratione recusandae!";
  }
});