export const test1 = "Bed Lv Req’d: tele Transport Lv Req’d: als Equip needed: monitor, oxygen prn IVF/Drips: none cm bob 714 335 1123 x5431 Current Bed Level: med surg Current RM: 2114 Unit phone#: 919 336 5502 x2147 Fax#: NKF MD name: dr francis NKF MD phone #: 714 551 0992 Transfer Dx: s/p glioblastoma resection COVID status: not done Test Date (if applicable): Sitter/Restraints:n Iso (Y/N): If yes, specify: Code status: full Ht: 5ft 10in Wt: 109 lbs"
export const test2 = "Bed Lv Req’d: ICU Transport Lv Req’d: CCT-RN Equip needed: monitor, mask IVF/Drips: heparin gtt 5cc/hr Current Bed Level: ICU Current RM: 5223 Unit phone#: 646-442-2214 Fax#: NKF MD name: dr mellbourne NKF MD phone #: 949-324-2147 Transfer Dx: sepsis COVID status: negative Test Date(if applicable): 10 / 14 Sitter / Restraints:Bilateral wrist restraints Iso(Y / N): N If yes, specify: Code status: DNR / DNI Ht: 170cm Wt: 57kg"
export const test3 = "Bed Lv Req’d: Tele Transport Lv Req’d: BLS Equip needed: Cardiac Monitor IVF/Drips: Normal saline Current Bed Level: Tele Current RM: 1234 Unit phone#: 714-768-2944 Fax#: 714-888-4563 NKF MD name: dr mellbourne NKF MD phone #: 949-324-2147 Transfer Dx: sepsis COVID status: negative Test Date(if applicable): 10 / 14 Sitter / Restraints: Sitter Bilateral wrist restraints Iso(Y / N): N If yes, specify: Code status: DNR / DNI Ht: 170cm Wt: 57kg"

const results = {};

const keysToInclude = [
    "Bed Lv Req'd",
    "Bed Lv Req'ed",
    "Bed Lv Req’ed",
    "Transport Lv Req'd",
    "Transport Lv Req'ed",
    "Transport Lv Req’ed",
    "Equip needed",
    "Equip. needed",
    "IVF/Drips",
    "Current Bed Level",
    "Current RM",
    "Unit phone#",
    "Fax#",
    "NKF MD name",
    "NKF MD phone #",
    "Transfer Dx",
    "COVID status",
    "Test Date (if applicable)",
    "Test Date(if applicable)",
    "Sitter/Restraints",
    "Sitter / Restraints",
    "Iso (Y/N)",
    "Iso(Y / N)",
    "If yes, specify",
    "Code status",
    "Ht",
    "wt",
    "Wt"
];
const masterKeys = [
    "Bed Lv Req'd",
    "Transport Lv Req'd",
    "Equip needed",
    "IVF/Drips",
    "Current Bed Level",
    "Current RM",
    "Unit phone#",
    "Fax#",
    "NKF MD name",
    "NKF MD phone #",
    "Transfer Dx",
    "COVID status",
    "Test Date (if applicable)",
    "Sitter/Restraints",
    "Iso (Y/N)",
    "If yes, specify",
    "Code status",
    "Ht",
    "wt"
]
interface CaseDataInterface {
    patientName: string,
    rnName: string,
    engagementNote: string
}
// This function currently goes through the engagement note and parses according to location. However, not all engagement notes are left in the same order so needs to be updated
export function parseAndRemoveKeys(caseData: CaseDataInterface) {
    const indexedPatientDataArray = [];
    // Split the input string by colons
    const parsed = caseData.engagementNote.split(/\s*:\s*/);
    // Loop through the array of parsed strings that has been separated by colons
    for (let segment of parsed) {
        // Check if any key is in the segment
        const foundKey = keysToInclude.find(key => segment.includes(key));
        if (foundKey) {
            // If a key is found, remove it from the segment
            segment = segment.replace(foundKey, "").trim();
        }
        indexedPatientDataArray.push(segment);
    }
    indexedPatientDataArray.shift()
    const patientDataObject: any = {}
    for (let i = 0; i < indexedPatientDataArray.length; i++) {
        patientDataObject[masterKeys[i]] = indexedPatientDataArray[i]
    }
    console.log('My patient object here', patientDataObject)
    return patientDataObject

}
// Need to get more test engagement notes in order to test this function (CMA engagements, look through other CCR engagements)
export function handleEngagementNote(caseData: CaseDataInterface) {
    const indexedPatientDataArray = [];
    // Split the input string by colons
    const parsed = caseData.engagementNote.split(/\s*:\s*/);
    // we need to place each found index since that will be the first half of the next string
    const engagementNoteObject = {} as any
    let placeholderObjectKey = parsed[0]
    for (let i = 1; i < parsed.length; i++) {
        if (i == parsed.length - 1) {
            const lastKey = parsed[i]
            engagementNoteObject[placeholderObjectKey] = lastKey

        }
        // current iteration of isolated phrase in engagement
        const curr = parsed[i]
        const match = keysToInclude.find(word => curr.includes(word))
        // in the event that a match is found, that means we have to potentially split the string. we need to confirm where the match is located. due to extra entries in engagement notes, its important to include this match 
        if (match) {
            // this takes the index of our current iteration string that contains one of the titles for the engagement note
            const index = curr.indexOf(match)
            // with the current index, i need to split the string in half. the first half will be hashed with the previous key stored. the following will become the new key. 
            const firstHalf = curr.slice(0, index)
            const secondHalf = curr.slice(index)
            engagementNoteObject[placeholderObjectKey] = firstHalf;
            placeholderObjectKey = secondHalf;
        }

    }
    return engagementNoteObject
}
function extractRowCount(range: string): number {
    const match = range.match(/\d+$/); // Match the last sequence of digits in the string
    return match ? parseInt(match[0], 10) : 4;
}
export const handleCaseAssignmentXls = (cases: any) => {
    const columnCheck = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const patients = []
    const lastCell = cases["!ref"]
    const rowCount = extractRowCount(lastCell)
    let renoCol = "A"
    let firstNameCol = "A"
    let lastNameCol = "A"
    let admitDateCol = "A"
    let dateOfBirthCol = "A"
    let kpMRNCol = "A"
    let NKFNameCol = "A"
    // First is checking for the column index to ensure they are linked to the appropriate header
    for (let col of columnCheck) {
        const columnKey = `${col}2`
        const currentCell = cases[columnKey]["v"]
        switch (currentCell) {
            case "Member First Name":
                firstNameCol = col;
            case "Member Last Name":
                lastNameCol = col;
            case "DOB":
                dateOfBirthCol = col;
            case "MRN":
                kpMRNCol = col;
            case "Vendor Name":
                NKFNameCol = col;
            case "Admit Date":
                admitDateCol = col
        }
    }
    for (let currentRow = 3; currentRow < rowCount; currentRow++) {
        const firstNameKey = `${firstNameCol}${currentRow}`
        const firstName = cases[firstNameKey]["w"]
        const lastName = cases[`${lastNameCol}${currentRow}`]["w"]
        const dob = cases[`${dateOfBirthCol}${currentRow}`]["w"]
        const mrn = cases[`${kpMRNCol}${currentRow}`]["w"]
        const nkf = cases[`${NKFNameCol}${currentRow}`]["w"]
        const admitDate = cases[`${admitDateCol}${currentRow}`]["w"]
        patients.push({
            label: `${firstName} ${lastName}: ${dob}`,
            value: `${firstName} ${lastName}: ${dob}`,
            name: `${firstName} ${lastName}`,
            dob: dob,
            mrn: mrn,
            nkf: nkf,
            admitDate: admitDate
        })
    }
    return patients
}