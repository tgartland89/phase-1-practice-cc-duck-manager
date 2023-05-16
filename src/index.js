document.addEventListener('DOMContentLoaded', function() {
  const duckNav = document.querySelector('#duck-nav');
  const duckDisplay = document.querySelector('#duck-display');
  const duckNameElement = document.querySelector('#duck-display-name');
  const duckImageElement = document.querySelector('#duck-display-image');
  const likesCountElement = document.querySelector('#duck-display-likes');

  fetch('http://localhost:3000/ducks')
    .then(response => response.json())
    .then(data => {
      data.forEach(duck => {
        const img = document.createElement('img');
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
      });

      const likesButton = document.querySelector('#duck-display-likes');
      likesButton.addEventListener('click', () => {
        const currentLikes = parseInt(likesCountElement.textContent);
        // const duckIndex = duckNav.querySelector('.active').dataset.index;
        // data[duckIndex].likes = currentLikes + 1;
        likesCountElement.textContent = currentLikes + 1;
      });
    });
});














