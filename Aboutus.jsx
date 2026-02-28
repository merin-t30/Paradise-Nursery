import React from "react";

function AboutUs() {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "40px auto",
      padding: "30px",
      backgroundColor: "#f4fff6",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      color: "#2e7d32",
      marginBottom: "15px",
    },
    paragraph: {
      color: "#444",
      fontSize: "18px",
      lineHeight: "1.6",
    },
  };

  return (
    <div className="about-us-container" style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.paragraph}>
        Our mission is to bring nature closer to every home by providing fresh,
        healthy, and air-purifying plants that enhance well-being and create
        greener living spaces. We believe plants not only beautify interiors
        but also improve air quality and promote a healthier lifestyle for
        individuals and families.
      </p>
    </div>
  );
}

export default AboutUs;
