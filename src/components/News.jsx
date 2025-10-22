import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello, I am the constructor from News component");
    this.state = {
      articles: [],
      loading: true, // ✅ to handle loading state
    };
  }

  // ✅ Fetch data after component mounts
  async componentDidMount() {
    console.log("Fetching Apple-related news...");

    // ✅ Use your Apple News API URL here
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2025-10-21&to=2025-10-21&sortBy=popularity&apiKey=b3d7e8555c5c4546b716f7f0a7370d6c";

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log("Fetched Data:", parsedData);

      // ✅ Update state with articles
      this.setState({
        articles: parsedData.articles || [],
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">  News - Top Trending</h2>

        {/* ✅ Show loading text */}
        {this.state.loading && <h5 className="text-center">Loading...</h5>}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((article, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={article.title ? article.title.slice(0, 60) : "No Title"}
                  description={
                    article.description
                      ? article.description.slice(0, 90)
                      : "No Description Available"
                  }
                  imageurl={
                    article.urlToImage
                      ? article.urlToImage
                      : "https://via.placeholder.com/150"
                  }
                  newsUrl={article.url}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default News;
