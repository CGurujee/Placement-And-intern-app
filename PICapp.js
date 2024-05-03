6.2 async function fetchStudents(gender) {
    try {
      const response = await fetch(https://freetestapi.com/api/v1/students);
      if (!response.ok) {
        throw new Error(HTTP error! status: ${response.status});
      }
      const data = await response.json();
      // Filter students based on gender (if provided)
      if (gender) {
        return data.filter((student) => student.gender === gender);
      } else {
        return data; // Return all students if no gender filter is provided
      }
    } catch (error) {
      console.error("Error fetching students:", error);
      return []; // Return empty array in case of errors
    }
  }
  
  // Example usage:
  fetchStudents("male") // Filter students by male gender
    .then((students) => {
      console.log("Filtered students:", students);
    })
    .catch((error) => {
      console.error("Error fetching students:", error);
    });
  
  // Fetch all students without filtering
  fetchStudents()
    .then((students) => {
      console.log("All students:", students);
    })
    .catch((error) => {
      console.error("Error fetching students:", error);
    });