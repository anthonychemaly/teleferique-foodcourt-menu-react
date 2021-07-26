import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";

function EditMenuItem({ hideSub, title_EN, title_AR, body, price, id }) {
  return (
    <Link
      to={{
        pathname: "/admin/edit/" + id,
        params: { title_EN, title_AR, body, price },
      }}
    >
      <div style={{ padding: "2%" }}>
        <div style={{ padding: "2%" }}>
          <h5
            style={{
              fontFamily: "Jakarta",
              fontWeight: "bold",
              textAlign: "start",
            }}
          >
            {title_EN + " - " + title_AR}
          </h5>
          {!hideSub && (
            <p
              style={{
                fontFamily: "Jakarta",
                fontWeight: "initial",
                textAlign: "start",
              }}
            >
              {body && body.substring(0, 156) + "..."}
            </p>
          )}
          <h5
            style={{
              fontFamily: "Jakarta",
              fontWeight: "bold",
              textAlign: "end",
            }}
          >
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "LBP",
            })}
          </h5>
          <Button>Edit</Button>
        </div>
      </div>
    </Link>
  );
}

export default EditMenuItem;
