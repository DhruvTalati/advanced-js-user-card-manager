let users = []; // ✅ ADD THIS

function shuffleUsers() {
  for (let i = users.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [users[i], users[j]] = [users[j], users[i]];
  }

  renderUsers(); // ✅ call render instead
}

function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((raw) => raw.json())
    .then((data) => {
      users = data.map((user, index) => ({
        ...user,
        image: `https://randomuser.me/api/portraits/men/${index + 1}.jpg`,
      }));

      renderUsers();
    });
}

function renderUsers() {
  document.querySelector(".users").innerHTML = "";

  users.forEach(function (user, index) {
    const card = document.createElement("div");
    card.className =
      "bg-gray-800 text-white rounded-2xl shadow-lg p-6 w-full text-center";

    // Image
    const img = document.createElement("img");
    img.src = user.image;
    img.className =
      "w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover";
    card.appendChild(img);

    // Name
    const name = document.createElement("h2");
    name.className = "text-xl font-semibold";
    name.textContent = user.name;
    card.appendChild(name);

    // Roll
    const roll = document.createElement("p");
    roll.className = "text-blue-400 text-sm mb-2";
    roll.textContent = "ID: " + user.id;
    card.appendChild(roll);

    // Bio
    const bio = document.createElement("p");
    bio.className = "text-gray-300 text-sm";
    bio.textContent = user.company.name;
    card.appendChild(bio);

    document.querySelector(".users").appendChild(card);
  });
}

getUsers();
document.querySelector("#refreshBtn").addEventListener("click", () => {
  shuffleUsers();
});
