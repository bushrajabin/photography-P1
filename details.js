import { dummy_Data } from "./data.js";
document.addEventListener("DOMContentLoaded", () => {
  const idSpan = document.getElementById("id");
  const detailsDiv = document.getElementById("details");
  // Get the ID from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id")); // Convert the id to a number

  // Update the ID in the page
  idSpan.textContent = id;

  // Find the corresponding data item in the dummy_Data array
  const details = dummy_Data?.find((item) => item.id === id);

  console.log("details", details);
  if (details) {
    // Populate the details in the detailsDiv
    detailsDiv.innerHTML = `
    <div class="left_image">
    <img src="${details.Image}" alt="${details.type}" width="300">
    </div>
    <div class="right_text">
            <h2> Name of The product:-${details.type}</h2>

            <p>Description:-  ${details.Description}</p></div>
        `;
  } else {
    // Handle the case where the ID is not found
    detailsDiv.innerHTML = `<p>Details not found for ID ${id}</p>`;
  }
});
