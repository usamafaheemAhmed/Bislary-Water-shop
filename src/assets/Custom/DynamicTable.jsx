import React from "react";
import { Table } from "react-bootstrap";
import DropDownOptions from "./DropDownOptions/DropDownOptions";

const DynamicTable = ({ headings, data, CallBack, menuItems }) => {
    return (
        <div className="table-container border-0 ">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index} className="overflow-box">
                                {heading.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index}>
                                {headings.map((heading, hIndex) => {
                                    if (heading.attribute === "StaticString") {
                                        return (
                                            <td
                                                key={hIndex}
                                                className={
                                                    "fw-bold" + (heading.extraClasses || "")
                                                }
                                                style={heading.styleSet ? heading.styleSet : {}}
                                            >
                                                {heading.Text}
                                            </td>
                                        );
                                    }
                                    if (heading.attribute === "Operations" || heading.attribute === "operations") {
                                        return (
                                            <td
                                                key={hIndex}
                                                className={heading.extraClasses || ""}
                                                style={heading.styleSet ? heading.styleSet : {}}
                                            >
                                                <DropDownOptions
                                                    menuItems={menuItems}
                                                    CallBack={CallBack}
                                                    heading={heading}
                                                    row={item}
                                                />
                                            </td>
                                        );
                                    } else {
                                        return (
                                            <td
                                                key={hIndex}
                                                className={heading.extraClasses || ""}
                                                style={heading.styleSet ? heading.styleSet : {}}
                                            >
                                                {item[heading.attribute]}
                                            </td>
                                        );
                                    }
                                })}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={headings.length} className="text-center">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default DynamicTable;
