import { blogPosts } from '../../data/mockData';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resources for your practice</h2>
          <p className="section-subtitle">
            Explore articles, tips, and guides to enhance your meditation and sleep experience
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-card-image">
                <div className="blog-image-placeholder" aria-label={post.title}></div>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span className="blog-card-date">{post.date}</span>
                </div>
                <a href={post.url} className="blog-card-link">
                  Read more
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-section-footer">
          <a href="/blog" className="btn btn-secondary">
            See all blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;