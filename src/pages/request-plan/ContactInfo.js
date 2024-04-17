import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  notification,
  DatePicker,
  TimePicker,
  ComponentContainer,
  RadioGroup,
} from "../../components";
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
import { Link } from "react-router-dom";
import { servitecSalesApiUrl } from "../../firebase";
import dayjs from "dayjs";

export const ContactInfo = ({ selectedPlan, onSetStepNumber }) => {
  const { isMobile } = useDevice();

  const [loadingContact, setLoadingContact] = useState(false);

  const schema = yup.object({
    fullName: yup.string(),
    email: yup.string().email().required(),
    countryCode: yup.string().required(),
    phoneNumber: yup.string().min(9).required(),
    dateToMeet: yup.string().required(),
    timeToMeet: yup.string().required(),
    meetingType: yup.string().required(),
    acceptTermsAndConditions: yup.boolean().required(),
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { required, error } = useFormUtils({ errors, schema });

  const onSubmitRequestSend = async (formData) => {
    try {
      setLoadingContact(true);

      const contact = mapContactData(formData);

      const response = await fetchSendEmail(contact);

      if (!response.ok) throw new Error(response.statusText);

      resetContactForm();

      onSetStepNumber(2);
    } catch (e) {
      console.error("ErrorSaveBenefit: ", e);
      notification({ type: "error" });
    } finally {
      setLoadingContact(false);
    }
  };

  const mapContactData = (formData) => ({
    request: {
      fullName: formData.fullName,
      email: formData.email,
      phone: {
        number: formData.phoneNumber,
        countryCode: formData.countryCode,
      },
      dateToMeet: formData.dateToMeet,
      timeToMeet: formData.timeToMeet,
      meetingType: formData.meetingType,
      plan: {
        id: selectedPlan.id,
        name: selectedPlan.name,
        price: selectedPlan.prices.value,
      },
      termsAndConditions: formData?.acceptTermsAndConditions || true,
      hostname: window.location.hostname || "factura.servitec.site",
    },
  });

  const fetchSendEmail = async (contact) =>
    await fetch(`${servitecSalesApiUrl}/emails/request`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": null,
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(contact),
    });

  const resetContactForm = () =>
    reset({
      fullName: "",
      email: "",
      countryCode: "+51",
      phoneNumber: "",
      dateToMeet: undefined,
      timeToMeet: undefined,
      meetingType: "",
      acceptTermsAndConditions: true,
    });

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
          {!!selectedPlan && (
            <div className="plan-summary">
              <div className="title">
                <strong>Plan seleccionado:</strong>
              </div>
              <div className="card-summary">
                <div className="card-summary__item">
                  <div>{selectedPlan.name}</div>
                  <div>
                    <span>{selectedPlan.titleLegend}</span>
                  </div>
                </div>
                <div className="card-summary__item">
                  <div>
                    S/ {selectedPlan.prices.value} <span>/mes</span>
                  </div>
                  <div>
                    <Link to={`/plans-detail?planType=${selectedPlan.id}`}>
                      Ver detalle del Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
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
                        label="Ingrese nombres y apellidos"
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
                        label="Prefijo"
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
                <ComponentContainer.group label="Fecha y hora para reunirnos">
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={14}>
                      <Controller
                        name="dateToMeet"
                        control={control}
                        defaultValue={undefined}
                        render={({ field: { onChange, value, name } }) => (
                          <DatePicker
                            label="Fecha"
                            size="large"
                            name={name}
                            value={value}
                            onChange={onChange}
                            error={error(name)}
                            required={required(name)}
                            minDate={dayjs()}
                          />
                        )}
                      />
                    </Col>
                    <Col xs={24} sm={24} md={10}>
                      <Controller
                        name="timeToMeet"
                        control={control}
                        defaultValue={undefined}
                        render={({ field: { onChange, value, name } }) => (
                          <TimePicker
                            label="Hora"
                            size="large"
                            format="HH:mm"
                            name={name}
                            value={value}
                            onChange={onChange}
                            error={error(name)}
                            required={required(name)}
                            minDate={dayjs()}
                          />
                        )}
                      />
                    </Col>
                    <Col span={24}>
                      <Controller
                        name="meetingType"
                        control={control}
                        defaultValue={undefined}
                        render={({ field: { onChange, value, name } }) => (
                          <RadioGroup
                            label="Tipo de reunion"
                            name={name}
                            value={value}
                            onChange={onChange}
                            error={error(name)}
                            required={required(name)}
                            options={[
                              { label: "Presencial", value: "inPerson" },
                              { label: "Remoto", value: "remote" },
                            ]}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                </ComponentContainer.group>
                <Col span={24}>
                  <p className="item-checkbox">
                    <Controller
                      name="acceptTermsAndConditions"
                      control={control}
                      defaultValue=""
                      render={({ field: { onChange, value, name } }) => (
                        <Checkbox
                          name={name}
                          checked={value}
                          onChange={onChange}
                          error={error(name)}
                          required={required(name)}
                        >
                          Acepto los términos y condiciones.
                        </Checkbox>
                      )}
                    />
                  </p>
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
                    disabled={loadingContact}
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
        grid-template-columns: 50% 1fr;
      }
      .image-wrapper {
        padding: 1em;
        display: none;
        ${mediaQuery.minTablet} {
          display: inherit;
        }
        img {
          width: 100%;
          max-width: 30em;
          height: auto;
          object-fit: contain;
        }
      }
      &__form {
        .plan-summary {
          .title {
            margin-bottom: 0.5em;
          }
          .card-summary {
            background: ${darken(0.03, theme.colors.light)};
            padding: 1em 1.8em;
            border-radius: 1em;
            display: flex;
            margin-bottom: 1em;
            &__item {
              width: 50%;
              height: auto;
              display: grid;
              justify-content: center;
              font-size: 1.3em;
              font-weight: 700;
              gap: 0.2em;
              span {
                font-size: 0.7em;
                font-weight: 400;
              }
            }
            &__item:first-child {
              justify-content: start;
            }
            &__item:last-child {
              justify-content: end;
              a {
                color: ${theme.colors.primary};
                font-size: 0.6em;
                font-weight: 500;
                text-decoration: none;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
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
