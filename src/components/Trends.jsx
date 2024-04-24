import React, { useState, useEffect } from "react";
import trendservices from "../../services/trendservice";
import "./style.css/Trends.css";

const Trends = () => {
  const [trends, setTrends] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Number of posts per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await trendservices.getalltrends();
        setTrends(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = trends.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber === "previous") {
      setCurrentPage(currentPage - 1);
    } else if (pageNumber === "next") {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <div style={{ maxHeight: "500px" }}>
        {currentPosts.map((post, index) => (
          <div
            key={index}
            className="container d-flex justify-content-center align-items-center"
          >
            <div className="row" style={{ marginTop: "75px" }}>
              <div className="col-lg-6" style={{ width: "45%" }}>
                {/* Content */}
                <header className="left-block-secondary content-block">
                  <h2 className="post-title oswald-heading">{post.title}</h2>
                  <div className="post-date fg-byline text-muted">
                    {" "}
                    {post.date}
                  </div>
                  <br />
                  <div className="fg-excerpt exo-2-body">
                    <p>{post.excerpt}</p>
                  </div>
                </header>
              </div>

              <div className="col-lg-6" style={{ width: "45%" }}>
                {/* Image */}
                <div
                  className="left-block-primary content-block trend"
                  style={{ margin: "15px" }}
                >
                  <img
                    src={post.image}
                    alt="Fashion Trend - The Mustard Trend"
                    style={{ maxWidth: "100%", height: "600px" }}
                  />
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <br />
        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center">
            {/* "<<" button */}
            <li className="page-item">
              <button
                onClick={() => paginate("previous")}
                className="page-link"
              >
                &lt;&lt;
              </button>
            </li>

            {/* Numbered pagination */}
            {[...Array(Math.ceil(trends.length / postsPerPage)).keys()].map(
              (number) => (
                <li key={number} className="page-item">
                  <button
                    onClick={() => paginate(number + 1)}
                    className="page-link"
                  >
                    {number + 1}
                  </button>
                </li>
              )
            )}
            {/* ">>" button */}
            <li className="page-item">
              <button onClick={() => paginate("next")} className="page-link">
                &gt;&gt;
              </button>
            </li>
          </ul>
        </nav>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Trends;
