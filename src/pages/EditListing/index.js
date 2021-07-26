import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  FormControl,
  Row,
} from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import {
  editListing,
  getListing,
  addListing,
  deleteListing,
} from "../../network/ApiAxios";

const EditListing = () => {
  const [title_EN, setTitle_EN] = useState("");
  const [title_AR, setTitle_AR] = useState("");
  const [price, setPrice] = useState("");

  let { categoryId } = useLocation().params;
  let category = categoryId;

  let { id } = useParams();

  const tryGetArticle = async () => {
    const response = await getListing(id);
    const { data } = response;
    if (data.success) {
      const { title_EN, title_AR, price } = data.data;
      setTitle_EN(title_EN);
      setTitle_AR(title_AR);
      setPrice(price);
    }
  };

  const tryEditListing = async () => {
    const response = await editListing(id, title_EN, title_AR, price);
    const { data } = response;
    if (data.success) {
      alert("Successfully Edited");
      window.location.href = "/admin/edit";
    }
  };
  const tryDeleteListing = async () => {
    const response = await deleteListing(id);
    const { data } = response;
    if (data.success) {
      alert("Successfully Deleted");
      window.location.href = "/admin/edit";
    }
  };

  const tryPostListing = async () => {
    console.log("hi");
    const response = await addListing(category, title_EN, title_AR, price);
    const { data } = response;
    if (data.success) {
      alert("Successfully Added");
      window.location.href = "/admin/edit";
    }
  };

  useEffect(() => {
    tryGetArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} lg={6} style={{ paddingTop: 30 }}>
            <h4 style={{ fontFamily: "Jakarta" }}>Item Name - English</h4>
            <FormControl
              value={title_EN}
              onChange={(e) => {
                setTitle_EN(e.target.value);
              }}
            />
          </Col>
          <Col xs={12} lg={6} style={{ paddingTop: 30 }}>
            <h4 style={{ fontFamily: "Jakarta" }}>Item Name - Arabic</h4>
            <FormControl
              value={title_AR}
              onChange={(e) => {
                setTitle_AR(e.target.value);
              }}
            />
          </Col>
          <Col xs={12} lg={6} style={{ paddingTop: 30 }}>
            <h4 style={{ fontFamily: "Jakarta" }}>Price - LBP</h4>
            <FormControl
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: 30 }}>
          <Col>
            <ButtonGroup>
              <Button
                onClick={() => {
                  id === "new" ? tryPostListing() : tryEditListing();
                }}
              >
                {id === "new" ? "Add" : "Edit"}
              </Button>
              {id !== "new" && (
                <Button
                  variant="danger"
                  onClick={() => {
                    tryDeleteListing();
                  }}
                >
                  Delete
                </Button>
              )}
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditListing;
