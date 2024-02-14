const organizationChart = {
  name: "CEO",
  subordinates: [
    {
      name: "CTO",
      subordinates: [
        {
          name: "Engineering Manager",
          subordinates: [
            {
              name: "Software Engineer A"
            },
            {
              name: "Software Engineer B"
            }
          ]
        },
        {
          name: "Product Manager"
        }
      ]
    },
    {
      name: "CFO",
      subordinates: [
        {
          name: "Accounting Manager"
        },
        {
          name: "Finance Manager",
          subordinates: [
            {
              name: "Financial Analyst A"
            },
            {
              name: "Financial Analyst B"
            }
          ]
        }
      ]
    }
  ]
};

function displayOrganizationChart(node, level = 0) {
  console.log(" ".repeat(level * 2) + node.name);
  if (node.subordinates) {
    node.subordinates.forEach((subordinate) => {
      displayOrganizationChart(subordinate, level + 1);
    });
  }
}

displayOrganizationChart(organizationChart);

// Complex JSON w array of nested objects which each arr element may have 0 or more nested objects.

const data = {
  courses: [
    {
      id: 1,
      name: "JavaScript Basics",
      lessons: [
        { id: 1, title: "Variables and Data Types" },
        { id: 2, title: "Functions and Scope" }
      ]
    },
    {
      id: 2,
      name: "Advanced CSS",
      lessons: []
    },
    {
      id: 3,
      name: "React Fundamentals",
      lessons: [
        { id: 1, title: "Components and Props" },
        { id: 2, title: "State and Lifecycle" },
        { id: 3, title: "Handling Events" }
      ]
    }
  ]
};

// Iterate over the courses array
data.courses.forEach((course) => {
  console.log(`Course: ${course.name}`);

  // Check if there are lessons for the course
  if (course.lessons.length > 0) {
    console.log("Lessons:");
    // Iterate over the lessons array
    course.lessons.forEach((lesson) => {
      console.log(`- ${lesson.title}`);
    });
  } else {
    console.log("No lessons available");
  }
});
