const sellers = [
    {
        name: "John Doe",
        solded: 100,
    },
    {
        name: "Jane Smith",
        solded: 150,
    },
    {
        name: "Alice Johnson",
        solded: 200,
    },
    {
        name: "Bob Brown",
        solded: 120,
    },
    {
        name: "Charlie Davis",
        solded: 180,
    },
    {
        name: "John Doe",
        solded: 90,
    }
]

function fn(sellers) {
    const solded_obj = {};

    for (const seller of sellers) {
        if (solded_obj[seller.name] === undefined) {
            solded_obj[seller.name] = 0;
        }
        solded_obj[seller.name] += seller.solded;
    }
    return solded_obj;
}

console.log(fn(sellers));