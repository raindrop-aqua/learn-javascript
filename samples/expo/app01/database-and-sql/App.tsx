import * as React from "react";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/table/lib/css/table.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import { Alignment, Button, Navbar } from "@blueprintjs/core";
import { Cell, Column, Table } from "@blueprintjs/table";

const onchange = (newValue: string) => {
  console.log("change", newValue);
};

const cellRenderer = (rowIndex: number) => {
  return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>;
};

const App = () => (
  <div>
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Blueprint</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="document" text="Files" />
      </Navbar.Group>
    </Navbar>
    <AceEditor
      mode="javascript"
      theme="github"
      onChange={onchange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
    <Table numRows={10}>
      <Column name="Dollars" cellRenderer={cellRenderer} />
    </Table>
  </div>
);

export default App;
