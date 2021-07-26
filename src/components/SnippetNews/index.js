import React from "react";
import NewsCard from "../NewsCard";
import NewsSnippet from "../NewsSnippet";
import NewsSnippetSkeleton from "../NewsSnippet/NewsSnippetSkeleton";

function SnippetNews({ news, isLoaded }) {
  return (
    <div>
      {window.innerWidth < 400 ? (
        isLoaded &&
        news.map((item, key) => (
          <NewsCard
            key={key}
            title={item.title}
            body={item.body}
            imgUrl={item.image.url}
          />
        ))
      ) : isLoaded ? (
        news.map((item, key) => (
          <NewsSnippet
            key={key}
            title={item.title}
            body={item.body}
            imgUrl={item.image.url}
          />
        ))
      ) : (
        <>
          <NewsSnippetSkeleton />
          <NewsSnippetSkeleton />
          <NewsSnippetSkeleton />
          <NewsSnippetSkeleton />
        </>
      )}
    </div>
  );
}

export default SnippetNews;
