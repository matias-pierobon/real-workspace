import React from 'react'
import { Card, Tree } from 'antd'
import './SidePanel.css'

const TreeNode = Tree.TreeNode

const data = ( title, children ) => ({ title, key: title, children });
const gData = [
    data("Alumnos", [
        data("nombre"),
        data("apellido"),
        data("legajo"),
    ]),
    data("Materias", [
        data("nombre"),
        data("cufe"),
    ]),
    data("Aulas", [
        data("numero"),
    ]),
    data("Cursadas"),
];

const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode key={item.key} title={item.key}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode key={item.key} title={item.key} />;
    });

const SidePanel = () => (
    <div className="side-panel">
        <Card title="Relaciones" bordered={false}>
            <Tree
                className="draggable-tree"
            >
                {loop(gData)}
            </Tree>
            </Card>
    </div>
)

export default SidePanel