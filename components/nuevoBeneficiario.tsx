import { FC } from 'react'
import {Button, DatePicker, Form, Input, InputNumber, Select} from "antd";
// import {getSolicitante} from "@/app/queries/queries";

interface NuevoBeneficiario {
    onClose: () => void;
}

const NuevoBeneficiario: FC<NuevoBeneficiario> = ({onClose}) => {

    const handleClick = () => {
        onClose();
    }

    const onFinish = (values:any) => {
        handleClick();
        // getSolicitante(values)
        console.log(values);
    }

    const onFinishFailed = (errorInfo:any) => {
        console.log(errorInfo);
    }

      return (
          <>
              <Form
                  name="beneficiario"
                  labelCol={{
                      span: 8,
                  }}
                  wrapperCol={{
                      span: 16,
                  }}
                  style={{
                      width: 600,
                  }}
                  initialValues={{
                      remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
              >
                  <Form.Item
                      label="Nombre"
                      name="nombre"
                      rules={[{
                          required: true,
                          message: 'Escribe un Nombbre'
                      }]}
                  >
                      <Input />
                  </Form.Item>
                  <Form.Item
                      label="Apellido"
                      name="apellido"
                      rules={[{
                          required: true,
                          message: 'Escribe un Apellido'
                      }]}
                  >
                      <Input />
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
                      label="Domicilio"
                      name="domicilio"
                  >
                      <Input />
                  </Form.Item>
                  <Form.Item
                      label="Colonia"
                      name="colonia"
                  >
                      <Input />
                  </Form.Item>
                  <Form.Item
                      label="Fecha de Nacimiento"
                      name="fecha"
                  >
                      <DatePicker />
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
                      label="Lugar de Nacimiento"
                      name="lugar_nacimiento"
                  >
                      <Input />
                  </Form.Item>
                  <Form.Item
                      label="Telefono"
                      name="telefono"
                  >
                      <InputNumber controls={false}/>
                  </Form.Item>
                  <Form.Item
                      label="Escolaridad"
                      name="escolaridad"
                  >
                      <Select>
                          <Select.Option value="preescolar">Preescolar</Select.Option>
                          <Select.Option value="primaria">Primaria</Select.Option>
                          <Select.Option value="secundaria">Secundaria</Select.Option>
                          <Select.Option value="preparatoria">Preparatoria</Select.Option>
                          <Select.Option value="tecnica">Carrera Tecnica</Select.Option>
                          <Select.Option value="profesional">Profesional</Select.Option>
                      </Select>
                  </Form.Item>
                  <Form.Item
                      label="Servicios Medicos"
                      name="servicios_medicos"
                  >
                      <Select>
                          <Select.Option value="isste">ISSTE</Select.Option>
                          <Select.Option value="imss">IMSS</Select.Option>
                          <Select.Option value="insabi">INSABI</Select.Option>
                          <Select.Option value="ninguno">Ninguno</Select.Option>
                      </Select>
                  </Form.Item>
                  <Form.Item
                      label="Lugar de Trabajo"
                      name="lugar_trabajo"
                  >
                      <Input />
                  </Form.Item>
                  <Form.Item
                      label="Ingreso"
                      name="ingreso"
                  >
                      <InputNumber prefix="$"/>
                  </Form.Item>
                  <Form.Item
                      label="Apoyo Recibido"
                      name="apoyo_recibido"
                  >
                      <Select>
                          <Select.Option value="65_mas">65 y mas</Select.Option>
                          <Select.Option value="despensas">Despensas</Select.Option>
                          <Select.Option value="ninguno">Ninguno</Select.Option>
                          <Select.Option value="otro">Otro</Select.Option>
                      </Select>
                  </Form.Item>
                  <Form.Item
                      label="Estado de Vulnerabilidad"
                      name="edo_vulnerabilidad"
                  >
                      <Select>
                          <Select.Option value="leve">Leve</Select.Option>
                          <Select.Option value="moderada">Moderada</Select.Option>
                          <Select.Option value="grave">Grave</Select.Option>
                          <Select.Option value="otro">Otro</Select.Option>
                      </Select>
                  </Form.Item>
                  <Form.Item
                      label="Observaciones"
                      name="observaciones"
                  >
                      <Input.TextArea />
                  </Form.Item>
                  <Form.Item>
                      <Button onClick={onFinish} type="primary" className="bg-blue-800">Finalizar</Button>
                  </Form.Item>
              </Form>
          </>
      )
}

export default NuevoBeneficiario