import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Mentors.css";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [activeButton, setActiveButton] = useState("all");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const mentorsPerPage = 12; // Set how many mentors to display per page

  // Define subjects for each category
  const subjectsByCategory = {
    Kindergarten: ["Language Arts", "Math", "Science", "Art", "Social Studies"],
    HighSchool: [
      "Mathematics",
      "Science",
      "Literature",
      "History",
      "Foreign Language",
    ],
    College: [
      "Psychology",
      "Economics",
      "Computer Science",
      "Biology",
      "Philosophy",
    ],
    Technology: [
      "Web Development",
      "Data Science",
      "Graphic Design",
      "Cybersecurity",
      "AI",
    ],
  };

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        // Fetch 100 random users from Random User Generator
        const userResponse = await axios.get(
          "https://randomuser.me/api/?results=100"
        );
        const fetchedMentors = userResponse.data.results.map(
          (mentor, index) => {
            let category;
            let subject;

            // Assign subjects based on the category
            if (index < 25) {
              category = "Kindergarten";
              subject =
                subjectsByCategory.Kindergarten[
                  Math.floor(
                    Math.random() * subjectsByCategory.Kindergarten.length
                  )
                ];
            } else if (index < 50) {
              category = "HighSchool";
              subject =
                subjectsByCategory.HighSchool[
                  Math.floor(
                    Math.random() * subjectsByCategory.HighSchool.length
                  )
                ];
            } else if (index < 75) {
              category = "College";
              subject =
                subjectsByCategory.College[
                  Math.floor(Math.random() * subjectsByCategory.College.length)
                ];
            } else {
              category = "Technology";
              subject =
                subjectsByCategory.Technology[
                  Math.floor(
                    Math.random() * subjectsByCategory.Technology.length
                  )
                ];
            }

            return {
              id: index + 1,
              name: `${mentor.name.first} ${mentor.name.last}`,
              category,
              subject,
              image: mentor.picture.large,
            };
          }
        );

        console.log(fetchedMentors); // Debugging line
        setMentors(fetchedMentors);
      } catch (error) {
        console.error("Error fetching mentors", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  // Filter mentors based on the active category
  const filteredMentors = (() => {
    switch (activeButton) {
      case "Kindergarten":
        return mentors.filter((mentor) => mentor.category === "Kindergarten");
      case "high":
        return mentors.filter((mentor) => mentor.category === "HighSchool");
      case "col":
        return mentors.filter((mentor) => mentor.category === "College");
      case "tech":
        return mentors.filter((mentor) => mentor.category === "Technology");
      default:
        return mentors; // Show all mentors
    }
  })();

  // Calculate the mentors to display for the current page
  const startIndex = currentPage * mentorsPerPage;
  const selectedMentors = filteredMentors.slice(
    startIndex,
    startIndex + mentorsPerPage
  );

  const nextPage = () => {
    if ((currentPage + 1) * mentorsPerPage < filteredMentors.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mentor">
      <div className="topmentor"></div>
      <div className="botmentor">
        <div className="botmentor1">
          <button
            onClick={() => {
              setActiveButton("all");
              setCurrentPage(0);
            }}
            className={activeButton === "all" ? "botm" : "botm1"}
          >
            All Mentors
          </button>
          <button
            onClick={() => {
              setActiveButton("Kindergarten");
              setCurrentPage(0);
            }}
            className={activeButton === "Kindergarten" ? "botm" : "botm1"}
          >
            For Kindergarten
          </button>
          <button
            onClick={() => {
              setActiveButton("high");
              setCurrentPage(0);
            }}
            className={activeButton === "high" ? "botm" : "botm1"}
          >
            For High School
          </button>
          <button
            onClick={() => {
              setActiveButton("col");
              setCurrentPage(0);
            }}
            className={activeButton === "col" ? "botm" : "botm1"}
          >
            For College
          </button>
          <button
            onClick={() => {
              setActiveButton("tech");
              setCurrentPage(0);
            }}
            className={activeButton === "tech" ? "botm" : "botm1"}
          >
            For Technology
          </button>
        </div>
      </div>
      <div className="mentormentor">
        {selectedMentors.map((mentor) => (
          <div key={mentor.id} className="mentor-item">
            <img src={mentor.image} alt={mentor.name} />
            <p className="p11">{mentor.name}</p>
            
            <p>{mentor.subject}</p>
          </div>
        ))}
      </div>
      <div className="mentorboto">
        <button onClick={prevPage} disabled={currentPage === 0}>
          {" "}
          <img src="src/assets/ar1.png" alt="" />
        </button>
        <p>Page</p>
            <button>{currentPage+1}</button>
            <p>of 3 </p>
        <button
          onClick={nextPage}
          disabled={
            (currentPage + 1) * mentorsPerPage >= filteredMentors.length
          }
        >
          <img src="src/assets/ar2.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Mentors;
