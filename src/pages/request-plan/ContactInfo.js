import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button, Form, Input, InputNumber, Select } from "../../components";
import { phoneCodes } from "../../data-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "../../components/ui";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useDevice, useFormUtils } from "../../hooks";
import { Contact } from "../../images";
import { mediaQuery } from "../../styles";
import { darken } from "polished";

export const ContactInfo = ({ onSetStepNumber }) => {
  const { isMobile } = useDevice();

  const [loadingContact, setLoadingContact] = useState(false);

  const schema = yup.object({
    fullName: yup.string(),
    email: yup.string().email().required(),
    countryCode: yup.string().required(),
    phoneNumber: yup.string().min(9).required(),
    message: yup.string(),
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { required, error } = useFormUtils({ errors, schema });

  const onSubmitRequestSend = (formData) => {
    console.log({ formData });
    onSetStepNumber(2);
  };

  return (
    <Container>
      <div className="contact__title">
        <h2>Información de contácto</h2>
      </div>
      <div className="content__step">
        <div className="image-wrapper">
          <img src={Contact} alt="facil factura" />
        </div>
        <div className="content__step__form">
          <div className="form-wrapper">
            <Form onSubmit={handleSubmit(onSubmitRequestSend)}>
              <Row gutter={[16, 15]}>
                <Col xs={24} sm={24} md={24}>
                  <Controller
                    name="fullName"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value, name } }) => (
                      <Input
                        label="Ingrese nombres"
                        size="large"
                        name={name}
                        value={value}
                        onChange={onChange}
                        error={error(name)}
                        required={required(name)}
                      />
                    )}
                  />
                </Col>
                <Col span={24}>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value, name } }) => (
                      <Input
                        label="Ingrese email"
                        size="large"
                        name={name}
                        value={value}
                        onChange={onChange}
                        error={error(name)}
                        required={required(name)}
                      />
                    )}
                  />
                </Col>
                <Col xs={24} sm={24} md={10}>
                  <Controller
                    name="countryCode"
                    control={control}
                    defaultValue="+51"
                    render={({ field: { onChange, value, name } }) => (
                      <Select
                        label="Código"
                        size="large"
                        value={value}
                        onChange={(value) => onChange(value)}
                        error={error(name)}
                        required={required(name)}
                        isMobile={isMobile}
                        options={phoneCodes.map((phoneCode) => ({
                          code: phoneCode.code,
                          value: phoneCode.dial_code,
                          label: `${phoneCode.name} (${phoneCode.dial_code})`,
                        }))}
                      />
                    )}
                  />
                </Col>
                <Col xs={24} sm={24} md={14}>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field: { onChange, value, name } }) => (
                      <InputNumber
                        label="Ingrese teléfono"
                        size="large"
                        name={name}
                        value={value}
                        onChange={onChange}
                        error={error(name)}
                        required={required(name)}
                      />
                    )}
                  />
                </Col>
                <Col xs={24} sm={24} md={24} lg={10}>
                  <Button
                    block
                    type="default"
                    style={{
                      padding: "1.5em 2em",
                      display: "flex",
                      placeItems: "center",
                    }}
                    icon={<FontAwesomeIcon icon={faArrowLeft} size="large" />}
                    onClick={() => onSetStepNumber(0)}
                  >
                    Regresar
                  </Button>
                </Col>
                <Col xs={24} sm={24} md={24} lg={14}>
                  <Button
                    block
                    type="primary"
                    style={{
                      padding: "1.5em 2em",
                      display: "flex",
                      placeItems: "center",
                    }}
                    icon={<FontAwesomeIcon icon={faArrowRight} size="large" />}
                    width="100%"
                    margin="0"
                    htmlType="submit"
                    loading={loadingContact}
                    disabled={loadingContact}
                  >
                    Continuar
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    .contact__title {
      text-align: center;
      margin-bottom: 1em;
      padding: 0 1em;
      h2 {
        font-weight: 700;
        font-size: 1.8em;
      }
    }
    .content__step {
      padding: 1em 0 1.5em 0;
      display: grid;
      place-items: center;
      grid-template-columns: 1fr;
      width: 95%;
      margin: auto;
      gap: 1em;
      ${mediaQuery.minTablet} {
        width: 70%;
        grid-template-columns: 47% 1fr;
      }
      .image-wrapper {
        padding: 1em;
        display: none;
        ${mediaQuery.minTablet} {
          display: inherit;
        }
        img {
          width: 100%;
          max-width: 27em;
          height: auto;
          object-fit: contain;
        }
      }
      &__form {
        .form-wrapper {
          background: ${darken(0.03, theme.colors.light)};
          padding: 1em 1.8em;
          border-radius: 1em;
          button {
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  `}
`;
