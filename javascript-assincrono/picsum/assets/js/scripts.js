let imgElement = document.getElementById('photo');
document.getElementById('change-photo').addEventListener('click', loadImage);

async function getPhoto() {
  try {
    const response = await fetch('https://picsum.photos/1000/562.webp');
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

async function loadImage() {
  const data = await getPhoto();
  imgElement.src = data.url;
}

loadImage();