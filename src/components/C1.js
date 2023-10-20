import React, { useState } from "react";

function C1() {
  // State to store the birth date and calculated age
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  // Function to calculate the age
  const calculateAge = () => {
    // Convert the birth date and today's date to Date objects
    const birth = new Date(birthDate);
    const today = new Date();

    // Calculate the age based on the birth date
    let calculatedAge = today.getFullYear() - birth.getFullYear();

    // Check if the birthday has occurred this year
    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() < birth.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div style={styles.container}>
      <center>
        <h1 style={styles.title}>Age Calculator</h1>
        <h4 style={styles.subtitle}>Enter your date of birth</h4>
        <div style={styles.inputContainer}>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            style={styles.input}
          />
        </div>
        <br />
        <button style={styles.button} onClick={calculateAge}>
          Calculate Age
        </button>
        <br />
        <h3 style={styles.ageText} id="i1">
          {age !== "" ? `Your age is ${age} years.` : ""}
        </h3>
      </center>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    color: "black",
  },
  subtitle: {
    fontSize: "18px",
  },
  inputContainer: {
    display: "inline-block",
    marginRight: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    background: "blue",
    color: "white",
    width: "100px",
    height: "30px",
    cursor: "pointer",
    marginTop: "20px",
  },

  ageText: {
    marginTop: "20px",
  },
};

export default C1;
