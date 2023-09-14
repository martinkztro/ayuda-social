'use client'
import {FC, useState} from 'react'
import {Button, DatePicker, Divider, Form, Input, InputNumber, Select} from "antd";

interface NuevaSolicitud {
      id: number;
      data: Array<any>;
      onClose: () => void;
}

const NuevaSolicitud: FC<NuevaSolicitud> = ({id, data, onClose}) => {
    const [selectedOption, setSelectedOption] = useState('');

    const filteredObject = data.filter(item => item.id === id);

    const handleClick = () => {
        onClose();
    }

    const onFinish = (values:any) => {
        handleClick();
        console.log(values);
    }

    const onFinishFailed = (errorInfo:any) => {
        console.log(errorInfo);
    }

    // console.log(filteredObject[0].nombre);

    const defaultProps = {
        nombre_beneficiario: filteredObject[0].nombre,
        apellido_beneficiario: filteredObject[0].apellido,
    }

      return (
          <>
            <Form
                  className="w-full"
                  name="solicitud"
                  labelCol={{
                        span: 8,
                  }}
                  wrapperCol={{
                        span: 16,
                  }}
                  style={{
                        width: 600,
                  }}
                  initialValues={defaultProps}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
            >
                <Form.Item>
                    <Divider>Beneficiario</Divider>
                </Form.Item>
                <Form.Item
                    label="Nombre Beneficiario"
                    name="nombre_beneficiario"
                >
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item
                    label="Apellido Beneficiario"
                    name="apellido_beneficiario"
                >
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item>
                    <Divider>Discapacidad</Divider>
                </Form.Item>
                <Form.Item
                    label="Ayuda Solicitada"
                    name="ayuda_solicitada"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Discapacidad"
                    name="discapacidad"
                >
                    <Select>
                        <Select.Option value="motriz">Motriz</Select.Option>
                        <Select.Option value="neuromotora">Neuromotora</Select.Option>
                        <Select.Option value="psicosocial">Psicosocial</Select.Option>
                        <Select.Option value="mental">Mental</Select.Option>
                        <Select.Option value="otro">Otro</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Descripcion Discapacidad"
                    name="descripcion_discapacidad"
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Divider>Solicitante</Divider>
                </Form.Item>
                <Form.Item
                    label="Nombre Solicitante"
                    name="nombre_solicitante"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Apellido Solicitante"
                    name="apellido_solicitante"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Estado Civil"
                    name="edo_civil"
                >
                    <Select>
                        <Select.Option value="casado">Casado</Select.Option>
                        <Select.Option value="soltero">Soltero</Select.Option>
                        <Select.Option value="union_libre">Union Libre</Select.Option>
                        <Select.Option value="otro">Otro</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Edad"
                    name="edad"
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Sexo"
                    name="sexo"
                >
                    <Select>
                        <Select.Option value="hombre">Hombre</Select.Option>
                        <Select.Option value="mujer">Mujer</Select.Option>
                        <Select.Option value="otro">Otro</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Domicilio Solicitante"
                    name="domicilio_solicitante"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Colonia Solicitante"
                    name="colonia_solicitante"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Fecha de Nacimiento Solicitante"
                    name="nac_solicitante"
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="Lugar de Nacimiento Solicitante"
                    name="lugar_nac_solicitante"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="telefono Solicitante"
                    name="telefono_solicitante"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Parentesco Beneficiario"
                    name="parentesco"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Domicilio Solicitante"
                    name="domicilio_solicitante"
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button className="bg-blue-800" type="primary" htmlType="submit">
                        Finalizar
                    </Button>
                </Form.Item>
            </Form>
          </>
      )
}

export default NuevaSolicitud