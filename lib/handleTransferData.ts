export const test1 = "Bed Lv Req'd: tele Transport Lv Req'd: als Equip needed: monitor, oxygen prn IVF/Drips: none cm bob 714 335 1123 x5431 Current Bed Level: med surg Current RM: 2114 Unit phone#: 919 336 5502 x2147 Fax#: NKF MD name: dr francis NKF MD phone #: 714 551 0992 Transfer Dx: s/p glioblastoma resection COVID status: not done Test Date (if applicable): Sitter/Restraints:n Iso (Y/N): If yes, specify: Code status: full Ht: 5ft 10in wt: 109 lbs"
export const test2 = "Bed Lv Req'd: ICU Transport Lv Req'd: CCT-RN Equip needed: monitor, mask IVF/Drips: heparin gtt 5cc/hr Current Bed Level: ICU Current RM: 5223 Unit phone#: 646-442-2214 Fax#: NKF MD name: dr mellbourne NKF MD phone #: 949-324-2147 Transfer Dx: sepsis COVID status: negative Test Date(if applicable): 10 / 14 Sitter / Restraints:Bilateral wrist restraints Iso(Y / N): N If yes, specify: Code status: DNR / DNI Ht: 170cm wt: 57kg"
export const test3 = "Bed Lv Req'd: Tele Transport Lv Req'd: BLS Equip needed: Cardiac Monitor IVF/Drips: Normal saline Current Bed Level: Tele Current RM: 1234 Unit phone#: 714-768-2944 Fax#: 714-888-4563 NKF MD name: dr mellbourne NKF MD phone #: 949-324-2147 Transfer Dx: sepsis COVID status: negative Test Date(if applicable): 10 / 14 Sitter / Restraints: Sitter Bilateral wrist restraints Iso(Y / N): N If yes, specify: Code status: DNR / DNI Ht: 170cm wt: 57kg"

const results = {};

const keysToInclude = [
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
    "Test Date(if applicable)",
    "Sitter/Restraints",
    "Sitter / Restraints",
    "Iso (Y/N)",
    "Iso(Y / N)",
    "If yes, specify",
    "Code status",
    "Ht",
    "wt"
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
    console.log("My Patient Data here", patientDataObject)
    return patientDataObject
    // const oneTouchTemplate = `One Touch Template \n  \n Name: ${caseData.patientName} \n Dx: ${patientDataObject["Transfer Dx"]}  \n IVF/Drips: ${patientDataObject["IVF/Drips"]} \n COVID status: ${patientDataObject["COVID status"]} \n Sitter/Restraints: ${patientDataObject["Sitter/Restraints"]} \n Iso: ${patientDataObject["Iso (Y/N)"]} \n Code Status: ${patientDataObject["Code status"]} \n Height: ${patientDataObject["Ht"]} \n Weight: ${patientDataObject["wt"]} \n Bed Lvl: ${patientDataObject["Bed Lv Req'd"]} \n \n UA: Jevon H \n RN: ${caseData.rnName} \n \n If you can accept the patient, please reply "Accept".
    // `
    // const timeout = `Timeout with ${caseData.rnName} on ${caseData.patientName} \n \n Going to Kaiser XXX Room XXX, Report XXX, Pickup at XXX. \n Transport Lv: ${patientDataObject["Transport Lv Req'd"]}, Equip Needed: ${patientDataObject["Equip needed"]} \n Dx: ${patientDataObject["Transfer Dx"]}, IVF/Drips: ${patientDataObject["IVF/Drips"]}, COVID status: ${patientDataObject["COVID status"]} \n Sitter/Restraints: ${patientDataObject["Sitter/Restraints"]}, Iso: ${patientDataObject["Iso (Y/N)"]}, Code Status: ${patientDataObject["Code status"]} \n Leaving: XXX, ${patientDataObject["Current Bed Level"]} ${patientDataObject["Current RM"]}, Unit: ${patientDataObject["Unit phone#"]}
    // `
    // return { oneTouchTemplate, timeout }
}

