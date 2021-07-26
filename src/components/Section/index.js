import React from "react";
import { Row, Col } from "react-bootstrap";
import MenuItem from "../MenuItem";
import NewsCardSkeleton from "../NewsCard/Skeleton";
import Title from "../Title";

function Section({ news, isLoaded, category }) {
  if (!isLoaded) {
    return (
      <div>
        <Title fontSize={30}>{category}</Title>
        <Row style={{ paddingTop: "3%" }}>
          <Col>
            <NewsCardSkeleton />
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div>
      <Title fontSize={30}>{category}</Title>
      <Row style={{ paddingTop: "3%" }}>
        <Col>
          {news.map((item, key) => (
            <MenuItem
              key={key}
              title_EN={item.title_EN}
              title_AR={item.title_AR}
              price={item.price}
              body={item.body}
              // imgUrl={item.image.url}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default Section;
