import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-info mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-info mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));

  return (
    <div>
      {!!blog && !!blog.postedBy && (
        <div className="lead pb-4">
          <header>
            <Link href={`/blogs/${blog.slug}`}>
              <a style={{ textDecoration: "none" }}>
                <h2
                  className="pt-3 pb-3 font-weight-bold"
                  style={{
                    color: "#74153B",
                  }}
                >
                  {blog.title}
                </h2>
              </a>
            </Link>
          </header>
          <section>
            <p className="mark ml-1 pt-2 pb-2">
              Written by{" "}
              {!!blog && !!blog.postedBy && !!blog.postedBy.username && (
                <Link href={`/profile/${blog.postedBy.username}`}>
                  <a style={{ textDecoration: "none", color: "#74153B" }}>
                    {blog.postedBy.username}
                  </a>
                </Link>
              )}{" "}
              | Published {moment(blog.updatedAt).fromNow()}
            </p>
          </section>
          <section>
            {showBlogCategories(blog)}
            {showBlogTags(blog)}
            <br />
            <br />
          </section>

          <div className="row">
            <div className="col-md-4">
              <section>
                <img
                  className="img img-fluid"
                  style={{ maxHeight: "auto", width: "100%" }}
                  src={`${API}/blog/photo/${blog.slug}`}
                  alt={blog.title}
                />
              </section>
            </div>
            <div className="col-md-8">
              <section>
                <div className="pb-3">{renderHTML(blog.excerpt)}</div>
                <Link href={`/blogs/${blog.slug}`}>
                  <a className="btn btn-info pt-2">Read more</a>
                </Link>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
