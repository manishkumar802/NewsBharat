import React, { Component } from "react";

export default class Bussiness extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }

  // Fetch API when component mounts
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b3d7e8555c5c4546b716f7f0a7370d6c";

    try {
      let response = await fetch(url);
      let data = await response.json();

      this.setState({
        articles: data.articles,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching business news:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center mb-4">💼 Business News (US)</h2>

        {/* Show loading while data is being fetched */}
        {this.state.loading && <h4 className="text-center">Loading news...</h4>}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((article, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-3 shadow-sm">
                  <img
                    src={
                      article.urlToImage
                        ? article.urlToImage
                        : "https://via.placeholder.com/400x200?text=No+Image"
                    }
                    className="card-img-top"
                    alt="business news"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">
                      {article.description
                        ? article.description.slice(0, 100) + "..."
                        : "No description available."}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
