import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { FacilityType } from '@/lib/data';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();
// Create styles
const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12, fontFamily: "Helvetica" },
    header: { display: "flex", justifyContent: 'center', alignItems: "center", width: "100%" },
    section: { marginBottom: 10 },
    title: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
    text: { marginBottom: 5 },
    bold: { fontWeight: "bold", fontFamily: "Helvetica-Bold", fontSize: 14 },
    lineBreak: { marginBottom: 10 },
    image: { width: 150, height: 50, marginBottom: 10 }, // Adjust size as needed
    // Table styles using Flexbox
    table: { display: "flex", flexDirection: "column", marginTop: 10, borderWidth: 1, borderColor: "#000" },
    tableRow: { flexDirection: "row" },
    tableCellHeader: { flex: 1, borderWidth: 1, padding: 5, fontWeight: "bold", backgroundColor: "#f2f2f2", textAlign: "center" },
    tableCell: { flex: 1, borderWidth: 1, padding: 5, textAlign: "center" },
});
interface ClinReqPatientsInterface {
    label: string,
    value: string,
    name: string,
    dob: string,
    mrn: string,
    nkf: string,
    admitDate: string
}
// const clinReqPatients: ClinReqPatientsInterface[] = [
//     {
//         "label": "ERIC CHILDRESS: 6/3/1949",
//         "value": "ERIC CHILDRESS: 6/3/1949",
//         "name": "ERIC CHILDRESS",
//         "dob": "6/3/1949",
//         "mrn": "00-233167",
//         "nkf": "WESTERN ARIZONA REGIONAL MEDICAL CENTER",
//         "admitDate": "2/3/2025 12:00 PM"
//     },
//     {
//         "label": "DONNA CHILDRESS: 2/17/1949",
//         "value": "DONNA CHILDRESS: 2/17/1949",
//         "name": "DONNA CHILDRESS",
//         "dob": "2/17/1949",
//         "mrn": "00-233169",
//         "nkf": "Desert Regional Medical Center",
//         "admitDate": "1/8/2025 2:43 PM"
//     },
//     {
//         "label": "ROLAND PALMER: 6/3/1949",
//         "value": "ROLAND PALMER: 6/3/1949",
//         "name": "ROLAND PALMER",
//         "dob": "6/3/1949",
//         "mrn": "00-233171",
//         "nkf": "UC IRVINE MEDICAL CENTER",
//         "admitDate": "2/2/2025 4:27 PM"
//     }
// ]
// Create Document Component
const ClinReqPDF = ({ date, facility, clinReqPatients }: { date: string, facility: FacilityType, clinReqPatients: ClinReqPatientsInterface[] }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Image style={styles.image} src={"/images/ClinReqImage.png"} />
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Clinical Request Form</Text>
                <Text style={styles.text}>
                    <Text style={styles.bold}>Date: {date} </Text>
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.bold}>Hospital Name: {facility.name} </Text>
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.bold}>Fax Number:</Text> {facility.urReviewFax}
                </Text>
            </View>

            <View style={styles.section}>
                <Text>
                    Attention: <Text style={styles.bold}>Case Management / Utilization Management</Text>
                </Text>
                <Text style={styles.lineBreak}>
                    We understand that our member may be receiving care at your facility. Please fax initial and/or concurrent
                    clinical information to (562) 658-4101.
                </Text>
                <Text>
                    A Kaiser Permanente physician is always available on request if your treating physician wishes to take
                    advantage of the opportunity to address our member's current care needs, to provide access to our member's
                    clinical history, and to discuss our member's care to ensure mutual understanding and agreement.
                </Text>
                <Text>
                    Your physician may also choose to discuss our member's care and prior medical history with one of our case
                    managers.
                </Text>
            </View>

            <View style={styles.section}>
                <Text>Thank you for your cooperation,</Text>
                <Text>Outside Utilization Resource Services (OURS)</Text>
                <Text>Kaiser Foundation Health Plan, Southern California Division</Text>
            </View>

            {/* Table for Patient Info */}
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCellHeader}>Patient Name</Text>
                    <Text style={styles.tableCellHeader}>DOB</Text>
                    <Text style={styles.tableCellHeader}>Admit Date</Text>
                    <Text style={styles.tableCellHeader}>KP MRN</Text>
                </View>
                {clinReqPatients.map((patient) => (
                    <View key={patient.label} style={styles.tableRow}>
                        <Text style={styles.tableCell}> {patient.name} </Text>
                        <Text style={styles.tableCell}> {patient.dob} </Text>
                        <Text style={styles.tableCell}> {patient.admitDate} </Text>
                        <Text style={styles.tableCell}> {patient.mrn} </Text>
                    </View>
                ))}
                {/* <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>___________________</Text>
                    <Text style={styles.tableCell}>___________________</Text>
                    <Text style={styles.tableCell}>___________________</Text>
                    <Text style={styles.tableCell}>___________________</Text>
                </View> */}
            </View>
        </Page>
    </Document>
);
export default ClinReqPDF