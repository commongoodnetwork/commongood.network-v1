import React, { useState } from "react";
import Layout from "../../components/layout";
import {
  FormGroup,
  FormText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Col
} from "reactstrap";
import NumberFormat from "react-number-format";

const Maximum = () => {
  const [income, setIncome] = useState(0);
  const [netWorth, setNetWorth] = useState(0);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) =>
    e.target.select();

  const magicNumber = 107000;

  let maximum = 0;
  if (income < magicNumber || netWorth < magicNumber) {
    maximum = Math.max(2200, Math.min(income * 0.05, netWorth * 0.05));
  } else {
    maximum = Math.min(income * 0.1, netWorth * 0.1, magicNumber);
  }

  return (
    <Layout>
      <p>
        According to the U.S. Securities and Exchange Commission, investors in
        companies with a Regulation Crowdfunding offering are limited to a
        maximum investment based on their income and net worth. Refer to the{" "}
        <a href="https://www.sec.gov/info/smallbus/secg/rccomplianceguide-051316.htm">
          SEC website
        </a>{" "}
        for more information. Spouses are allowed to calculate their net worth
        and annual income jointly.
      </p>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label>Annual Income</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <NumberFormat
                value={income}
                onValueChange={({ floatValue }) => setIncome(floatValue || 0)}
                onFocus={handleFocus}
                thousandSeparator={true}
                className="form-control"
                placeholder="e.g. 125,000"
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Net Worth</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <NumberFormat
                value={netWorth}
                onValueChange={({ floatValue }) => setNetWorth(floatValue || 0)}
                onFocus={handleFocus}
                thousandSeparator={true}
                className="form-control"
                placeholder="e.g. 125,000"
              />
            </InputGroup>
            <FormText color="muted">Excluding your primary residence.</FormText>
          </FormGroup>
        </Col>
      </Row>
      <h3 className="text-center mt-4 pt-4 border-top">
        Maximum Investment
        <br />
        <NumberFormat
          value={maximum}
          displayType="text"
          thousandSeparator={true}
          prefix="$"
        />
      </h3>
    </Layout>
  );
};

export default Maximum;
