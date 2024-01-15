//your code here
document.getElementById("add").addEventListener("click", function () {
        var itemName = document.getElementById("item-name-input").value.trim();
        var itemPrice = parseFloat(document.getElementById("item-price-input").value);

        if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
          alert("Please enter valid item name and price.");
          return;
        }

        document.getElementById("item-name-input").value = "";
        document.getElementById("item-price-input").value = "";

        var table = document.getElementById("shopping-list");
        var newRow = table.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        cell1.textContent = itemName;
        cell2.textContent = "$" + itemPrice.toFixed(2);

        var total = parseFloat(
          document.getElementById("total").textContent.split("$")[1]
        );
        var newTotal = total + itemPrice;
        document.getElementById("total").textContent =
          "Grand Total: $" + newTotal.toFixed(2);
      });