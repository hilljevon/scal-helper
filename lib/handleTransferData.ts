export const test1 = "Bed Lv Req'd: tele Transport Lv Req'd: als Equip needed: monitor, oxygen prn IVF/Drips: none cm bob 714 335 1123 x5431 Current Bed Level: med surg Current RM: 2114 Unit phone#: 919 336 5502 x2147 Fax#: NKF MD name: dr francis NKF MD phone #: 714 551 0992 Transfer Dx: s/p glioblastoma resection COVID status: not done Test Date (if applicable): Sitter/Restraints:n Iso (Y/N): If yes, specify: Code status: full Ht: 5ft 10in wt: 109 lbs"
export const test2 = "Bed Lv Req'd: ICU Transport Lv Req'd: CCT-RN Equip needed: monitor, mask IVF/Drips: heparin gtt 5cc/hr Current Bed Level: ICU Current RM: 5223 Unit phone#: 646-442-2214 Fax#: NKF MD name: dr mellbourne NKF MD phone #: 949-324-2147 Transfer Dx: sepsis COVID status: negative Test Date(if applicable): 10 / 14 Sitter / Restraints:Bilateral wrist restraints Iso(Y / N): N If yes, specify: Code status: DNR / DNI Ht: 170cm wt: 57kg"
export const test3 = "Bed Lv Req'd: Tele Transport Lv Req'd: BLS Equip needed: Cardiac Monitor IVF/Drips: Normal saline Current Bed Level: Tele Current RM: 1234 Unit phone#: 714-768-2944 Fax#: 714-888-4563 NKF MD name: dr mellbourne NKF MD phone #: 949-324-2147 Transfer Dx: sepsis COVID status: negative Test Date(if applicable): 10 / 14 Sitter / Restraints: Sitter Bilateral wrist restraints Iso(Y / N): N If yes, specify: Code status: DNR / DNI Ht: 170cm wt: 57kg"

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
    console.log("Engagement note object", engagementNoteObject)
    return engagementNoteObject
}
