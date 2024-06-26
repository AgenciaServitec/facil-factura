import React, { useState } from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDevice, useFormUtils } from "../../hooks";
import { phoneCodes } from "../../data-list";
import { currentConfig } from "../../config";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Row,
  Select,
  TextArea,
} from "./index";
import { lighten } from "polished";

export const FormContact = ({
  visibleFormContact,
  onClickVisibleFormContact,
}) => {
  const { isMobile } = useDevice();

  const [loadingContact, setLoadingContact] = useState(false);

  const schema = yup.object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    countryCode: yup.string().required(),
    phoneNumber: yup.number().required(),
    message: yup.string(),
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

  const onSubmitFetchContacts = async (formData) => {
    try {
      setLoadingContact(true);

      const contact = mapContactData(formData);

      const response = await fetchSendEmail(contact);

      if (!response.ok) throw new Error(response.statusText);

      onClickVisibleFormContact(false);
      resetContactData(false);
      notification({ type: "success", title: "Enviado exitosamente" });
    } catch (e) {
      console.log("Error email send:", e);
      notification({ type: "error", placement: "topLeft" });
    } finally {
      setLoadingContact(false);
    }
  };

  const fetchSendEmail = async (contact) =>
    await fetch(`${currentConfig.servitecSalesApiUrl}/emails/contact`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": null,
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(contact),
    });

  const mapContactData = (formData) => ({
    contact: {
      fullName: formData.fullName,
      email: formData.email,
      phone: {
        number: formData.phoneNumber,
        countryCode: formData.countryCode,
      },
      message: formData.message,
      hostname: "factura.servitec.site",
    },
  });

  const resetContactData = () =>
    reset({
      fullName: "",
      email: "",
      countryCode: "+51",
      phoneNumber: "",
      message: "",
    });

  return (
    <ModalComponent
      title={
        <div>
          <h3 style={{ margin: "0" }}>¿Aún tienes algunas dudas?</h3>
          <small style={{ margin: "0" }}>
            Bríndanos tus datos y nos comunicaremos contigo
          </small>
        </div>
      }
      visible={visibleFormContact}
      onOk={() => onClickVisibleFormContact()}
      onCancel={() => onClickVisibleFormContact()}
      footer={null}
    >
      <Form onSubmit={handleSubmit(onSubmitFetchContacts)}>
        <Row gutter={[16, 15]}>
          <Col xs={24} sm={24} md={24}>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese nombres y apellidos"
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
              name="message"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <TextArea
                  label="Ingrese mensaje"
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
            <Button
              type="primary"
              width="100%"
              margin="0"
              block
              size="large"
              htmlType="submit"
              loading={loadingContact}
            >
              Enviar
            </Button>
          </Col>
        </Row>
      </Form>
    </ModalComponent>
  );
};

const ModalComponent = styled(Modal)`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  top: 0;
  z-index: 9999999 !important;

  ${mediaQuery.minTablet} {
    min-width: inherit;
    min-height: inherit;
    width: inherit;
    height: auto;
    top: 2vh;
  }
  .ant-modal-content {
    border-radius: 1.2em;
    background-color: ${({ theme }) => lighten(0.09, theme.colors.quaternary)};
    color: ${({ theme }) => theme.colors.font2};

    .ant-modal-header {
      background-color: inherit;

      .ant-modal-title {
        text-align: center;
        color: ${({ theme }) => theme.colors.font1};
        font-weight: 800;
        font-size: 1.3em;
        h2 {
          margin: 0;
        }
      }
    }

    .ant-modal-close {
      color: ${({ theme }) => theme.colors.font1};
    }

    .ant-modal-body {
      background-color: inherit;
    }
  }
`;
