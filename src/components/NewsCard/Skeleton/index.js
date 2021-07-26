import React from "react";
import ContentLoader from "react-content-loader";
import "./SkeletonNewsCard.css";

function NewsCardSkeleton() {
  return (
    <div style={{ width: "100%", height: "100%", paddingBottom:"2%" }}>
      <ContentLoader style={{ width: "100%", height: "100%" }}>
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
        {/* <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" /> */}
      </ContentLoader>
    </div>
  );
}

export default NewsCardSkeleton;
