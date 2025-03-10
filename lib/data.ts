export type FacilityType = {
    name: string,
    address: string,
    mainline: string,
    caseManagement: string,
    medicalRecords: string,
    urReview: string,
    admitting: string,
    caseManagementFax: string,
    urReviewFax: string,
}
export type HomeFacilityType = {
    name: string,
    buc: string,
    modName: string[],
    closestFacilities: string[]
}
export const facilities: FacilityType[] = [
    {
        "name": " ",
        "address": " ",
        "mainline": " ",
        "caseManagement": " ",
        "medicalRecords": " ",
        "urReview": " ",
        "admitting": " ",
        "caseManagementFax": " ",
        "urReviewFax": " "
    },
    {
        "name": "Adventist Health Specialty Bakersfield (Bakersfield Heart)",
        "address": "3001 Sillect Ave Bakersfield CA 93308",
        "mainline": "661-316-6000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "661-316-6031",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "661-852-6259"
    },
    {
        "name": "Adventist Health Tehachapi Valley",
        "address": "1100 Magellan Dr, Tehachapi, CA 93561",
        "mainline": "(661)-823-3000",
        "caseManagement": "",
        "medicalRecords": "(661)-771-8860",
        "urReview": "844-382-0080",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "855-822-7450"
    },
    {
        "name": "Adventist Health White Memorial",
        "address": "1720 E Cesar E Chavez Ave, Los Angeles, CA 90033",
        "mainline": "(323)-268-5000",
        "caseManagement": "",
        "medicalRecords": "(323) 268-5000, ext. 10122",
        "urReview": "323-837-3408",
        "admitting": "(323) 260-5000 ext. 13344",
        "caseManagementFax": "",
        "urReviewFax": "323-837-3408"
    },
    {
        "name": "Adventist Health White Memorial Montebello",
        "address": "309 W. Beverly Blvd Montebello CA 90640",
        "mainline": "323-726-1222",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "844-382-0080",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "855-822-7450"
    },
    {
        "name": "Alhambra Hospital Medical Center",
        "address": "100 S Raymond Ave, Alhambra, CA 91801",
        "mainline": "(626)-570-1606",
        "caseManagement": "(626)-570-1606",
        "medicalRecords": "626-570-1606, Ext. 3212",
        "urReview": "626-458-4772",
        "admitting": "(626)-570-1606 x3240",
        "caseManagementFax": "",
        "urReviewFax": "626-656-606"
    },
    {
        "name": "Anaheim Global Medical Center",
        "address": "1025 S Anaheim Blvd Anaheim CA 92805",
        "mainline": "714-533-6220",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "714-953-7237",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "866-610-4018"
    },
    {
        "name": "Anaheim Regional Medical Center",
        "address": "1111 W La Palma Ave Anaheim CA 92801 ",
        "mainline": "714-774-1450",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "714-999-3841",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "714-999-3970"
    },
    {
        "name": "Arrowhead Regional Medical Center",
        "address": "400 N Pepper Ave, Colton, CA 92324",
        "mainline": "909-580-1000",
        "caseManagement": "909-580-1075",
        "medicalRecords": "909-580-0060",
        "urReview": "909-580-1075",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "909-580-2544"
    },
    {
        "name": "California Hospital Medical Center",
        "address": "1401 S Grand Ave, Los Angeles, CA 90015",
        "mainline": "213-748-2411",
        "caseManagement": "",
        "medicalRecords": "(213) 742-5470",
        "urReview": "213-742-5574",
        "admitting": "(213) 742-5580",
        "caseManagementFax": "",
        "urReviewFax": "844-881-9917"
    },
    {
        "name": "Casa Colina Hospital ",
        "address": "255 E Bonita Ave, Pomona, CA 91767",
        "mainline": "(909) 596-7733",
        "caseManagement": "",
        "medicalRecords": "909-450-0126",
        "urReview": "909-596-7733",
        "admitting": "909/596-7733, ext. 4100",
        "caseManagementFax": "",
        "urReviewFax": "909-596-7845"
    },
    {
        "name": "Cedars-Sinai Marina del Rey Hospital",
        "address": "4650 Lincoln Blvd. Marina del Rey, CA 90292",
        "mainline": "310-823-8911",
        "caseManagement": "",
        "medicalRecords": "\t310-577-5549",
        "urReview": "310-448-5203",
        "admitting": "310-448-5201",
        "caseManagementFax": "",
        "urReviewFax": ""
    },
    {
        "name": "Cedars-Sinai Medical Center",
        "address": "8700 Beverly Blvd, Los Angeles, CA 90048",
        "mainline": "(310) 423-3277",
        "caseManagement": "",
        "medicalRecords": "310-423-2259",
        "urReview": "310-423-4446",
        "admitting": "310-423-5327",
        "caseManagementFax": "",
        "urReviewFax": "310-423-5976"
    },
    {
        "name": "Centennial Hills Hospital",
        "address": "6900 N Durango Dr, Las Vegas, NV 89149",
        "mainline": "(702)-835-9700",
        "caseManagement": "",
        "medicalRecords": "(610)-994-7500",
        "urReview": "702-629-1227",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "702-853-8281"
    },
    {
        "name": "Centinela Hospital Medical Center",
        "address": "555 E Hardy St, Inglewood, CA 90301",
        "mainline": "(310) 673-4660",
        "caseManagement": "",
        "medicalRecords": "310-680-8129",
        "urReview": "310-680-8383",
        "admitting": "310-673-4660, ext. 6396",
        "caseManagementFax": "",
        "urReviewFax": "310-412-4530"
    },
    {
        "name": "Chino Valley Medical Center",
        "address": "5451 Walnut Ave Chino CA 91710 ",
        "mainline": "909-464-8600",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "909-464-8606",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "909-464-2061"
    },
    {
        "name": "CHLA Children's Hospital Los Angeles",
        "address": "4650 Sunset Blvd, Los Angeles, CA 90027",
        "mainline": "(323) 660-2450",
        "caseManagement": "",
        "medicalRecords": "323-361-2387",
        "urReview": "888-631-2452",
        "admitting": "323-361-2325",
        "caseManagementFax": "",
        "urReviewFax": "323-361-3604"
    },
    {
        "name": "CHOC Children's Hospital Orange County",
        "address": "1201 W La Veta Ave, Orange, CA 92868",
        "mainline": "(714) 997-3000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "714-509-8327",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "855-246-2329"
    },
    {
        "name": "City of Hope National",
        "address": "1500 E Duarte Rd, Duarte, CA 91010",
        "mainline": "(626) 256-4673",
        "caseManagement": "",
        "medicalRecords": "(844)-777-4673.",
        "urReview": "626-218-3726",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "626-218-7291"
    },
    {
        "name": "Coast Plaza Doctors Hospital",
        "address": "13100 Studebaker Rd Norwalk CA 90650 ",
        "mainline": "562-868-3751",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "562-868-3751 x2228",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "562-929-8152"
    },
    {
        "name": "Community Hospital San Bernardino",
        "address": "1805 Medical Center Dr San Bernardino CA 92411",
        "mainline": "909-887-6333",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "909-806-1524",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "855-378-3652"
    },
    {
        "name": "Desert Regional Medical Center",
        "address": "1150 N Indian Canyon Dr, Palm Springs, CA 92262",
        "mainline": "(760) 323-6511",
        "caseManagement": "",
        "medicalRecords": "760-323-6289",
        "urReview": "760-323-6611",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "760-323-6871"
    },
    {
        "name": "Desert Valley Hospital",
        "address": "16850 Bear Valley Rd, Victorville, CA 92395",
        "mainline": "(760)-241-8000",
        "caseManagement": "",
        "medicalRecords": "760-241-8000 Ext. 8686",
        "urReview": "760-241-8000 x8316",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "760-261-6796"
    },
    {
        "name": "Dignity Health Glendale Memorial Hospital",
        "address": "1420 S Central Ave Glendale CA 91204",
        "mainline": "818-502-1900",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "888-810-4119",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "844-218-4395"
    },
    {
        "name": "El Centro Regional Medical",
        "address": "1415 Ross Ave El Centro CA  92243",
        "mainline": "760-339-7100",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "760-482-5171",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "760-339-4587"
    },
    {
        "name": "Emanate Health Foothill Presbyterian Hospital",
        "address": "250 S Grand Ave, Glendora, CA 91741",
        "mainline": "(626)-963-8411",
        "caseManagement": "",
        "medicalRecords": "626.814.2440",
        "urReview": "626-857-3298",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "626-857-3286"
    },
    {
        "name": "Emanate Health Inter-Community Hospital",
        "address": "210 W San Bernardino Rd, Covina, CA 91723",
        "mainline": "(626) 331-7331",
        "caseManagement": "",
        "medicalRecords": "626.814.2440",
        "urReview": "626-915-6240",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "626-859-5850"
    },
    {
        "name": "Emanate Queen of the Valley Hospital",
        "address": "1115 S Sunset Ave, West Covina, CA 91790",
        "mainline": "(626) 962-4011",
        "caseManagement": "",
        "medicalRecords": "626.814.2440",
        "urReview": "626-814-2521",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "626-814-2462"
    },
    {
        "name": "Encompass Health Rehabilitation Hospital of Tustin",
        "address": "15120 Kensington Park Dr, Tustin, CA 92782",
        "mainline": "(714) 832-9200",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "714-573-5349",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "866-204-6991"
    },
    {
        "name": "Fountain Valley Regional",
        "address": "17100 Euclid St., Fountain Valley, CA 92708",
        "mainline": "714-966-7200",
        "caseManagement": "",
        "medicalRecords": "714-966-8027",
        "urReview": "714-966-8171",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "714-966-8178"
    },
    {
        "name": "Garden Grove Hospital and Medical Center",
        "address": "12601 Garden Grove Blvd, Garden Grove, CA 92843",
        "mainline": "(714)-537-5160",
        "caseManagement": "",
        "medicalRecords": "714-741-2737",
        "urReview": "714-741-4805",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "714-229-4094"
    },
    {
        "name": "Garfield Medical Center",
        "address": "525 N Garfield Ave Monterey Park CA 91754",
        "mainline": "626-573-2222",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "626-307-2042",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "626-307-2153"
    },
    {
        "name": "Glendale Adventist Medical Center",
        "address": "1509 Wilson Terrace Glendale CA 91206",
        "mainline": "(818) 409-8000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "844-382-0080",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "855-822-7450"
    },
    {
        "name": "Greater El Monte Community Hospital",
        "address": "1701 Santa Anita Avenue South El Monte, California 91733",
        "mainline": "626.579.7777",
        "caseManagement": "",
        "medicalRecords": "626.350.7912",
        "urReview": "626-350-7939",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "626-579-9047"
    },
    {
        "name": "Harbor UCLA Medical Center",
        "address": "1000 W Carson St, Torrance, CA 90502",
        "mainline": "(424) 306-4000",
        "caseManagement": "",
        "medicalRecords": "(424) 306-4100",
        "urReview": "424-306-8650",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "310-222-5498"
    },
    {
        "name": "Hemet Global Medical Center",
        "address": "1117 E Devonshire Ave, Hemet, CA 92543",
        "mainline": "(951) 652-2811",
        "caseManagement": "(951) 652-2811 x5146",
        "medicalRecords": "(951) 652-2811 x5116",
        "urReview": "951-765-4802",
        "admitting": "(951) 652-2811 x6111",
        "caseManagementFax": "",
        "urReviewFax": "951-765-4828"
    },
    {
        "name": "Henry Mayo Newhall Memorial Hospital",
        "address": "23845 W. McBean Pkwy. Valencia CA 91355",
        "mainline": "(661) 253-8000",
        "caseManagement": "",
        "medicalRecords": "661.200.1220 Press 2",
        "urReview": "661-200-1130",
        "admitting": "(661) 253-8311",
        "caseManagementFax": "",
        "urReviewFax": "661-200-1139"
    },
    {
        "name": "Hoag Memorial Hospital Presbyterian",
        "address": "1 Hoag Dr, Newport Beach, CA 92663",
        "mainline": "(949) 764-4624",
        "caseManagement": "",
        "medicalRecords": "(949) 764-8326, Option 2",
        "urReview": "949-764-8376",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "949-764-8378"
    },
    {
        "name": "Hollywood Presbyterian",
        "address": "1300 N Vermont Ave Los Angeles CA 90027",
        "mainline": "213-413-3000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "323-913-4888",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "323-644-5841"
    },
    {
        "name": "Huntington Hospital",
        "address": "100 W Calfornia Blvd Pasadena CA 91105",
        "mainline": "(626) 397-5000",
        "caseManagement": "",
        "medicalRecords": "(626)-397-5054",
        "urReview": "",
        "admitting": "(626)-397-5294",
        "caseManagementFax": "",
        "urReviewFax": ""
    },
    {
        "name": "Jacobs Medical Center at UC San Diego Health",
        "address": "9300 Campus Point Drive San Diego, CA 92037",
        "mainline": "858-657-7000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "619-543-6267",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "858-657-8777"
    },
    {
        "name": "John F Kennedy Memorial",
        "address": "47111 Monroe St, Indio, CA 92201",
        "mainline": "(760) 347-6191",
        "caseManagement": "",
        "medicalRecords": "760-775-8044",
        "urReview": "760-775-8000",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "760-775-8037"
    },
    {
        "name": "Keck Hospital of USC",
        "address": "1500 San Pablo St, Los Angeles, CA 90033",
        "mainline": "(800) 872-2273",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "323-442-8838",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "323-442-8434"
    },
    {
        "name": "Kern Medical Center",
        "address": "1700 Mt Vernon Ave Bakersfield CA 93306 ",
        "mainline": "661-326-2000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "661-326-2432",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "661-326-2440"
    },
    {
        "name": "Kindred Hospital Rancho Cucamonga",
        "address": "10841 White Oak Ave, Rancho Cucamonga, CA 91730",
        "mainline": "(909) 581-6400",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "909-204-7025",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "909-581-7265"
    },
    {
        "name": "La Palma Intercommunity Hospital",
        "address": "7901 Walker St, La Palma, CA 90623",
        "mainline": "(714)-670-7400",
        "caseManagement": "",
        "medicalRecords": "714-670-6147",
        "urReview": "714-670-6092",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "714-229-4094"
    },
    {
        "name": "Loma Linda University Children's Hospital",
        "address": "11234 Anderson St, Loma Linda, CA 92354",
        "mainline": "(909)-558-8000",
        "caseManagement": "",
        "medicalRecords": "909-651-4191",
        "urReview": "909-558-4141",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "909-558-0282"
    },
    {
        "name": "Loma Linda University Medical Center",
        "address": "11234 Anderson St, Loma Linda, CA 92354",
        "mainline": "(909) 558-4000",
        "caseManagement": "",
        "medicalRecords": "909-651-4191",
        "urReview": "909-558-4541",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "909-558-4380"
    },
    {
        "name": "Loma Linda University Medical Center - Murrieta",
        "address": "951-290-4000",
        "mainline": "951-290-4000",
        "caseManagement": "",
        "medicalRecords": "951-290-4510",
        "urReview": "951-704-1731",
        "admitting": "951-290-4200",
        "caseManagementFax": "",
        "urReviewFax": "951-290-4092"
    },
    {
        "name": "Long Beach Memorial Medical",
        "address": "2801 Atlantic Ave, Long Beach, CA 90806",
        "mainline": "(562) 933-2000",
        "caseManagement": "",
        "medicalRecords": "(562)-933-1141",
        "urReview": "562-933-0017",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "562-933-0026"
    },
    {
        "name": "Los Alamitos Medical Center",
        "address": "3751 Katella Ave., Los Alamitos, CA 90720",
        "mainline": "562-598-1311",
        "caseManagement": "",
        "medicalRecords": "562-799-3246 or 562-799-3256",
        "urReview": "562-799-3218",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "562-799-3483"
    },
    {
        "name": "Los Angeles General Medical Center",
        "address": "2051 Marengo St, Los Angeles, CA 90033",
        "mainline": "(323) 409-1000",
        "caseManagement": "",
        "medicalRecords": "(323) 409-6221 #1",
        "urReview": "323-409-2962",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "310-669-5624"
    },
    {
        "name": "Los Robles Regional Medical Center",
        "address": "215 W Janss Rd, Thousand Oaks, CA 91360",
        "mainline": "(805) 497-2727",
        "caseManagement": "(805)-370-4093",
        "medicalRecords": "(805) 370-4451",
        "urReview": "833-806-7757",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "805-370-4717"
    },
    {
        "name": "Martin Luther King Jr. Community Hospital",
        "address": "1680 E 120th St, Los Angeles, CA 90059",
        "mainline": "(424) 338-8000",
        "caseManagement": "",
        "medicalRecords": "424-338-8006",
        "urReview": "424-338-8584",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "424-338-8962"
    },
    {
        "name": "Memorial Hospital of Gardena",
        "address": "1145 W Redondo Beach Blvd, Gardena, CA 90247",
        "mainline": "(310)-532-4200",
        "caseManagement": "",
        "medicalRecords": "(310) 532-4200 x7285",
        "urReview": "310-538-6020",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "310-512-6127"
    },
    {
        "name": "Menifee Global Medical Center",
        "address": "28400 McCall Blvd, Menifee, CA 92585",
        "mainline": "(951)-679-8888",
        "caseManagement": "(951)-679-8888 x7122",
        "medicalRecords": "(951)-679-8888 x7499",
        "urReview": "",
        "admitting": "(951)-679-8888 x7008",
        "caseManagementFax": "",
        "urReviewFax": ""
    },
    {
        "name": "Mission Community Hospital",
        "address": "14850 Roscoe Blvd, Panorama City, CA 91402",
        "mainline": "(818) 787-2222",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "818-904-3614",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "818-904-3135"
    },
    {
        "name": "Montclair Hospital Medical Center",
        "address": "5000 San Bernardino Monclair CA 91763",
        "mainline": "909-625-5411",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "909-625-8187"
    },
    {
        "name": "Northridge Hospital Medical Center",
        "address": "18300 Roscoe Blvd, Northridge, CA 91325",
        "mainline": "(818) 885-8500",
        "caseManagement": "",
        "medicalRecords": "(818) 885-5309",
        "urReview": "763-321-3187",
        "admitting": "(818) 885-3528",
        "caseManagementFax": "",
        "urReviewFax": "844-760-4092"
    },
    {
        "name": "Norwalk Community Hospital",
        "address": "13222 Bloomfield Ave, Norwalk, CA 90650",
        "mainline": "(562) 863-4763",
        "caseManagement": "",
        "medicalRecords": "(562)-207-0747 ",
        "urReview": "562-863-4763",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "562-864-8435"
    },
    {
        "name": "Olive View UCLA Medical Center",
        "address": "14445 Olive View Dr, Sylmar, CA 91342",
        "mainline": "(747)-210-3000",
        "caseManagement": "",
        "medicalRecords": "(747) 210-4124",
        "urReview": "747-210-3414",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "747-210-4635"
    },
    {
        "name": "Orange Coast Memorial Medical Center",
        "address": "18111 Brookhurst St, Fountain Valley, CA 92708",
        "mainline": "(714)-378-7000",
        "caseManagement": "",
        "medicalRecords": "(714) 378-7440",
        "urReview": "714-378-7248",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "562-933-0026"
    },
    {
        "name": "Orange County Global Medical Center",
        "address": "1001 N Tustin Ave Santa Ana 92705 ",
        "mainline": "714-953-3500",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": ""
    },
    {
        "name": "Palmdale Regional Medical Center",
        "address": "38600 Medical Center Dr, Palmdale, CA 93551",
        "mainline": "(661)-382-5000",
        "caseManagement": "",
        "medicalRecords": "661-382-5048",
        "urReview": "661-382-5158",
        "admitting": "661-382-6723",
        "caseManagementFax": "",
        "urReviewFax": "661-382-5110"
    },
    {
        "name": "Palomar Medical Center Poway",
        "address": "15615 Pomerado Rd, Poway, CA 92064",
        "mainline": "(858) 613-4000",
        "caseManagement": "",
        "medicalRecords": "760.480.7901",
        "urReview": "442-281-4001",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "858-613-4332"
    },
    {
        "name": "Paradise Valley Hospital",
        "address": "2400 E 4th St, National City, CA 91950",
        "mainline": "(619) 470-4321",
        "caseManagement": "",
        "medicalRecords": "619-470-4210",
        "urReview": "619-470-4160",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "619-470-4162"
    },
    {
        "name": "Parkview Community Hospital",
        "address": "3865 Jackson St, Riverside, CA 92503",
        "mainline": "(951) 688-2211",
        "caseManagement": "",
        "medicalRecords": "(951) 352-5314",
        "urReview": "951-688-2211 x1021",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "951-352-5675"
    },
    {
        "name": "PIH Health Downey Hospital",
        "address": "11500 Brookshire Ave, Downey, CA 90241",
        "mainline": "562.904.5000",
        "caseManagement": "",
        "medicalRecords": "562.904.6177",
        "urReview": "",
        "admitting": "562.904.5100",
        "caseManagementFax": "",
        "urReviewFax": ""
    },
    {
        "name": "PIH Health Good Samaritan Hospital",
        "address": "1225 Wilshire Blvd, Los Angeles, CA 90017",
        "mainline": "(213) 977-2121",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "213-977-2038",
        "admitting": "213.482.2760",
        "caseManagementFax": "",
        "urReviewFax": "213-977-2040"
    },
    {
        "name": "PIH Health Whittier Hospital",
        "address": "12401 Washington Blvd, Whittier, CA 90602",
        "mainline": "(562) 698-0811",
        "caseManagement": "",
        "medicalRecords": "562.698.0811 Ext. 13860",
        "urReview": "562-698-0811 x12401",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "562-789-4326"
    },
    {
        "name": "Pomona Valley Hospital Medical Center",
        "address": "1798 N Garey Ave, Pomona, CA 91767",
        "mainline": "(909) 865-9500",
        "caseManagement": "",
        "medicalRecords": "909.865.9142",
        "urReview": "909-630-7284",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "909-620-0465"
    },
    {
        "name": "Providence Cedars-Sinai Tarzana Medical Center",
        "address": "18321 Clark St, Tarzana, CA 91356",
        "mainline": "(818) 881-0800",
        "caseManagement": "",
        "medicalRecords": "818-708-5367",
        "urReview": "818-708-5341",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "818-609-2247"
    },
    {
        "name": "Providence Holy Cross Medical Center ",
        "address": "15031 Rinaldi St, Mission Hills, CA 91345",
        "mainline": "818) 365-8051",
        "caseManagement": "",
        "medicalRecords": "818-847-3801",
        "urReview": "818-496-4651",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "818-496-4654"
    },
    {
        "name": "Providence Little Company of Mary - San Pedro",
        "address": "1300 W 7th St, San Pedro, CA 90732",
        "mainline": "(310)-832-3311",
        "caseManagement": "",
        "medicalRecords": "310-514-5260",
        "urReview": "310-732-6292",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "424-327-9931"
    },
    {
        "name": "Providence Little Company of Mary Medical Center - Torrance",
        "address": "4101 Torrance Blvd, Torrance, CA 90503",
        "mainline": "(310) 540-7676",
        "caseManagement": "",
        "medicalRecords": "310-303-5460",
        "urReview": "310-303-6800",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "310-595-2587"
    },
    {
        "name": "Providence Mission Hospital",
        "address": "27700 Medical Center Rd, Mission Viejo, CA 92691",
        "mainline": "(949) 364-1400",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "714-712-2340",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "714-712-2305"
    },
    {
        "name": "Providence Mission Hospital Mission Viejo",
        "address": "27700 Medical Center Rd, Mission Viejo, CA 92691",
        "mainline": "(949)-364-1400",
        "caseManagement": " 949-365-2134",
        "medicalRecords": "714-771-8167",
        "urReview": "714-712-2340",
        "admitting": "949-364-1400, ext. 7222",
        "caseManagementFax": "",
        "urReviewFax": "714-712-2305"
    },
    {
        "name": "Providence Saint Joseph Medical Center",
        "address": "501 S Buena Vista St Burbank CA 91505",
        "mainline": "818-843-5111",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "818-496-4651",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "818-847-3628"
    },
    {
        "name": "Providence St. Joseph Hospital Orange",
        "address": "1100 W Stewart Dr, Orange, CA 92868",
        "mainline": "(714) 771-8000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "714-712-2340",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "714-712-2305"
    },
    {
        "name": "Rady Children’s Hospital - San Diego",
        "address": "3020 Children's Way, San Diego, CA 92123",
        "mainline": "(858) 576-1700",
        "caseManagement": "",
        "medicalRecords": "858-966-5904",
        "urReview": "858-966-4903",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "858-966-8538"
    },
    {
        "name": "Rancho Los Amigos National Rehab Center",
        "address": "7601 Imperial Highway Downey CA 90242",
        "mainline": "562-385-7111",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "562-385-7164",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "562-385-7510"
    },
    {
        "name": "Redlands Community Hospital",
        "address": "350 Terracina Blvd, Redlands, CA 92373",
        "mainline": "(909) 335-5500",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "909-478-6787",
        "admitting": "909.335.5505",
        "caseManagementFax": "",
        "urReviewFax": "909-307-3500"
    },
    {
        "name": "Riverside Community Hospital",
        "address": "4445 Magnolia Ave, Riverside, CA 92501",
        "mainline": "(951) 788-3000",
        "caseManagement": "",
        "medicalRecords": "(844) 481-0278",
        "urReview": "951-788-3357",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "951-788-3600"
    },
    {
        "name": "Riverside County Regional Medical Center - Arlington Campus",
        "address": "1000 County Farm Rd Riverside CA 92503",
        "mainline": "951-358-4700",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "951-358-4580",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "951-486-5840"
    },
    {
        "name": "Riverside University Health System",
        "address": "26520 Cactus Ave, Moreno Valley, CA 92555",
        "mainline": "(951) 486-4000",
        "caseManagement": "(951) 486-5125",
        "medicalRecords": "(951) 486-5040",
        "urReview": "951-486-5125",
        "admitting": "(951) 486-4255",
        "caseManagementFax": "",
        "urReviewFax": "951-486-5840"
    },
    {
        "name": "Ronald Reagan UCLA Medical Center",
        "address": "757 Westwood Plaza, Los Angeles, CA 90095",
        "mainline": "(310) 825-9111",
        "caseManagement": "",
        "medicalRecords": "310-825-6021",
        "urReview": "",
        "admitting": "310-267-8000",
        "caseManagementFax": "",
        "urReviewFax": ""
    },
    {
        "name": "Saddleback Memorial Medical Center",
        "address": "24451 Health Center Dr, Laguna Hills, CA 92653",
        "mainline": "(949)-837-4500",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "562-933-0017",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "949-452-3353"
    },
    {
        "name": "San Antonio Regional Hospital",
        "address": "999 San Bernardino Rd, Upland, CA 91786",
        "mainline": "909.985.2811",
        "caseManagement": "909.920.4820",
        "medicalRecords": "909.920.4750",
        "urReview": "909-920-6396",
        "admitting": "909.579.6741",
        "caseManagementFax": "",
        "urReviewFax": "909-920-6167"
    },
    {
        "name": "San Dimas Community Hospital",
        "address": "1350 West Covina Boulevard San Dimas CA 91773",
        "mainline": "909-599-6811",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "909-305-5626",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "909-305-5692"
    },
    {
        "name": "San Gorgonio Memorial Hospital",
        "address": "600 N Highland Springs Ave Banning CA 92220 ",
        "mainline": "951-845-1121",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "951-769-2159",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "951-769-2158"
    },
    {
        "name": "Santa Barbara Cottage Hospital",
        "address": "400 W Pueblo St, Santa Barbara, CA 93105",
        "mainline": "(805) 682-7111",
        "caseManagement": "",
        "medicalRecords": "805-569-7306",
        "urReview": "805-325-9585",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "888-277-1246"
    },
    {
        "name": "Santa Monica UCLA Medical Center",
        "address": "1250 16th St, Santa Monica, CA 90404",
        "mainline": "(310)-825-9111",
        "caseManagement": "",
        "medicalRecords": "424-259-8045",
        "urReview": "424-259-7270",
        "admitting": "424-259-6611",
        "caseManagementFax": "",
        "urReviewFax": "424-529-6296"
    },
    {
        "name": "Scripps Green Hospital",
        "address": "10666 N Torrey Pines Rd, La Jolla, CA 92037",
        "mainline": "(858) 295-3054",
        "caseManagement": "",
        "medicalRecords": "760-633-7746",
        "urReview": "858-928-5930",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "858-554-2241"
    },
    {
        "name": "Scripps Memorial Hospital La Jolla",
        "address": "9888 Genesee Ave, La Jolla, CA 92037",
        "mainline": "(858) 834-1798",
        "caseManagement": "",
        "medicalRecords": "760-633-7746",
        "urReview": "858-626-5128",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "858-626-5119"
    },
    {
        "name": "Scripps Mercy Healthcare - San Diego",
        "address": "4077 Fifth Ave San Diego CA 92105 ",
        "mainline": "619-294-8111",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "619-260-7156",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "619-686-3846"
    },
    {
        "name": "Scripps Mercy Hospital - Chula Vista",
        "address": "435 H Street Chula Vista CA 91910",
        "mainline": "858-784-6275",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "858-927-5537",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "619-691-7491"
    },
    {
        "name": "Sharp Chula Vista Hospital",
        "address": "751 Medical Center Ct Chula Vista CA 91911",
        "mainline": "619-502-5800",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "877-474-2772",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "858-636-2451"
    },
    {
        "name": "Sharp Grossmont Hospital - La Mesa",
        "address": "5555 Grossmont Center Drive La Mesa CA 91942",
        "mainline": "619-740-6000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "619-740-4190",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "619-740-8592"
    },
    {
        "name": "Sharp Memorial Hospital",
        "address": "7901 Frost St San Diego CA 92123",
        "mainline": "858-939-3400",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "858-939-3393",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "858-939-3272"
    },
    {
        "name": "Simi Valley Hospital",
        "address": "2975 N Sycamore Dr Simi Valley CA 93065",
        "mainline": "805-955-6000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "844-382-0080",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "805-955-6845"
    },
    {
        "name": "Simi Valley Hospital ",
        "address": "2975 N Sycamore Dr Simi Valley CA 93065 ",
        "mainline": "805-955-6000 ",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "844-382-0080",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "805-955-6845"
    },
    {
        "name": "St Bernardine Medical Center",
        "address": "2101 N Waterman Ave San Bernardino CA 92404",
        "mainline": "909-883-8711",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "909-883-8711 x3711",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "877-434-2821"
    },
    {
        "name": "St Francis Medical Center",
        "address": "3630 E Imperial Hwy Lynwood CA 90262",
        "mainline": "310-900-8900",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "310-900-8630",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "310-900-8826"
    },
    {
        "name": "St Johns Hospital Health Center",
        "address": "2121 Santa Monica Blvd Santa Monica CA 90404",
        "mainline": "310-829-5511",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "310-829-8113",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "424-327-9931"
    },
    {
        "name": "St Johns Regional Medical Center",
        "address": "1600 N Rose Ave Oxnard CA 93030",
        "mainline": "805-988-2500",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "888-810-4119",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "805-981-4432"
    },
    {
        "name": "St Jude Medical Center",
        "address": "101 E Valencia Mesa Drive Fullerton CA 92835",
        "mainline": "714-992-3000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "714-712-2340",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "714-712-2305"
    },
    {
        "name": "St Mary Medical Center - Long Beach",
        "address": "1050 Linden Ave Long Beach CA 90813",
        "mainline": "562-491-9000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "562-491-9940",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "424-327-9931"
    },
    {
        "name": "Torrance Memorial Medical Center",
        "address": "3330 W Lomita Blvd Torrance CA 90505",
        "mainline": "310-325-9110",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "310-517-4727",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "310-784-4851"
    },
    {
        "name": "Tri City Medical Center",
        "address": "4002 Vista Way Oceanside CA 92056",
        "mainline": "760-724-8411",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "760-940-3632",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "760-940-7019"
    },
    {
        "name": "UC Irvine Medical Center",
        "address": "101 The City Drive Orange CA 92868",
        "mainline": "714-456-7890",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "714-456-7727",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "714-456-8996"
    },
    {
        "name": "UC San Diego Medical Center",
        "address": "200 W Arbor Dr  San Diego CA 92103",
        "mainline": "858-657-7000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "858-249-1306",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "619-543-6242"
    },
    {
        "name": "UCI Lakewood Regional Medical Center",
        "address": "3700 E South St Lakewood CA 90712",
        "mainline": "562-531-2550",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "562-602-6794",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "562-272-6538"
    },
    {
        "name": "UCLA West Valley",
        "address": "7300 Medical Center Dr West Hills CA 91307 ",
        "mainline": "818-676-4000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "833-806-7757",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "818-748-1912"
    },
    {
        "name": "UCSD Medical Center - Hillcrest",
        "address": "200 W Arbor Dr San Diego CA 92103",
        "mainline": "619-543-6222",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "619-543-6267",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "858-657-8882"
    },
    {
        "name": "UCSD Thornton Hospital",
        "address": "9300 Campus Point Drive La Jolla CA 92037",
        "mainline": "858-657-7000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "619-543-6267",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "858-657-8777"
    },
    {
        "name": "USC Arcadia Hospital",
        "address": "300 W Huntington Dr Arcadia CA 91007",
        "mainline": "626-898-8000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "626-574-3676",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "626-821-6905"
    },
    {
        "name": "USC Verdugo Hills Hospital",
        "address": "1812 Verdugo Blvd Glendale CA 91208",
        "mainline": "818-790-7100",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "818-952-2285",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "818-952-3526"
    },
    {
        "name": "Valley Presbyterian Hospital",
        "address": "15107 Vanowen St Van Nuys CA 91405",
        "mainline": "818-782-6600",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "818-902-2944",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "818-902-3944"
    },
    {
        "name": "Ventura County Medical Center",
        "address": "300 Hillmont Ave Ventura CA 93003",
        "mainline": "805-652-6000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "805-652-3303",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "805-648-9817"
    },
    {
        "name": "Victor Valley Global Medical Center",
        "address": "15248 Eleventh St Victorville CA 92395 ",
        "mainline": "760-245-8691",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "714-953-3388",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "866-610-4018"
    },
    {
        "name": "West Anaheim Medical Center",
        "address": "3033 W Orange Ave Anaheim CA 92804",
        "mainline": "714-827-3000",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "714-229-4031",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "714-229-4094"
    },
    {
        "name": "Whittier Hospital Medical Center",
        "address": "9080 Colima Rd Whitter CA 90605",
        "mainline": "562-945-3561",
        "caseManagement": "",
        "medicalRecords": "",
        "urReview": "562-907-1629",
        "admitting": "",
        "caseManagementFax": "",
        "urReviewFax": "562-907-1717"
    }]
export type HomeFacilityOutpatientType = {
    name: string,
    homeHealth: string,
    ouc: string,
    homeInfusion: string
}
export const HomeFacilities: HomeFacilityType[] = [
    {
        name: "Anaheim",
        buc: "OC Bed Nurses",
        modName: ['Care Without Delay', "Internal Medicine On Call - ANA"],
        closestFacilities: ["Downey", "Ontario", "Baldwin Park", "Habror City", "Los Angeles"]
    },
    {
        name: "Antelope Valley Medical Center",
        buc: "661-802-2300",
        modName: ["Exchange Line"],
        closestFacilities: ["Panorama City", "Woodland Hills", "Los Angeles", "West Los Angeles", "Fontana"]
    },
    {
        name: "Baldwin Park",
        buc: "BPK Bed Control",
        modName: ['DOD'],
        closestFacilities: ["Downey", "Los Angeles", "Ontario", "West Los Angeles", "Anaheim"]
    },
    {
        name: "CMH",
        buc: "805-910-9332 / 805-948-5681",
        modName: ['Ask for Exchange Line #'],
        closestFacilities: []
    },
    {
        name: "Downey",
        buc: "Call BUC",
        modName: ["Medical Consult"],
        closestFacilities: ["Baldwin Park", "Harbor City", "Los Angeles", "Anaheim", "West Los Angeles"]
    },
    {
        name: "Fontana",
        buc: "SBC Bed Control",
        modName: ['Care Without Delay Physician'],
        closestFacilities: ["Moreno Valley", "Baldwin Park", "Anaheim", "Downey", "Los Angeles"]
    },
    {
        name: "Harbor City (South Bay)",
        buc: "SB OURS One Touch",
        modName: ['IOD'],
        closestFacilities: ["Downey", "West Los Angeles", "Los Angeles", "Baldwin Park", "Anaheim"]
    },
    {
        name: "Irvine",
        buc: "OC Bed Nurses",
        modName: ['Care Without Delay', "Internal Medicine On Call - ANA"],
        closestFacilities: ["Downey", "Riverside", "Harbor City", "Baldwin Park", "Ontario"]
    },
    {
        name: "Los Angeles",
        buc: "LAMC Throughput Bed 1",
        modName: ['A.O.D Admitting DR'],
        closestFacilities: ["West Los Angeles", "Panorama City", "Woodland Hills", "Baldwin Park", "Downey"]
    },
    {
        name: "Moreno Valley",
        buc: "Riverside CM Bed Coordinator",
        modName: ['MVH IM/HMOD, ER MOD/R MOD', "MVH IM/IQM MD/CWD Advisor", "MVH IM/EPRP/Clinic/OURS"],
        closestFacilities: ["Fontana", "Anaheim", "Downey", "Baldwin Park"]
    },
    {
        name: "Ontario",
        buc: "SBC Bed Control",
        modName: ['Care Without Delay Physician', "After 5pm: Hospital Medicine 1604 OMC"],
        closestFacilities: ["Moreno Valley", "Baldwin Park", "Anaheim", "Downey", "Los Angeles"]
    },
    {
        name: "Panorama City",
        buc: "PC House Supervisor 1",
        modName: ['HOSP MOD Pgr 8172'],
        closestFacilities: ["Los Angeles", "Woodland Hills", "West Los Angeles", "Baldwin Park", "Downey"]
    },
    {
        name: "Riverside",
        buc: "Riverside CM Bed Coordinator",
        modName: ['Riv IM/HMOD, ER MOD/R MOD', "Riv IM/IQM MD/CWD Advisor", "Riv IM/EPRP/Clinic/OURS"],
        closestFacilities: ["Fontana", "Anaheim", "Downey", "Baldwin Park"]
    },
    {
        name: "San Diego",
        buc: "SD Bed Control OURS Main",
        modName: ['MOD SDMC 1'],
        closestFacilities: ["Irvine", "Riverside", "Fontana", "Downey"]
    },
    {
        name: "San Marcos",
        buc: "SD Bed Control OURS Main",
        modName: ['MOD SMMC 1'],
        closestFacilities: ["Irvine", "Riverside", "Fontana", "Downey"]
    },
    {
        name: "West Los Angeles",
        buc: "WLA BUC",
        modName: ["MOD/Hospitalist"],
        closestFacilities: ["Los Angeles", "Panorama City", "Woodland Hills", "Harbor City", "Downey"]
    },
    {
        name: "Woodland Hills",
        buc: "WH Bed Board Coordinators",
        modName: ["HOD Consult / HOD Cross Over"],
        closestFacilities: ["Panorama City", "Los Angeles", "West Los Angeles", "Baldwin Park", "Harbor City"]
    },

    {
        name: "Zion",
        buc: "SD Bed Control OURS Main",
        modName: ['MOD Zion 1'],
        closestFacilities: ["Irvine", "Riverside", "Fontana", "Downey"]
    },
]

export const HomeFacilityOutpatient = [
    {
        name: "Baldwin Park",
        homeHealth: "626-480-5177",
        ouc: "OURS",
        homeInfusion: "714-748-6333"
    },
    {
        name: "Downey",
        homeHealth: "562-622-4350",
        ouc: "OURS",
        homeInfusion: "714-748-6333"
    },
    {
        name: "Los Angeles",
        homeHealth: "323-783-4375",
        ouc: "OURS",
        homeInfusion: "714-748-6333"
    },

    {
        name: "Anaheim",
        homeHealth: "714-734-4500",
        ouc: "949-923-8186",
        homeInfusion: "714-748-6333"
    },
    {
        name: "Irvine",
        homeHealth: "714-734-4500",
        ouc: "949-923-8186",
        homeInfusion: "714-748-6333"
    },
    {
        name: "Panorama City",
        homeHealth: "818-832-7272",
        ouc: "818-375-3444",
        homeInfusion: "818-375-2462"
    },
    {
        name: "Riverside",
        homeHealth: "951-358-2600",
        ouc: "951-353-3010",
        homeInfusion: "909-609-3360"
    },
    {
        name: "Fontana",
        homeHealth: "909-609-3800",
        ouc: "909-609-3400",
        homeInfusion: "909-609-3360"
    },
    {
        name: "San Diego",
        homeHealth: "619-641-4211",
        ouc: "619-528-5200",
        homeInfusion: "619-641-4211"
    },
    {
        name: "Harbor City (South Bay)",
        homeHealth: "877-486-4020",
        ouc: "OURS",
        homeInfusion: "714-748-6333"
    },
    {
        name: "West Los Angeles",
        homeHealth: "323-783-4375",
        ouc: "OURS",
        homeInfusion: "323-857-4048"
    },
    {
        name: "Woodland Hills",
        homeHealth: "818-832-7272",
        ouc: "",
        homeInfusion: "818-375-2462"
    }
]