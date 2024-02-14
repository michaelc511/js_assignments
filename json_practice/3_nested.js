const complexJSON = {
  employees: [
    {
      name: "John",
      department: "Engineering",
      projects: [
        { name: "Project A", status: "completed" },
        { name: "Project B", status: "ongoing" }
      ]
    },
    {
      name: "Alice",
      department: "Marketing",
      projects: [
        { name: "Campaign X", status: "planned" },
        { name: "Campaign Y", status: "ongoing" }
      ]
    }
  ]
};

// Using map to iterate over employees and their projects
complexJSON.employees.map((employee) => {
  console.log("Employee:", employee.name);
  console.log("Department:", employee.department);
  console.log("Projects:");
  employee.projects.map((project) => {
    console.log(" - Name:", project.name);
    console.log("   Status:", project.status);
  });
  console.log("------------------------");
});

// another one

const shoppingListsData = {
  shoppingLists: [
    {
      name: "Groceries",
      items: [
        {
          name: "Apples",
          category: "Fruits",
          quantity: 3
        },
        {
          name: "Milk",
          category: "Dairy",
          quantity: 1
        }
      ]
    },
    {
      name: "Office Supplies",
      items: [
        {
          name: "Notebooks",
          category: "Stationery",
          quantity: 5
        },
        {
          name: "Pens",
          category: "Stationery",
          quantity: 10
        }
      ]
    }
  ]
};

shoppingListsData.shoppingLists.map((shoppingList) => {
  console.log("Shopping List:", shoppingList.name);
  console.log("Items:");
  shoppingList.items.map((item) => {
    console.log(" - Name:", item.name);
    console.log("   Category:", item.category);
    console.log("   Quantity:", item.quantity);
  });
  console.log("-------------------------");
});
