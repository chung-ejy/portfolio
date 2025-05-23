import React from "react";
import oriflectionsImg from "../../assets/oriflections.png"; // Import image from assets

const OritudeDesc = () => {
  const title = "Oritude";
  const tagline = "Quantitative Finance Web Application";
  const dates = "April 2025 - Present";
  const projectLink = "https://oritude.onrender.com/oriflections";
  const description = `
    Description: Quantitative finance web application to showcase research and a fun backtesting app. 
    Currently prototyping and would love to gain some feedback.
  `;

  return (
    <div className="card cardbody bg-light p-2">
      <h1 className="cardtitle text-primary text-center">{title}</h1>
      <h3 className="text-center">{tagline}</h3>

      {/* Display Image */}
      <div className="text-center">
        <img src={oriflectionsImg} alt="Oriflections" className="img-fluid rounded border border-primary mb-3 w-75" />
      </div>

      <table className="table table-responsive-sm text-center">
        <tbody>
          <tr>
            <td className="d-none d-lg-table-cell">{dates}</td>
            <td className="d-none d-lg-table-cell">
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                {projectLink}
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="m-2">{description}</p>
    </div>
  );
};

export default OritudeDesc;