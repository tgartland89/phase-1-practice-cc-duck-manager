document.addEventListener('DOMContentLoaded', function() {
  let duckNav = document.querySelector('#duck-nav');
  let duckDisplay = document.querySelector('#duck-display');
  let duckNameElement = document.querySelector('#duck-display-name');
  let duckImageElement = document.querySelector('#duck-display-image');
  let likesCountElement = document.querySelector('#duck-display-likes');
  let newDuckForm = document.querySelector('#new-duck-form');

  fetch('http://localhost:3000/ducks')
    .then(response => response.json())
    .then(data => {
      data.forEach(duck => {
        createDuckElement(duck);
      });

      newDuckForm.addEventListener('submit', event => {
        event.preventDefault();
        let newDuckNameInput = document.querySelector('input[name="duck-name-input"]');
        let newDuckImageInput = document.querySelector('input[name="duck-image-input"]');
        let newDuckName = newDuckNameInput.value;
        let newDuckImageUrl = newDuckImageInput.value;
        let newDuck = {
          name: newDuckName,
          img_url: newDuckImageUrl,
          likes: 0
        };

        createDuckElement(newDuck);
        newDuckNameInput.value = '';
        newDuckImageInput.value = '';
      });
    });

  function createDuckElement(duck) {
    let img = document.createElement('img');
    img.src = duck.img_url;
    img.alt = duck.name;
    duckNav.appendChild(img);

    img.addEventListener('click', () => {
      duckNameElement.textContent = duck.name;
      duckImageElement.src = duck.img_url;
      duckImageElement.alt = duck.name;
      likesCountElement.textContent = duck.likes;
      duckDisplay.style.display = 'block';
    });

    let likesButton = document.querySelector('#duck-display-likes');
    likesButton.addEventListener('click', () => {
      duck.likes += 1;
      likesCountElement.textContent = `${duck.likes} likes`;
    });
  }
});