import React from 'react'
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/java';
import 'brace/theme/textmate';
import 'brace/ext/language_tools';

import { Button, Icon } from 'antd';
const ButtonGroup = Button.Group;


const options = {
    smartIndent: true,
    lineNumbers: true
}

class Editor extends React.Component {
    
    constructor (props){
        super(props)
        this.state={
            code:'holaa'
        }
    }
    
	onChange = (newCode) => {
		this.setState({
			code: newCode,
		});

	}

    onEnter = (editor)=>{

        console.log(editor.getSelectedText())
    }

	render = () =>(
    <div>
        <AceEditor
            mode="java"
            theme="textmate"
            onChange={this.onChange}
            value={this.state.code}
            editorProps={{$blockScrolling: Infinity}}
            enableBasicAutocompletion={true}
            enableLiveAutocompletion={true}
            enableSnippets={true}
            showLineNumbers={true}
            tabSize={4}
            width="100%"
            commands={[{
                name: 'myCommand',
                bindKey: {win: 'Ctrl-Enter',  mac: 'Command-Enter'},
                exec: (editor) => {
                    this.onEnter(editor)
                },
                readOnly: true // false if this command should not apply in readOnly mode
            }]}
        />
    </div>
    )

}

export default Editor