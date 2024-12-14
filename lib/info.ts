import { HomeFacilities, HomeFacilityOutpatient } from "./data";

export const uaInfo = [
    {
        title: "DCP Contacts",
        desc: [
            { title: "MSCC", desc: "800-464-4000" },
            { title: "Claims", desc: "800-390-3915" },
            { title: "KP DME", desc: "855-805-7363" },
            { title: "Apria", desc: "888-452-4363" },
            { title: "Joerns", desc: "800-826-0270" },
            { title: "Sizewise Bariatric", desc: "877-590-3151" },
            { title: "Byrum", desc: "833-752-4737" }
        ]
    },
    {
        title: "SCAN Contacts",
        desc: [
            { title: "SCAl Claims", desc: "800-390-3510" }
        ]
    },
    {
        title: "BUC Cortext Info",
        desc: HomeFacilities.map((facility) => (
            { title: facility.name, desc: facility.buc }
        ))
    },
    {
        title: "MOD Info",
        desc: HomeFacilities.map((facility) => (
            { title: facility.name, desc: facility.modName }
        ))
    },
    {
        title: "Home Health Contacts",
        desc: HomeFacilityOutpatient.map((facility) => (
            { title: facility.name, desc: facility.homeHealth }
        ))
    },
    {
        title: "Home Infusion Contacts",
        desc: HomeFacilityOutpatient.map((facility) => (
            { title: facility.name, desc: facility.homeInfusion }
        ))
    },
]