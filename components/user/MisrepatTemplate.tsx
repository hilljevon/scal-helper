import 'handsontable/styles/handsontable.min.css';
import 'handsontable/styles/ht-theme-main.min.css';
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
registerAllModules();


import React, { useEffect, useState } from 'react'
const testData = [
    ["NAME",],
    ["MRN"],
    ["Insurance LOB"],
    ["MTT/RA"],
    ["NKF"],
    ["LOC"],
    ["Diagnosis"],
    ["MC with RCA closed"],
    ["MC with no Bed per BUC"],
    ["MC with MD Refused due to capacity"]
]
const MisrepatTemplate = ({ generalData, caseData, currentFacility }: { generalData: any, caseData: any, currentFacility: any }) => {
    const [data, setData] = useState<any>(testData)
    const exampleData = [
        {
            desk: "Tri-Ctr",
            rn: "Ivan",
            ua: "",
            opstel: "CCR"
        },
        {
            desk: "Tri-Ctr",
            rn: "Jackkie V",
            ua: "",
            opstel: ""
        }
    ]
    useEffect(() => {
        const newData = [
            ["NAME", generalData.patientName],
            ["MRN", generalData.mrn],
            ["Insurance LOB", ""],
            ["MTT/RA", ""],
            ["NKF", currentFacility.name],
            ["LOC", caseData["Bed Lv Req’ed"]],
            ["Diagnosis", caseData["Transfer Dx"]],
            ["MC with RCA closed", ""],
            ["MC with no Bed per BUC", ""],
            ["MC with MD Refused due to capacity", ""]
        ]
        setData(newData)
    }, [])
    return (
        <div className="max-w-4xl"> {/* Limit the table width */}
            <HotTable
                data={data}
                rowHeaders={false}
                colHeaders={true}
                width={500}
                height={350}
                autoWrapRow={true}
                autoWrapCol={true}
                licenseKey="non-commercial-and-evaluation" // for non-commercial use only
            // mergeCells={{
            //     virtualized: true,
            //     cells: [{ row: 0, col: 0, rowspan: 2, colspan: 1 }]
            // }}
            />
        </div>
    )
}

export default MisrepatTemplate