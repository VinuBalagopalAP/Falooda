// Fetch the JSON data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Store the menu items in an array
    const menuItems = data;
    let currentItemIndex = 0;

    // Update the item details with the current item
    const updateItemDetails = () => {
      const currentItem = menuItems[currentItemIndex];
      document.getElementById("menu-image").src = currentItem.image_url;
      document.getElementById("item-name").innerHTML = currentItem.name;
      document.getElementById(
        "item-calories"
      ).innerHTML = `Calories: ${currentItem.calories} cal`;
      document.getElementById(
        "item-price-range"
      ).innerHTML = `Price Range: ₹${currentItem.price_range.min.toFixed(
        2
      )} - ₹${currentItem.price_range.max.toFixed(2)}`;
    };

    // Update the item details when the page loads
    updateItemDetails();

    // Add a click event listener to the button
    document.getElementById("change-item-btn").addEventListener("click", () => {
      // Increment the current item index
      currentItemIndex++;
      if (currentItemIndex >= menuItems.length) {
        currentItemIndex = 0;
      }

      // Update the item details with the new item
      updateItemDetails();
    });
  })
  .catch((error) => console.log(error));
