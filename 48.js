function combine_inventories(inventory_a, inventory_b) {
    const combined_inventory = {};

    for (const item in inventory_a) {
        if (inventory_a.hasOwnProperty(item)) {
            combined_inventory[item] = inventory_a[item];
        }
    }

    for (const item in inventory_b) {
        if (inventory_b.hasOwnProperty(item)) {
            if (combined_inventory.hasOwnProperty(item)) {
                combined_inventory[item] += inventory_b[item];
            } else {
                combined_inventory[item] = inventory_b[item];
            }
        }
    }

    return combined_inventory;
}

const inventory_a = {
    apple: 10,
    banana: 5,
    orange: 8
};

const inventory_b = {
    banana: 7,
    grape: 12,
    apple: 3
};

const final_inventory = combine_inventories(inventory_a, inventory_b);

console.log(final_inventory);

