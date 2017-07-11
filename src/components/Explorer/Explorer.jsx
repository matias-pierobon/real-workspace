import React from 'react'
import { Row, Col, Card, Table } from 'antd'
import Editor from '../Editor'

const dataSource = [{
  key: '1',
  nombre: 'Matías',
  apellido: 'Matías',
  legajo: '13717/0'
}, {
  key: '2',
  nombre: 'Pilar',
  apellido: 'Acha',
  legajo: '13717/0'
}, {
  key: '3',
  nombre: 'Franco',
  apellido: 'Borrelli',
  legajo: '13717/0'
}, {
  key: '4',
  nombre: 'Pedro',
  apellido: 'Brost',
  legajo: '13717/0'
}];

const columns = [{
  title: 'nombre',
  dataIndex: 'nombre',
  key: 'nombre',
}, {
  title: 'apellido',
  dataIndex: 'apellido',
  key: 'apellido',
}, {
  title: 'legajo',
  dataIndex: 'legajo',
  key: 'legajo',
}];

const Explorer = () => (
    <div>
        <Row gutter={16}>
            <Col span={24}>
                <Card title="Editor" style={{ marginBottom: "16px" }}>
                    <Editor />
                </Card>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col md={14} lg={16}>
                <Card title="Resultado" style={{ marginBottom: "16px" }} >
                    <Table dataSource={dataSource} columns={columns} />
                </Card>
            </Col>
            <Col md={10} lg={8}>
                <Card title="Árbol" style={{ marginBottom: "16px" }}>
                    
                </Card>
            </Col>
        </Row>
    </div>
)

export default Explorer