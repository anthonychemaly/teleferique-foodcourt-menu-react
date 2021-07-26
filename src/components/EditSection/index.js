import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditMenuItem from "../EditMenuItem";
import NewsCardSkeleton from "../NewsCard/Skeleton";
import Title from "../Title";

function EditSection({ news, isLoaded, categoryId, category }) {
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title fontSize={30}>{category}</Title>
        <Link
          to={{
            pathname: "/admin/edit/new",
            params: { categoryId },
          }}
        >
          <Button>Add</Button>
        </Link>
      </div>
      <Row style={{ paddingTop: "3%" }}>
        <Col>
          {news.map((item, key) => (
            <EditMenuItem
              key={key}
              id={item._id}
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

export default EditSection;
