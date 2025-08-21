import i18next from "i18next";
import moment from "moment";

export const encounterDocumentCreate = (
  appointmentDetails,
  patientDetails,
  doctorProfile,
  graduationDetails,
  medicalRegList,
  clinicDetails,
  addedCheifcomplaintsArray,
  prescription,
  invetigationsList,
  diagnosis,
  followUp,
  referDoctorToPatient,
  otherInstructions,
  doctorNotes,
  isDoctorNotes,
  vitalsObject,
  allergies,
  currentMedications,
  familyHistory,
  currentProblems,
  pastSurgicalHistory,
  pastMedicalHistory,
  obstetricHistory,
  GynaecologyHistory,
  socialHistory,
  nueroString,
  respString,
  cardString,
  abdString,
  glassString,
  integString,
  neuroVasString,
  muscuStirng,
  prescriptionPdfSettings,
  personalSocailHistory,
  historyArray,
  breakFast,
  midMorningSnack,
  lunch,
  afternoonSnack,
  dinner,
  dietPlanAdditionalNotes,
  fitnessPlan,
  nutritionMealPlan,
  groupedQuestionaryData,
  prePostQuestionaryData,
  language
) => {
  const docDefinition = {
    pageMargins: [20, 90, 20, 120],

    header: [
      {
        margin: [20, 20, 20, 0],

        columns: [
          // {
          //   image:
          //     clinicDetails?.clinicLogo !== ""
          //       ? clinicDetails?.clinicLogo
          //       : cianaCareLogoBase64,

          //   width: 60,

          //   height: 60,

          //   alignment: "left",

          //   margin: [0, 0, 0, 0],
          // },

          {
            width: "auto",

            columns: [
              [
                {
                  font: "Roboto",
                  text: clinicDetails?.clinicName || "",

                  bold: true,

                  color: "#4B2A08",

                  fontSize: 16,

                  alignment: "left",

                  margin: [10, 0, 0, 0],
                },

                {
                  font: "Roboto",
                  text: clinicDetails?.address?.buildingNumber || "",
                  fontSize: 10,
                  margin: [10, 0, 0, 0],
                },

                {
                  font: "Roboto",
                  text: clinicDetails?.address?.street || "",
                  fontSize: 10,
                  margin: [10, 0, 0, 0],
                },

                {
                  font: "Roboto",
                  text:
                    "Landmark: " +
                    (clinicDetails?.address?.landmark != null &&
                    clinicDetails?.address?.landmark !== undefined &&
                    clinicDetails?.address?.landmark !== ""
                      ? clinicDetails?.address?.landmark
                      : "") +
                    " " +
                    clinicDetails?.address?.city,

                  fontSize: 10,

                  margin: [10, 0, 0, 0],
                },
              ],
            ],
          },

          [
            {
              font: "Roboto",
              text:
                "Dr. " +
                  doctorProfile?.firstName +
                  " " +
                  doctorProfile?.lastName || "",

              bold: true,

              color: "#4B2A08",

              alignment: "right",

              fontSize: 16,
            },

            {
              font: "Roboto",
              text:
                (graduationDetails?.course
                  ? graduationDetails?.course + " | "
                  : "") +
                (doctorProfile?.specialization &&
                doctorProfile?.specialization[0] !== undefined
                  ? doctorProfile?.specialization[0]
                  : doctorProfile?.primarySpecialization[0] || ""),

              alignment: "right",

              margin: [0, 0, 0, 0],

              fontSize: 10,
            },

            {
              font: "Roboto",
              text:
                "AMC Reg. No. " +
                (medicalRegList?.regNumber ? medicalRegList?.regNumber : ""),

              alignment: "right",

              margin: [0, 0, 0, 0],

              fontSize: 10,
            },
          ],
        ],
      },

      {
        margin: [20, 0, 20, 0],

        table: {
          headerRows: 1,

          widths: ["*"],

          body: [[""], [""]],
        },

        layout: "headerLineOnly",
      },
    ],

    footer: {
      margin: [20, 60, 20, 0],

      columns: [
        [
          {
            image: doctorProfile?.signature || null,

            width: 100,

            height: 40,

            margin: [0, -48, 0, 0],

            alignment: "right",
          },

          {
            columns: [
              {
                columns: [
                  {
                    font: "Roboto",
                    text: "CONSULTATION TYPE",

                    bold: true,

                    fontSize: 12,

                    width: "auto",

                    alignment: "left",
                  },

                  {
                    font: "Roboto",
                    text:
                      appointmentDetails?.appointmentType === "WALKIN"
                        ? "Walkin"
                        : "Online",

                    fontSize: 11,

                    width: "auto",

                    alignment: "left",

                    color: "#979393",

                    margin: [10, 1, 0, 0],
                  },
                ],
              },

              {
                font: "Roboto",
                text:
                  "Dr. " +
                    doctorProfile?.firstName +
                    "  " +
                    doctorProfile?.lastName || "",

                bold: true,

                fontSize: 12,

                alignment: "right",
              },
            ],
          },

          {
            font: "Roboto",
            text:
              (graduationDetails?.course
                ? graduationDetails?.course + " | "
                : "") +
              (doctorProfile?.specialization &&
              doctorProfile?.specialization[0] !== undefined
                ? doctorProfile?.specialization[0]
                : doctorProfile?.primarySpecialization[0] || ""),

            fontSize: 12,

            alignment: "right",

            color: "#979393",

            width: "auto",
          },

          {
            font: "Roboto",
            text: "Powered by  :",

            fontSize: 6,

            width: "auto",

            alignment: "left",

            margin: [28, 0, 0, 0],
          },

          {
            columns: [
              [
                // {
                //   image: cianaCareLogoBase64,
                //   width: 60,
                //   alignment: "left",
                // },
              ],

              {
                font: "Roboto",
                text: [
                  { font: "Roboto", text: "USE ", fontSize: 8, bold: true },
                  {
                    font: "Roboto",
                    text: "CIANA",
                    fontSize: 8,
                    bold: true,
                    color: "#CB003F",
                  },
                  {
                    font: "Roboto",
                    text: "HEALTH",
                    fontSize: 8,
                    bold: true,
                    color: "#3C678C",
                  },
                  {
                    font: "Roboto",
                    text: " APP FOR ALL YOUR MEDICAL NEEDS",
                    fontSize: 8,
                    bold: true,
                  },
                ],
                bold: true,
                alignment: "right",
                fontSize: 8,
                margin: [0, 10, 0, 0],
              },
            ],
          },
        ],
      ],
    },

    content: [],
  };

  docDefinition?.content?.push(
    {
      columns: [
        {
          font: "Roboto",
          text:
            patientDetails?.demographicInfo?.firstName?.toLocaleUpperCase() +
              " " +
              patientDetails?.demographicInfo?.lastName?.toLocaleUpperCase() ||
            "",

          bold: true,

          fontSize: 11,

          margin: [0, 10, 0, 0],

          alignment: "left",

          // width: '70%'

          width: "auto",
        },

        {
          font: "Roboto",
          text: " | " + patientDetails?.phoneNumber,

          bold: true,

          fontSize: 11,

          margin: [2, 10, 0, 0],

          alignment: "left",

          width: "auto",
        },

        patientDetails?.demographicInfo?.dOB
          ? {
              font: "Roboto",
              text:
                " | " +
                  moment().diff(patientDetails?.demographicInfo?.dOB, "years") +
                  "(Y)" || "",

              bold: true,

              fontSize: 11,

              margin: [2, 10, 0, 0],

              width: "auto",

              alignment: "left",
            }
          : "",

        patientDetails?.demographicInfo?.gender?.charAt(0)
          ? {
              font: "Roboto",
              text: patientDetails?.demographicInfo?.gender?.charAt(0),

              bold: true,

              fontSize: 11,

              margin: [2, 10, 0, 0],

              alignment: "left",

              width: "auto",
            }
          : "",

        {
          // width: '30%',

          alignment: "right",

          columns: [
            [
              {
                font: "Roboto",
                text: "Date",

                alignment: "right",

                width: "auto",

                margin: [0, 10, 10, 0],

                fontSize: 10,

                color: "#464646",
              },
            ],

            {
              font: "Roboto",
              text: `${moment().format("DD/MM/YYYY")}`,

              alignment: "right",

              margin: [0, 10, 0, 0],

              bold: true,

              width: "auto",

              fontSize: 10,
            },
          ],
        },
      ],
    },

    Object.keys(vitalsObject).length > 0 && prescriptionPdfSettings?.vitals
      ? {
          columns: [
            {
              font: "Roboto",
              text: "Temp: ",

              alignment: "left",

              width: "auto",

              margin: [0, 10, 0, 5],

              color: "#979393",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: vitalsObject?.temperature || "",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 0, 0],

              color: "#565656",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: "F°" + " | ",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 1, 0],

              color: "#979393",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: "Heart Rate: ",

              alignment: "left",

              width: "auto",

              margin: [4, 10, 0, 5],

              color: "#979393",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: vitalsObject?.pulse
                ? parseInt(vitalsObject?.pulse, 10)
                : "",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 0, 0],

              color: "#565656",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: "BPM" + " | ",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 1, 0],

              color: "#979393",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: "Blood Pressure: ",

              alignment: "left",

              width: "auto",

              margin: [4, 10, 0, 5],

              color: "#979393",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text:
                vitalsObject?.bpDiastolic && vitalsObject?.bpSystolic
                  ? parseInt(vitalsObject?.bpDiastolic, 10) +
                    "/" +
                    parseInt(vitalsObject?.bpSystolic, 10)
                  : "",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 0, 0],

              color: "#565656",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: "mmhg" + " | ",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 1, 0],

              color: "#979393",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: "Weight: ",

              alignment: "left",

              width: "auto",

              margin: [4, 10, 0, 5],

              color: "#979393",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: vitalsObject?.weight
                ? parseInt(vitalsObject?.weight, 10)?.toFixed(1)
                : "",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 0, 0],

              color: "#565656",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: "Kg" + " | ",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 1, 0],

              color: "#979393",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: "SPO2: ",

              alignment: "left",

              width: "auto",

              margin: [4, 10, 0, 5],

              color: "#979393",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: vitalsObject?.spo2 || "",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 0, 0],

              color: "#565656",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: "%",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 0, 0],

              color: "#979393",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: "Height: ",

              alignment: "left",

              width: "auto",

              margin: [4, 10, 0, 5],

              color: "#979393",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: vitalsObject?.height
                ? parseInt(vitalsObject?.height, 10)?.toFixed(1)
                : "",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 0, 0],

              color: "#565656",

              fontSize: 10,
            },

            {
              font: "Roboto",
              text: "cms",

              alignment: "left",

              width: "auto",

              margin: [1, 10, 0, 0],

              color: "#979393",

              fontSize: 10,
            },
          ],
        }
      : "",

    {
      margin: [0, 0, 0, 0],

      table: {
        headerRows: 1,

        widths: ["*"],

        body: [[""], [""]],
      },

      layout: "headerLineOnly",
    },

    addedCheifcomplaintsArray?.length > 0 &&
      prescriptionPdfSettings?.reasonVisit
      ? {
          font: "Roboto",
          text: "Symptoms:",

          bold: true,

          fontSize: 10,

          margin: [0, 10, 0, 0],

          width: "auto",
        }
      : "",

    historyArray?.length > 0
      ? prescriptionPdfSettings?.reasonVisit &&
          historyArray?.map((i) => [
            {
              bold: true,

              fontSize: 10,

              margin: [0, 5, 0, 0],

              font: "Roboto",
              text: i?.chiefComplaintName?.toUpperCase(),
            },

            {
              fontSize: 8,

              font: "Roboto",
              text:
                i?.data?.length > 0
                  ? "[" +
                    i?.data
                      ?.map((j, ind) =>
                        j?.value?.length > 0
                          ? `${
                              j?.key === "othersDescription"
                                ? "Description"
                                : j?.key.charAt(0).toUpperCase() +
                                    j?.key.slice(1) || ""
                            } : ${j?.value}${
                              parseInt(ind) < parseInt(i?.data?.length - 1)
                                ? ", "
                                : ""
                            }`
                          : ""
                      )
                      .join("") +
                    "]"
                  : "",
            },
          ])
      : addedCheifcomplaintsArray?.length > 0
      ? {
          fontSize: 10,

          bold: true,

          ul: [...(addedCheifcomplaintsArray?.map((p) => p?.name) || "NA")],
        }
      : "",

    diagnosis?.length > 0 &&
      prescriptionPdfSettings?.diagnosis?.provisionalDiagnosis
      ? {
          font: "Roboto",
          text: "Diagnosis:",

          decoration: "underline",

          margin: [0, 10, 0, 0],

          fontSize: 10,
        }
      : "",

    diagnosis?.length > 0 &&
      prescriptionPdfSettings?.diagnosis?.provisionalDiagnosis
      ? {
          fontSize: 8,

          ul: [...(diagnosis?.map((p) => p?.diagnosisDescription) || "NA")],
        }
      : "",

    otherInstructions?.length > 0 &&
      prescriptionPdfSettings?.patientsInstruction
      ? {
          font: "Roboto",
          text: "Patient Instructions:",

          decoration: "underline",

          margin: [0, 10, 0, 2],

          fontSize: 10,
        }
      : "",

    otherInstructions?.toString()?.length > 0 &&
      prescriptionPdfSettings?.patientsInstruction
      ? {
          font: language,
          text:
            // "hiiii",
            (() => {
              return otherInstructions
                .toString()
                .split(",") // Split by comma
                .map((instruction) => {
                  const cleanedInstruction = instruction
                    .replace(/^•\s*/, "")
                    .trim(); // Remove bullet points and extra spaces
                  return (
                    i18next.t(`patientInstructions.${cleanedInstruction}`) ||
                    cleanedInstruction
                  ); // Translate or fallback to original
                })
                .join(", "); // Join back with a comma
            })(), // Inline function for translation
          fontSize: 8,
          margin: [10, 5, 0, 0],
          width: "auto",
        }
      : "",

    isDoctorNotes && doctorNotes?.length > 0
      ? {
          font: "Roboto",
          text: "Doctor notes:",

          decoration: "underline",

          margin: [0, 10, 0, 2],

          fontSize: 10,
        }
      : "",
    isDoctorNotes && doctorNotes?.length > 0
      ? {
          font: "Roboto",
          text: doctorNotes?.toString(),

          fontSize: 8,

          margin: [10, 5, 0, 0],

          width: "auto",
        }
      : "",

    prescription?.length > 0 && prescriptionPdfSettings?.prescription
      ? {
          font: "Roboto",
          text: "Prescription",

          bold: true,

          fontSize: 10,

          // color: '#14a7a7',

          margin: [0, 10, 0, 4],

          // decoration: 'underline'
        }
      : "",

    prescription?.length > 0 && prescriptionPdfSettings?.prescription
      ? {
          fontSize: 8,

          table: {
            headerRows: 1,

            widths: [30, "*", 80, 80, "*"],

            body: [
              [
                {
                  font: "Roboto",
                  text: "S.NO",

                  fillColor: "#E9E9E9",

                  color: "#8B8B8B",

                  bold: true,

                  fontSize: 9,
                },

                {
                  font: "Roboto",
                  text: "Medicine Name",

                  fillColor: "#E9E9E9",

                  color: "#8B8B8B",

                  bold: true,

                  fontSize: 9,
                },

                {
                  font: "Roboto",
                  text: "Dosage Route",

                  fillColor: "#E9E9E9",

                  bold: true,

                  color: "#8B8B8B",

                  fontSize: 9,
                },

                {
                  font: "Roboto",
                  text: "Frequency",

                  fillColor: "#E9E9E9",

                  bold: true,

                  color: "#8B8B8B",

                  fontSize: 9,
                },

                {
                  font: "Roboto",
                  text: "Instructions",

                  fillColor: "#E9E9E9",

                  bold: true,

                  color: "#8B8B8B",

                  fontSize: 9,
                },
              ],

              ...prescription?.map((p, i) => [
                i + 1,

                { font: "Roboto", text: p.drugName, bold: true },
                {
                  font: language,
                  text: i18next.t(
                    p.drugRoute ? `dosageRoute.${p.drugRoute}` : "Unknown"
                  ),
                  bold: true,
                } || "",
                {
                  font: language,
                  text:
                    i18next.t(
                      p.frequency ? `frequency.${p.frequency}` : "Unknown"
                    ) +
                    " " +
                    i18next.t("for") +
                    " " +
                    (() => {
                      const parts = p.duration.split(" "); // Split number and unit
                      if (parts.length === 2) {
                        const [number, unit] = parts;
                        return `${number} ${i18next.t(
                          unit ? `duration.${unit}` : "Unknown"
                        )}`; // Translate unit and keep number
                      }
                      return p.duration; // Return original if format is unexpected
                    })(),
                  bold: true,
                },

                // Translate frequency + "for"
                p.instructions !== undefined
                  ? { font: "Roboto", text: p.instructions, bold: true }
                  : "",
              ]),
            ],
          },

          layout: "noBorders",
        }
      : "",

    invetigationsList?.length > 0 && prescriptionPdfSettings?.investigation
      ? {
          font: "Roboto",
          text: "Lab Investigation",

          bold: true,

          fontSize: 9,

          margin: [0, 30, 0, 4],
        }
      : "",

    invetigationsList?.length > 0 && prescriptionPdfSettings?.investigation
      ? {
          fontSize: 8,

          table: {
            headerRows: 1,

            widths: [30, "*", "*"],

            body: [
              [
                {
                  font: "Roboto",
                  text: "S.NO",

                  fillColor: "#E9E9E9",

                  bold: true,

                  fontSize: 9,
                },

                {
                  font: "Roboto",
                  text: "Test Name",

                  fillColor: "#E9E9E9",

                  bold: true,

                  fontSize: 9,
                },

                {
                  font: "Roboto",
                  text: "Instructions",

                  fillColor: "#E9E9E9",

                  bold: true,

                  fontSize: 9,
                },
              ],

              ...invetigationsList?.map((p, i) => [
                i + 1,
                p?.lab_test_name || p?.testName,
                p.instructions || "N/A",
              ]),
            ],
          },

          layout: "noBorders",
        }
      : ""
  );

  docDefinition?.content?.push(
    prescriptionPdfSettings?.overview?.allergies &&
      [
        ...(allergies?.drugAllergies || []),
        ...(allergies?.foodAllergies || []),
        ...(allergies?.environmentAllergies || []),
      ]?.length > 0
      ? {
          columns: [
            [
              {
                font: "Roboto",
                text: "Allergies",

                bold: true,

                fontSize: 10,

                // color: '#14a7a7',

                margin: [0, 10, 0, 4],

                // decoration: 'underline'
              },

              {
                fontSize: 8,

                margin: [0, 0, 10, 0],

                table: {
                  headerRows: 1,

                  widths: ["*", "*", "*"],

                  body: [
                    [
                      {
                        font: "Roboto",
                        text: "Allergy Name",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,
                      },

                      {
                        font: "Roboto",
                        text: "Allergy Type",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,
                      },

                      {
                        font: "Roboto",
                        text: "Start Date",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,
                      },
                    ],

                    ...[
                      ...(allergies?.drugAllergies || []),
                      ...(allergies?.foodAllergies || []),
                      ...(allergies?.environmentAllergies || []),
                    ]?.map((d) => [
                      d?.drugName
                        ? { font: "Roboto", text: d?.drugName || "" }
                        : d?.environmentName
                        ? {
                            font: "Roboto",
                            text: d?.environmentName || "",
                          }
                        : {
                            font: "Roboto",
                            text: d?.foodName || "",
                          },

                      d?.type,

                      moment(d?.date).format("DD-MMM-YYYY"),
                    ]),
                  ],
                },

                layout: "noBorders",
              },
            ],
          ],
        }
      : "",

    currentMedications?.length > 0 &&
      prescriptionPdfSettings?.overview?.medicationHistory
      ? {
          columns: [
            [
              {
                font: "Roboto",
                text: "Medication History",

                bold: true,

                fontSize: 10,

                // color: '#14a7a7',

                margin: [0, 10, 0, 4],

                // decoration: 'underline'
              },

              {
                fontSize: 8,

                margin: [0, 0, 10, 0],

                table: {
                  headerRows: 1,

                  widths: ["*", "*", "*", "*"],

                  body: [
                    [
                      {
                        font: "Roboto",
                        text: "Medicine Name",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },

                      {
                        font: "Roboto",
                        text: "Dosage Route",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },

                      {
                        font: "Roboto",
                        text: "Frequency",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },

                      {
                        font: "Roboto",
                        text: "Instructions",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },
                    ],

                    ...currentMedications.map((c) => [
                      { font: "Roboto", text: c?.drugName || "" },

                      { font: "Roboto", text: c?.drugRoute || "" },

                      {
                        font: "Roboto",
                        text: `${c?.frequency || ""} for ${c?.duration || ""}`,
                      },

                      { font: "Roboto", text: c?.instructions || "" },
                    ]),
                  ],
                },

                layout: "noBorders",
              },
            ],
          ],
        }
      : "",

    familyHistory?.length > 0 &&
      prescriptionPdfSettings?.overview?.familyHistory
      ? {
          columns: [
            [
              {
                font: "Roboto",
                text: "Family History",

                bold: true,

                fontSize: 10,

                // color: '#14a7a7',

                margin: [0, 10, 0, 4],

                // decoration: 'underline'
              },

              {
                fontSize: 8,

                margin: [0, 0, 10, 0],

                table: {
                  headerRows: 1,

                  widths: ["*", "*", "*"],

                  body: [
                    [
                      {
                        font: "Roboto",
                        text: "Relationship",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },

                      {
                        font: "Roboto",
                        text: "Condition",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },

                      {
                        font: "Roboto",
                        text: "Outcome",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },
                    ],

                    ...familyHistory.map((f) => [
                      { font: "Roboto", text: f?.relationShip || "" },
                      { font: "Roboto", text: f?.condition || "" },
                      { font: "Roboto", text: f?.outcome || "" },
                    ]),
                  ],
                },

                layout: "noBorders",
              },
            ],
          ],
        }
      : "",

    currentProblems?.length > 0 &&
      prescriptionPdfSettings?.overview?.problemList
      ? {
          columns: [
            [
              {
                font: "Roboto",
                text: "Problem List",

                bold: true,

                fontSize: 10,

                // color: '#14a7a7',

                margin: [0, 10, 0, 4],

                // decoration: 'underline'
              },

              {
                fontSize: 8,

                margin: [0, 0, 10, 0],

                table: {
                  headerRows: 1,

                  widths: ["*", "*", "*"],

                  body: [
                    [
                      {
                        font: "Roboto",
                        text: "Medical Condition",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },

                      {
                        font: "Roboto",
                        text: "Started ON",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },

                      {
                        font: "Roboto",
                        text: "Current Status",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },
                    ],

                    ...currentProblems.map((c) => [
                      { font: "Roboto", text: c?.ICDDescription || "" },

                      {
                        font: "Roboto",
                        text: moment(c?.startedOn).format("DD-MMM-YYYY") || "",
                      },

                      { font: "Roboto", text: c?.currentStatus || "" },
                    ]),
                  ],
                },

                layout: "noBorders",
              },
            ],
          ],
        }
      : "",

    pastSurgicalHistory?.length > 0 &&
      prescriptionPdfSettings?.overview?.pastSurgicalHistory
      ? {
          columns: [
            [
              {
                font: "Roboto",
                text: "Past Surgical History",

                bold: true,

                fontSize: 10,

                // color: '#14a7a7',

                margin: [0, 10, 0, 4],

                // decoration: 'underline'
              },

              {
                fontSize: 8,

                margin: [0, 0, 10, 0],

                table: {
                  headerRows: 1,

                  widths: ["*", "*", "*"],

                  body: [
                    [
                      {
                        font: "Roboto",
                        text: "Procedure Description",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },

                      {
                        font: "Roboto",
                        text: "Time of Occurrence",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },

                      {
                        font: "Roboto",
                        text: "Outcome",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },
                    ],

                    ...pastSurgicalHistory.map((p) => [
                      {
                        font: "Roboto",
                        text: p?.procedureDescription || "",
                      },

                      {
                        font: "Roboto",
                        text:
                          moment(p?.timeOfOccurance).format("DD-MMM-YYYY") ||
                          "",
                      },

                      { font: "Roboto", text: p?.outcome || "" },
                    ]),
                  ],
                },

                layout: "noBorders",
              },
            ],
          ],
        }
      : "",

    pastMedicalHistory?.length > 0 &&
      prescriptionPdfSettings?.overview?.pastMedicalHistory
      ? {
          columns: [
            [
              {
                font: "Roboto",
                text: "Past Medical History",

                bold: true,

                fontSize: 10,

                // color: '#14a7a7',

                margin: [0, 10, 0, 4],

                // decoration: 'underline'
              },

              {
                fontSize: 8,

                margin: [0, 0, 10, 0],

                table: {
                  headerRows: 1,

                  widths: ["*", "*", "*"],

                  body: [
                    [
                      {
                        font: "Roboto",
                        text: "Medical Condition",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },

                      {
                        font: "Roboto",
                        text: "Time of Occurrence",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },

                      {
                        font: "Roboto",
                        text: "Outcome",

                        fillColor: "#E9E9E9",

                        bold: true,

                        fontSize: 9,

                        width: "auto",
                      },
                    ],

                    ...pastMedicalHistory.map((p) => [
                      { font: "Roboto", text: p?.ICDDescription },
                      {
                        font: "Roboto",
                        text: moment(p?.timeOfOccurance).format("DD-MMM-YYYY"),
                      },
                      { font: "Roboto", text: p?.outcome },
                    ]),
                  ],
                },

                layout: "noBorders",
              },
            ],
          ],
        }
      : "",
    nutritionMealPlan.length > 0
      ? [
          {
            layout: {
              hLineWidth: () => 0,
              vLineWidth: () => 0,
              paddingLeft: () => 4,
              paddingRight: () => 4,
              paddingTop: () => 6,
              paddingBottom: () => 6,
            },
            table: {
              headerRows: 1,
              widths: ["auto", "*", "*", "*", "*", "*"],
              body: [
                [
                  {
                    text: "S.NO",
                    bold: true,
                    fillColor: "#E9E9E9",
                    fontSize: 10,
                  },
                  {
                    text: "BREAKFAST",
                    bold: true,
                    fillColor: "#E9E9E9",
                    fontSize: 10,
                  },
                  {
                    text: "MORNING SNACK",
                    bold: true,
                    fillColor: "#E9E9E9",
                    fontSize: 10,
                  },
                  {
                    text: "LUNCH",
                    bold: true,
                    fillColor: "#E9E9E9",
                    fontSize: 10,
                  },
                  {
                    text: "EVENING SNACK",
                    bold: true,
                    fillColor: "#E9E9E9",
                    fontSize: 10,
                  },
                  {
                    text: "DINNER",
                    bold: true,
                    fillColor: "#E9E9E9",
                    fontSize: 10,
                  },
                ],
                ...nutritionMealPlan.map((day, index) => [
                  { text: index + 1, fontSize: 8 },
                  {
                    text:
                      day?.meals?.breakfast
                        ?.map(
                          (item) =>
                            `${item.item} - ${item.quantity} ${item.measurement}`
                        )
                        .join(", ") || "-",
                    fontSize: 8,
                  },
                  {
                    text:
                      day?.meals?.mid_morning_snack
                        ?.map(
                          (item) =>
                            `${item.item} - ${item.quantity} ${item.measurement}`
                        )
                        .join(", ") || "-",
                    fontSize: 8,
                  },
                  {
                    text:
                      day?.meals?.lunch
                        ?.map(
                          (item) =>
                            `${item.item} - ${item.quantity} ${item.measurement}`
                        )
                        .join(", ") || "-",
                    fontSize: 8,
                  },
                  {
                    text:
                      day?.meals?.evening_snack
                        ?.map(
                          (item) =>
                            `${item.item} - ${item.quantity} ${item.measurement}`
                        )
                        .join(", ") || "-",
                    fontSize: 8,
                  },
                  {
                    text:
                      day?.meals?.dinner
                        ?.map(
                          (item) =>
                            `${item.item} - ${item.quantity} ${item.measurement}`
                        )
                        .join(", ") || "-",
                    fontSize: 8,
                  },
                ]),
              ],
            },
          },

          dietPlanAdditionalNotes?.length > 0
            ? {
                columns: [
                  {
                    font: defaultLang,
                    text: "Additional notes",
                    fontSize: 9,
                    width: "auto",
                    bold: true,
                    margin: [0, 6, 0, 0],
                    decoration: "underline",
                  },
                  {
                    font: defaultLang,
                    text: dietPlanAdditionalNotes,
                    fontSize: 9,
                    margin: [4, 6, 0, 0],
                  },
                ],
              }
            : "",
        ]
      : "",
    groupedQuestionaryData != undefined &&
      groupedQuestionaryData != null &&
      groupedQuestionaryData.length != 0
      ? {
          text: "Screening Questionaries",
          bold: true,
          fontSize: 10,
          margin: [0, 10, 0, 4],
          decoration: "underline",
        }
      : "",
    ...groupedQuestionaryData.map((group) => ({
      stack: [
        {
          text: group?.outsideText,
          fontSize: 9,
          bold: true,
          decoration: "underline",
        },
        ...group?.items?.map((que) => ({
          stack: [
            {
              text: "Q) " + que?.text,
              fontSize: 8,
              bold: true,
            },
            {
              columns: [
                {
                  text: "A)", // First column with "A)"
                  fontSize: 8,
                  width: "auto",
                },
                {
                  text: que.display
                    .split(",")
                    .map((item, index) => {
                      return `${index + 1}. ${item.trim()}`;
                    })
                    .join("\n"), // Join the items with line breaks
                  fontSize: 8,
                  width: "*", // Takes the remaining space
                },
              ],
            },
          ],
        })),
      ],
    })),
    prePostQuestionaryData != undefined &&
      prePostQuestionaryData != null &&
      prePostQuestionaryData.length != 0
      ? {
          text: "Screening Questionaries",
          bold: true,
          fontSize: 10,
          margin: [0, 10, 0, 4],
          decoration: "underline",
        }
      : "",
    ...prePostQuestionaryData.map((group) => ({
      stack: [
        {
          text: group?.outsideText,
          fontSize: 9,
          bold: true,
          decoration: "underline",
          margin: [0, 6, 0, 0],
        },
        ...group?.questionAndAnswer?.map((que, queIndex) => ({
          stack: [
            {
              text: "Q) " + que?.questionText,
              fontSize: 8,
              bold: true,
              margin: [0, 6, 0, 0],
            },

            {
              columns: [
                {
                  text: "A) ", // First column with "A)"
                  fontSize: 8,
                  width: "auto",
                },
                {
                  text: que.answers
                    .map((item, index) => {
                      return `${index + 1}. ${item?.display.trim()}`;
                    })
                    .join("\n"), // Join the items with line breaks
                  fontSize: 8,
                  width: "*", // Takes the remaining space
                },
              ],
            },
          ],
        })),
      ],
    })),
    {
      margin: [0, 20, 0, 0],

      columns: [
        Object.keys(obstetricHistory)?.length > 0 &&
        prescriptionPdfSettings?.overview?.obstetricHistory &&
        patientDetails?.demographicInfo?.gender === "Female"
          ? [
              {
                font: "Roboto",
                text: "Obstetric History",

                fontSize: 10,

                decoration: "underline",
              },

              {
                font: "Roboto",
                text: "GPLA",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Gravidity",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: obstetricHistory?.GPLA?.gravidity || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Parity",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: obstetricHistory?.GPLA?.parity || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Live",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: obstetricHistory?.GPLA?.live,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Abortion",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: obstetricHistory?.GPLA?.abortion,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "TERMINATIONS",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Ectopic Pregnancy",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: obstetricHistory?.terminations,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Comments",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: obstetricHistory?.commentForTerminations,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "PREVIOUS PREGNANCIES",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  [
                    obstetricHistory?.previousPregnancies &&
                    obstetricHistory?.previousPregnancies?.length > 0
                      ? {
                          width: "auto",

                          stack: [
                            ...obstetricHistory?.previousPregnancies?.map(
                              (p) => [
                                {
                                  columns: [
                                    {
                                      font: "Roboto",
                                      text: "Length In Weeks:",

                                      fontSize: 9,

                                      margin: [0, 2, 0, 1],

                                      width: "auto",
                                    },

                                    {
                                      font: "Roboto",
                                      text: p?.lengthInWeeks,

                                      fontSize: 9,

                                      margin: [1, 2, 0, 0],

                                      width: "auto",
                                    },
                                  ],
                                },
                              ]
                            ),
                          ],
                        }
                      : "",
                  ],

                  [
                    obstetricHistory?.previousPregnancies &&
                    obstetricHistory?.previousPregnancies?.length > 0
                      ? {
                          stack: [
                            ...obstetricHistory?.previousPregnancies?.map(
                              (p) => [
                                {
                                  columns: [
                                    {
                                      font: "Roboto",
                                      text: "Mode Of Delivery:",

                                      fontSize: 9,

                                      margin: [0, 2, 0, 1],

                                      width: "auto",
                                    },

                                    p?.modeOfDelivery !== undefined
                                      ? {
                                          font: "Roboto",
                                          text: p?.modeOfDelivery,

                                          fontSize: 9,

                                          margin: [1, 2, 0, 0],

                                          width: "auto",
                                        }
                                      : "",
                                  ],
                                },
                              ]
                            ),
                          ],
                        }
                      : "",
                  ],
                ],
              },

              {
                font: "Roboto",
                text: "PAST COMPLICATION OF PREGNANCY",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Before",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.pastComplicationsOfPregnancy?.before?.toString() ||
                      "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "During",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.pastComplicationsOfPregnancy?.during?.toString() ||
                      "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "After",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.pastComplicationsOfPregnancy?.after?.toString() ||
                      "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "FAMILY OBSTETRIC HISTORY",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Twins",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: obstetricHistory?.familyObstetricHistory?.twins || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Recurrent Miscarriage",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.familyObstetricHistory
                        ?.recurrentMiscarriage || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "CURRENT PREGNANCY",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Confirmation Of Pregnancy",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.confirmationOfPregnancy?.toString() ||
                      "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "DATES",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "LMP",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      moment(
                        obstetricHistory?.currentPregnancy?.dates?.LMP
                      ).format("DD-MM-YYYY") || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "EDD By LMP",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      moment(
                        obstetricHistory?.currentPregnancy?.dates?.EDDByLMP
                      ).format("DD-MM-YYYY") || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "EDD By Ultrasound",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      moment(
                        obstetricHistory?.currentPregnancy?.dates
                          ?.EDDByUltrasound
                      ).format("DD-MM-YYYY") || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Gestational Age In Weeks(POG)",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.dates
                        ?.gestationalAgeInWeeks || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "SCANS",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Size",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: obstetricHistory?.currentPregnancy?.scans?.size || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Location",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.scans?.location || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Morphological Issues",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.scans
                        ?.morphologicalIssues || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "OTHER INVESTIGATIONS",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "ABO Group",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.otherInvestigations
                        ?.ABOGroup || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Rhesus Group",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.otherInvestigations
                        ?.rhesusGroup || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "HBsAg",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.otherInvestigations
                        ?.hbsag || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "HIV Status",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.otherInvestigations
                        ?.hivStatus || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "VDRL",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.otherInvestigations
                        ?.VDRL || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Rubella Status",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.otherInvestigations
                        ?.rubellaStatus || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Haemoglobin",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.otherInvestigations
                        ?.hemoglobin || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "FOETAL MOVEMENTS",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Foetal Movements",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.foetalMovements
                        ?.foetalMovements || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "COMPLICATIONS OF THIS PREGNANCY",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Gestational Diabetes",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy
                        ?.complicationsOfThisPregnancy?.gestationalDiabetes ||
                      "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Pre-eclampsia",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy
                        ?.complicationsOfThisPregnancy?.preEclampsia || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "MEDICATIONS FOR THIS PREGNANCY",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Folic acid",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy
                        ?.medicationsForThisPregnancy?.folicAcid || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Iron",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy
                        ?.medicationsForThisPregnancy?.iron || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Calcium",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy
                        ?.medicationsForThisPregnancy?.calcium || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Antimetics",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy
                        ?.medicationsForThisPregnancy?.antiemetics || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Tetanus Toxoid Shot",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy
                        ?.medicationsForThisPregnancy?.tetanusToxoidShot || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "PLAN FOR DELIVERY",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      obstetricHistory?.currentPregnancy?.planForDelivery || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },
            ]
          : "",

        Object.keys(GynaecologyHistory)?.length > 0 &&
        prescriptionPdfSettings?.overview?.gynaecologyHistory &&
        patientDetails?.demographicInfo?.gender === "Female"
          ? [
              {
                font: "Roboto",
                text: "Gynaecology History",

                fontSize: 10,

                decoration: "underline",
              },

              {
                font: "Roboto",
                text: "MENSTRUAL PERIODS",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Regularity",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      GynaecologyHistory?.menstrualPeriods?.regularity || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Duration",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: GynaecologyHistory?.menstrualPeriods?.duration || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Flow",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: GynaecologyHistory?.menstrualPeriods?.flow || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Pain",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: GynaecologyHistory?.menstrualPeriods?.pain || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "PAST GYNAECOLOGIC DISEASE",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Ectopic Pregnancy",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      GynaecologyHistory?.pastGynaecologicDisease
                        ?.ectopicPregnancy || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "STD",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      GynaecologyHistory?.pastGynaecologicDisease?.STD || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "PID",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      GynaecologyHistory?.pastGynaecologicDisease?.PID || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "PAST GYNAECOLOGIC SURGERY",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "D&C",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      GynaecologyHistory?.pastGynaecologicSurgery?.dAndC || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "LEFTZ Cervical Treatment",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      GynaecologyHistory?.pastGynaecologicSurgery
                        ?.letzCervicalTreatment || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Breast Surgery",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      GynaecologyHistory?.pastGynaecologicSurgery
                        ?.breastSurgery || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "PAP SMEAR",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Last Smear Taken On",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: GynaecologyHistory?.papSmear?.lastSmearTakenOn || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Result",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: GynaecologyHistory?.papSmear?.result || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "MAMMOGRAM",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Mammogram Done",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: GynaecologyHistory?.mammogram?.mammogramDone || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "PAST SUBFERTILITY",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Amount Of Time Attempting Pregnancy",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      GynaecologyHistory?.pastSubFertility
                        ?.amountOfTimeAttemptingPregnancy || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Medications",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text:
                      GynaecologyHistory?.pastSubFertility?.medications || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "IVF",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: GynaecologyHistory?.pastSubFertility?.IVF || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                font: "Roboto",
                text: "MENOPAUSE STATUS",

                fontSize: 9,

                color: "#14636A",

                bold: true,

                margin: [0, 2, 0, 1],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Attained",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: GynaecologyHistory?.menopauseStatus?.attained || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "AtAge",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: GynaecologyHistory?.menopauseStatus?.atAge || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },
            ]
          : "",
      ],
    },
    {
      table: {
        widths: ["15%", "25%", "15%", "25%"],
        body: [
          [
            {
              font: "Roboto",
              text: "Sleep",

              bold: true,

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },
            {
              font: language,
              text:
                i18next.t(
                  socialHistory?.sleep ? socialHistory?.sleep : "Unknown"
                ) || "",

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },
            {
              font: "Roboto",
              text: "Diet",

              bold: true,

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            {
              font: language,
              text:
                i18next.t(
                  socialHistory?.diet ? socialHistory?.diet : "Unknown"
                ) || "",

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },
          ],
          [
            {
              font: "Roboto",
              text: "Smoking",

              fontSize: 9,

              bold: true,

              margin: [0, 2, 0, 1],
            },

            {
              font: language,
              text:
                i18next.t(
                  socialHistory?.smoking ? socialHistory?.smoking : "Unknown"
                ) || "",

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            {
              font: "Roboto",
              text: "Alocohol Consumption",

              fontSize: 9,

              bold: true,

              margin: [0, 2, 0, 1],
            },

            {
              font: language,
              text:
                i18next.t(
                  socialHistory?.alcoholConsumption
                    ? socialHistory?.alcoholConsumption
                    : "Unknown"
                ) || "",

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },
          ],
          [
            {
              font: "Roboto",
              text: "Tobacco Consumption",

              bold: true,

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            {
              font: language,
              text:
                i18next.t(
                  socialHistory?.tobaccoConsumption
                    ? socialHistory?.tobaccoConsumption
                    : "Unknown"
                ) || "",

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            {
              font: "Roboto",
              text: "Recreational Drugs",

              bold: true,

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            {
              font: language,
              text:
                i18next.t(
                  socialHistory?.recreationalDrugs
                    ? socialHistory?.recreationalDrugs
                    : "Unknown"
                ) || "",

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },
          ],
          [
            {
              font: "Roboto",
              text: "Execrcise",

              bold: true,

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            {
              font: language,
              text:
                i18next.t(
                  socialHistory?.exercise ? socialHistory?.exercise : "Unknown"
                ) || "",

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            {
              font: "Roboto",
              text: "Marital Status",

              bold: true,

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            {
              font: language,
              text:
                i18next.t(
                  personalSocailHistory?.maritalStatus
                    ? personalSocailHistory?.maritalStatus
                    : "Unknown"
                ) || "",

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },
          ],
          [
            {
              font: "Roboto",
              text: "Social Support",

              bold: true,

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            personalSocailHistory?.socialSupport &&
            personalSocailHistory?.socialSupport?.length > 0
              ? {
                  font: language,
                  text: personalSocailHistory?.socialSupport
                    ?.map((p) => i18next.t(p ? p : "Unknown"))
                    ?.toString(),
                  fontSize: 9,
                  margin: [0, 2, 0, 1],
                }
              : "",

            {
              font: "Roboto",
              text: "Educational Status",

              bold: true,

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            {
              font: language,
              text:
                i18next.t(
                  personalSocailHistory?.educationStatus
                    ? personalSocailHistory?.educationStatus
                    : "Unknown"
                ) || "",

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },
          ],
          [
            {
              font: "Roboto",
              text: "Occupation",

              bold: true,

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            {
              font: language,
              text:
                i18next.t(
                  personalSocailHistory?.occupation
                    ? personalSocailHistory?.occupation
                    : "Unknown"
                ) || "",

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },
            {
              font: "Roboto",
              text: "Occupation",

              bold: true,

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },

            {
              font: language,
              text:
                i18next.t(
                  personalSocailHistory?.occupation
                    ? personalSocailHistory?.occupation
                    : "Unknown"
                ) || "",

              fontSize: 9,

              margin: [0, 2, 0, 1],
            },
          ],
        ],
      },
      layout: "noBorders",
    },
    Object.keys(socialHistory)?.length > 0 &&
      prescriptionPdfSettings?.overview?.socialHistory
      ? {
          columns: [
            [
              {
                font: "Roboto",
                text: "Social History",

                fontSize: 10,

                decoration: "underline",

                bold: true,
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Sleep",

                    bold: true,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: language,
                    text:
                      i18next.t(
                        socialHistory?.sleep ? socialHistory?.sleep : "Unknown"
                      ) || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Diet",

                    bold: true,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: language,
                    text:
                      i18next.t(
                        socialHistory?.diet ? socialHistory?.diet : "Unknown"
                      ) || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Smoking",

                    fontSize: 9,

                    bold: true,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: language,
                    text:
                      i18next.t(
                        socialHistory?.smoking
                          ? socialHistory?.smoking
                          : "Unknown"
                      ) || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Alocohol Consumption",

                    fontSize: 9,

                    bold: true,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: language,
                    text:
                      i18next.t(
                        socialHistory?.alcoholConsumption
                          ? socialHistory?.alcoholConsumption
                          : "Unknown"
                      ) || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Tobacco Consumption",

                    bold: true,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: language,
                    text:
                      i18next.t(
                        socialHistory?.tobaccoConsumption
                          ? socialHistory?.tobaccoConsumption
                          : "Unknown"
                      ) || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Recreational Drugs",

                    bold: true,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: language,
                    text:
                      i18next.t(
                        socialHistory?.recreationalDrugs
                          ? socialHistory?.recreationalDrugs
                          : "Unknown"
                      ) || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Execrcise",

                    bold: true,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: language,
                    text:
                      i18next.t(
                        socialHistory?.exercise
                          ? socialHistory?.exercise
                          : "Unknown"
                      ) || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: "Roboto",
                    text: "Marital Status",

                    bold: true,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: language,
                    text:
                      i18next.t(
                        personalSocailHistory?.maritalStatus
                          ? personalSocailHistory?.maritalStatus
                          : "Unknown"
                      ) || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Social Support",

                    bold: true,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  personalSocailHistory?.socialSupport &&
                  personalSocailHistory?.socialSupport?.length > 0
                    ? {
                        font: language,
                        text: personalSocailHistory?.socialSupport
                          ?.map((p) => i18next.t(p ? p : "Unknown"))
                          ?.toString(),
                        fontSize: 9,
                        margin: [0, 2, 0, 1],
                      }
                    : "",

                  {
                    font: "Roboto",
                    text: "Educational Status",

                    bold: true,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: language,
                    text:
                      i18next.t(
                        personalSocailHistory?.educationStatus
                          ? personalSocailHistory?.educationStatus
                          : "Unknown"
                      ) || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },

              {
                columns: [
                  {
                    font: "Roboto",
                    text: "Occupation",

                    bold: true,

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },

                  {
                    font: language,
                    text:
                      i18next.t(
                        personalSocailHistory?.occupation
                          ? personalSocailHistory?.occupation
                          : "Unknown"
                      ) || "",

                    fontSize: 9,

                    margin: [0, 2, 0, 1],
                  },
                ],
              },
            ],

            [],
          ],
        }
      : "",

    (prescriptionPdfSettings?.assessment?.neuro && nueroString) ||
      (prescriptionPdfSettings?.assessment?.respiratory && respString) ||
      (prescriptionPdfSettings?.assessment?.cardiovascular && cardString) ||
      (prescriptionPdfSettings?.assessment?.ABDOMINAL && abdString) ||
      (prescriptionPdfSettings?.assessment?.glaslowComaScale && glassString) ||
      (prescriptionPdfSettings?.assessment?.integumentary && integString) ||
      (prescriptionPdfSettings?.assessment?.neurovascularExtremeties &&
        neuroVasString) ||
      (prescriptionPdfSettings?.assessment?.muscoloskeltal && muscuStirng)
      ? {
          font: "Roboto",
          text: "Assessment",

          fontSize: 10,

          bold: true,

          margin: [0, 20, 0, 4],
        }
      : "",

    nueroString && prescriptionPdfSettings?.assessment?.neuro
      ? {
          font: "Roboto",
          text: "NEURO :",

          fontSize: 10,

          bold: true,

          margin: [0, 5, 0, 4],
        }
      : "",

    nueroString && prescriptionPdfSettings?.assessment?.neuro
      ? {
          font: "Roboto",
          text: "[ " + nueroString?.toString() + " ]",

          width: "auto",

          fontSize: 9,
        }
      : "",

    respString && prescriptionPdfSettings?.assessment?.respiratory
      ? {
          font: "Roboto",
          text: "RESPIRATORY :",

          fontSize: 10,

          bold: true,

          margin: [0, 10, 0, 4],
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    respString && prescriptionPdfSettings?.assessment?.respiratory
      ? {
          font: "Roboto",
          text: "[ " + respString?.toString() + "]",

          width: "auto",

          fontSize: 9,
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    cardString && prescriptionPdfSettings?.assessment?.cardiovascular
      ? {
          font: "Roboto",
          text: "CARDIOVASCULAR :",

          fontSize: 10,

          bold: true,

          margin: [0, 10, 0, 4],
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    cardString && prescriptionPdfSettings?.assessment?.cardiovascular
      ? {
          font: "Roboto",
          text: " [ " + cardString?.toString() + " ] ",

          width: "auto",

          fontSize: 9,
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    abdString && prescriptionPdfSettings?.assessment?.ABDOMINAL
      ? {
          font: "Roboto",
          text: "ABDOMINAL/GI/GU :",

          fontSize: 10,

          bold: true,

          margin: [0, 10, 0, 4],
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    abdString && prescriptionPdfSettings?.assessment?.ABDOMINAL
      ? {
          font: "Roboto",
          text: "[ " + abdString?.toString() + " ]",

          width: "auto",

          fontSize: 9,
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    muscuStirng && prescriptionPdfSettings?.assessment?.muscoloskeltal
      ? {
          font: "Roboto",
          text: "MUSCOLOSKELTAL :",

          fontSize: 10,

          bold: true,

          margin: [0, 10, 0, 4],
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    muscuStirng && prescriptionPdfSettings?.assessment?.muscoloskeltal
      ? {
          font: "Roboto",
          text: "[" + muscuStirng?.toString() + "]",

          width: "auto",

          fontSize: 9,
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    glassString && prescriptionPdfSettings?.assessment?.glaslowComaScale
      ? {
          font: "Roboto",
          text: "GLASLOW COMA SCALE(GCS SCALE) :",

          fontSize: 10,

          bold: true,

          margin: [0, 10, 0, 4],
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    glassString && prescriptionPdfSettings?.assessment?.glaslowComaScale
      ? {
          font: "Roboto",
          text: "[" + glassString?.toString() + " ]",

          width: "auto",

          fontSize: 9,
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    integString && prescriptionPdfSettings?.assessment?.integumentary
      ? {
          font: "Roboto",
          text: "INTEGUMENTARY :",

          fontSize: 10,

          bold: true,

          margin: [0, 10, 0, 4],
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    integString && prescriptionPdfSettings?.assessment?.integumentary
      ? {
          font: "Roboto",
          text: "[ " + integString?.toString() + " ]",

          width: "auto",

          fontSize: 9,
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    neuroVasString &&
      prescriptionPdfSettings?.assessment?.neurovascularExtremeties
      ? {
          font: "Roboto",
          text: "NEUROVASCULAR EXTREMETIES :",

          fontSize: 10,

          bold: true,

          margin: [0, 10, 0, 4],
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    neuroVasString &&
      prescriptionPdfSettings?.assessment?.neurovascularExtremeties
      ? {
          font: "Roboto",
          text: "[ " + neuroVasString?.toString() + " ]",

          width: "auto",

          fontSize: 9,
        }
      : {
          font: "Roboto",
          text: "",

          width: "auto",
        },

    Object.keys(followUp)?.length > 0 &&
      followUp?.isFollowupRequested &&
      prescriptionPdfSettings?.followup
      ? {
          alignment: "left",

          margin: [0, 50, 0, 0],

          columns: [
            {
              font: "Roboto",
              text: "Review",

              fontSize: 10,

              bold: true,

              // color: '#14a7a7',

              width: "auto",

              margin: [0, 5, 0, 0],
            },

            {
              font: "Roboto",
              text: " - Review after " + followUp?.follwUpDate || "NA",

              fontSize: 9,

              margin: [4, 6, 0, 0],
            },
          ],
        }
      : {
          font: "Roboto",
          text: "",

          alignment: "left",

          margin: [0, 50, 0, 0],
        },

    Object?.keys(referDoctorToPatient)?.length > 0 &&
      referDoctorToPatient?.referDoctorName !== "" &&
      prescriptionPdfSettings?.doctorReferral
      ? {
          margin: [0, 50, 0, 0],

          columns: [
            {
              font: "Roboto",
              text: "Referred Doctor: ",

              fontSize: 10,

              bold: true,

              width: "auto",

              // color: '#14a7a7',

              margin: [0, 5, 0, 0],
            },

            referDoctorToPatient?.referDoctorName !== ""
              ? {
                  font: "Roboto",
                  text: "Name ",

                  fontSize: 9,

                  width: "auto",

                  color: "#979393",

                  margin: [4, 6, 0, 0],
                }
              : "",

            {
              font: "Roboto",
              text: referDoctorToPatient?.referDoctorName,

              fontSize: 9,

              width: "auto",

              margin: [4, 6, 0, 0],
            },

            referDoctorToPatient?.specialization !== ""
              ? {
                  font: "Roboto",
                  text: " | SPECIALITY ",

                  fontSize: 9,

                  width: "auto",

                  color: "#979393",

                  margin: [4, 6, 0, 0],
                }
              : "",

            referDoctorToPatient?.specialization !== ""
              ? {
                  font: "Roboto",
                  text: referDoctorToPatient?.specialization,

                  fontSize: 9,

                  width: "auto",

                  margin: [4, 6, 0, 0],
                }
              : "",

            referDoctorToPatient?.address !== ""
              ? {
                  font: "Roboto",
                  text: " | LOCATION ",

                  fontSize: 9,

                  width: "auto",

                  color: "#979393",

                  margin: [4, 6, 0, 0],
                }
              : "",

            referDoctorToPatient?.address !== ""
              ? {
                  font: "Roboto",
                  text: referDoctorToPatient?.address,

                  fontSize: 9,

                  width: "auto",

                  margin: [4, 6, 0, 0],
                }
              : "",
          ],
        }
      : "",
    breakFast?.length > 0 ||
      midMorningSnack?.length > 0 ||
      lunch?.length > 0 ||
      afternoonSnack?.length > 0 ||
      dinner?.length > 0
      ? [
          {
            font: "Roboto",
            text: "Nutrition plan",

            fontSize: 10,

            bold: true,

            width: "auto",

            // color: '#14a7a7',

            margin: [0, 5, 0, 0],
          },

          breakFast?.length > 0
            ? [
                {
                  font: "Roboto",
                  text: "Breakfast",

                  fontSize: 9,

                  width: "auto",

                  bold: true,

                  margin: [0, 6, 0, 0],

                  decoration: "underline",
                },

                breakFast?.map((food, index) => {
                  return {
                    columns: [
                      {
                        font: "Roboto",
                        text:
                          index +
                            1 +
                            ") " +
                            food?.item +
                            " - " +
                            food?.quantity +
                            " " +
                            food?.measurement || "",

                        fontSize: 9,

                        margin: [4, 6, 0, 0],
                      },
                    ],
                  };
                }),
              ]
            : "",

          midMorningSnack?.length > 0
            ? [
                {
                  font: "Roboto",
                  text: "MidMorning Snack",

                  fontSize: 9,

                  width: "auto",

                  bold: true,

                  margin: [0, 6, 0, 0],

                  decoration: "underline",
                },

                midMorningSnack?.map((food, index) => {
                  return {
                    columns: [
                      {
                        font: "Roboto",
                        text:
                          index +
                            1 +
                            ") " +
                            food?.item +
                            " - " +
                            food?.quantity +
                            " " +
                            food?.measurement || "",

                        fontSize: 9,

                        margin: [4, 6, 0, 0],
                      },
                    ],
                  };
                }),
              ]
            : "",

          lunch?.length > 0
            ? [
                {
                  font: "Roboto",
                  text: "Lunch",

                  fontSize: 9,

                  width: "auto",

                  bold: true,

                  margin: [0, 6, 0, 0],

                  decoration: "underline",
                },

                lunch?.map((food, index) => {
                  return {
                    columns: [
                      {
                        font: "Roboto",
                        text:
                          index +
                            1 +
                            ") " +
                            food?.item +
                            " - " +
                            food?.quantity +
                            " " +
                            food?.measurement || "",

                        fontSize: 9,

                        margin: [4, 6, 0, 0],
                      },
                    ],
                  };
                }),
              ]
            : "",

          afternoonSnack?.length > 0
            ? [
                {
                  font: "Roboto",
                  text: "AfternoonSnack Snack",

                  fontSize: 9,

                  width: "auto",

                  bold: true,

                  margin: [0, 6, 0, 0],

                  decoration: "underline",
                },

                afternoonSnack?.map((food, index) => {
                  return {
                    columns: [
                      {
                        font: "Roboto",
                        text:
                          index +
                            1 +
                            ") " +
                            food?.item +
                            " - " +
                            food?.quantity +
                            " " +
                            food?.measurement || "",

                        fontSize: 9,

                        margin: [4, 6, 0, 0],
                      },
                    ],
                  };
                }),
              ]
            : "",

          dinner?.length > 0
            ? [
                {
                  font: "Roboto",
                  text: "Dinner",

                  fontSize: 9,

                  width: "auto",

                  bold: true,

                  margin: [0, 6, 0, 0],

                  decoration: "underline",
                },

                dinner?.map((food, index) => {
                  return {
                    columns: [
                      {
                        font: "Roboto",
                        text:
                          index +
                            1 +
                            ") " +
                            food?.item +
                            " - " +
                            food?.quantity +
                            " " +
                            food?.measurement || "",

                        fontSize: 9,

                        margin: [4, 6, 0, 0],
                      },
                    ],
                  };
                }),
              ]
            : "",

          dietPlanAdditionalNotes?.length > 0
            ? {
                columns: [
                  {
                    font: "Roboto",
                    text: "Additional notes",

                    fontSize: 9,

                    width: "auto",

                    bold: true,

                    margin: [0, 6, 0, 0],

                    decoration: "underline",
                  },

                  {
                    font: "Roboto",
                    text: dietPlanAdditionalNotes || "",

                    fontSize: 9,

                    margin: [4, 6, 0, 0],
                  },
                ],
              }
            : "",
        ]
      : "",

    fitnessPlan?.length > 0
      ? [
          {
            font: "Roboto",
            text: "Fitness plan",

            fontSize: 10,

            bold: true,

            width: "auto",

            // color: '#14a7a7',

            margin: [0, 20, 0, 10],
          },

          {
            fontSize: 8,

            table: {
              headerRows: 1,

              widths: [30, "*", 80, 80],

              body: [
                [
                  {
                    font: "Roboto",
                    text: "S.NO",

                    fillColor: "#E9E9E9",

                    color: "#8B8B8B",

                    bold: true,

                    fontSize: 9,
                  },

                  {
                    font: "Roboto",
                    text: "Category",

                    fillColor: "#E9E9E9",

                    color: "#8B8B8B",

                    bold: true,

                    fontSize: 9,
                  },

                  {
                    font: "Roboto",
                    text: "Duration",

                    fillColor: "#E9E9E9",

                    bold: true,

                    color: "#8B8B8B",

                    fontSize: 9,
                  },

                  {
                    font: "Roboto",
                    text: "Exercise",

                    fillColor: "#E9E9E9",

                    bold: true,

                    color: "#8B8B8B",

                    fontSize: 9,
                  },
                ],

                ...fitnessPlan?.map((p, i) => [
                  { font: "Roboto", text: i + 1, margin: [0, 5, 0, 0] },

                  {
                    font: "Roboto",
                    text: p?.category,

                    margin: [0, 5, 0, 0],
                  },

                  {
                    font: "Roboto",
                    text: p?.duration || "",
                    margin: [0, 5, 0, 0],
                  },

                  {
                    font: "Roboto",
                    text: p?.exercise || "",
                    margin: [0, 5, 0, 0],
                  },
                ]),
              ],
            },

            layout: "noBorders",
          },
        ]
      : ""
  );

  // const docDefinition = {
  //   pageMargins: [20, 90, 20, 120],
  //   header: [
  //     {
  //       margin: [20, 20, 20, 0],
  //       columns: [
  //         {
  //           image: clinicDetails?.clinicLogo,
  //           width: 60,
  //           height: 60,
  //           alignment: "left",
  //           margin: [0, 0, 0, 0],
  //         },
  //         [
  //           {
  //             text: clinicDetails?.clinicName || "",
  //             bold: true,
  //             color: "#4B2A08",
  //             fontSize: 16,
  //             alignment: "left",
  //             margin: [10, 0, 0, 0],
  //           },
  //           {
  //             text: clinicDetails?.address?.buildingNumber || "",
  //             fontSize: 10,
  //             margin: [10, 0, 0, 0],
  //           },
  //           {
  //             text: clinicDetails?.address?.street || "",
  //             fontSize: 10,
  //             margin: [10, 0, 0, 0],
  //           },
  //           {
  //             text:
  //               "Landmark: " +
  //               (clinicDetails?.address?.landmark != null &&
  //               clinicDetails?.address?.landmark !== undefined &&
  //               clinicDetails?.address?.landmark !== ""
  //                 ? clinicDetails?.address?.landmark
  //                 : "") +
  //               " " +
  //               clinicDetails?.address?.city,
  //             fontSize: 10,
  //             margin: [10, 0, 0, 0],
  //           },
  //         ],
  //         [
  //           {
  //             text:
  //               "Dr. " +
  //                 doctorProfile?.firstName +
  //                 " " +
  //                 doctorProfile?.lastName || "",
  //             bold: true,
  //             color: "#4B2A08",
  //             alignment: "right",
  //             fontSize: 16,
  //           },
  //           {
  //             text:
  //               graduationDetails?.course +
  //                 " | " +
  //                 doctorProfile?.specialization[0] || "",
  //             alignment: "right",
  //             margin: [0, 0, 0, 0],
  //             fontSize: 10,
  //           },
  //           {
  //             text: "AMC Reg. No. " + medicalRegList?.regNumber || "",
  //             alignment: "right",
  //             margin: [0, 0, 0, 0],
  //             fontSize: 10,
  //           },
  //         ],
  //       ],
  //     },
  //     {
  //       margin: [20, 0, 20, 0],
  //       table: {
  //         headerRows: 1,
  //         widths: ["*"],
  //         body: [[""], [""]],
  //       },
  //       layout: "headerLineOnly",
  //     },
  //   ],
  //   footer: {
  //     margin: [20, 60, 20, 0],
  //     columns: [
  //       [
  //         {
  //           image: doctorProfile?.signature || null,
  //           width: 100,
  //           height: 40,
  //           margin: [0, -48, 0, 0],
  //           alignment: "right",
  //         },
  //         {
  //           columns: [
  //             {
  //               columns: [
  //                 {
  //                   text: "CONSULTATION TYPE",
  //                   bold: true,
  //                   fontSize: 12,
  //                   width: "auto",
  //                   alignment: "left",
  //                 },
  //                 {
  //                   text:
  //                     appointmentDetails?.appointmentType === "WALKIN"
  //                       ? "Walkin"
  //                       : "Online",
  //                   fontSize: 11,
  //                   width: "auto",
  //                   alignment: "left",
  //                   color: "#979393",
  //                   margin: [10, 1, 0, 0],
  //                 },
  //               ],
  //             },
  //             {
  //               text:
  //                 "Dr. " +
  //                   doctorProfile?.firstName +
  //                   "  " +
  //                   doctorProfile?.lastName || "",
  //               bold: true,
  //               fontSize: 12,
  //               alignment: "right",
  //             },
  //           ],
  //         },
  //         {
  //           text:
  //             graduationDetails?.course +
  //               " | " +
  //               doctorProfile?.specialization[0] || "",
  //           fontSize: 12,
  //           alignment: "right",
  //           color: "#979393",
  //           width: "auto",
  //         },
  //         {
  //           text: "Powered by  :",
  //           fontSize: 6,
  //           width: "auto",
  //           alignment: "left",
  //           margin: [28, 0, 0, 0],
  //         },
  //         {
  //           columns: [
  //             //   [
  //             //     {
  //             //       image: docisnLogoPngBase64,
  //             //       width: 60,
  //             //       alignment: "left",
  //             //     },
  //             //   ],
  //             {
  //               text: "USE DOCISN APP FOR ALL YOUR MEDICAL NEEDS",
  //               bold: true,
  //               alignment: "right",
  //               fontSize: 8,
  //               margin: [0, 10, 0, 0],
  //             },
  //           ],
  //         },
  //       ],
  //     ],
  //   },
  //   content: [],
  // };
  // docDefinition?.content?.push(
  //   {
  //     columns: [
  //       {
  //         text:
  //           patientDetails?.demographicInfo?.firstName?.toLocaleUpperCase() +
  //             " " +
  //             patientDetails?.demographicInfo?.lastName?.toLocaleUpperCase() ||
  //           "",
  //         bold: true,
  //         fontSize: 11,
  //         margin: [0, 10, 0, 0],
  //         alignment: "left",
  //         // width: '70%'
  //         width: "auto",
  //       },
  //       {
  //         text: " | " + patientDetails?.phoneNumber,
  //         bold: true,
  //         fontSize: 11,
  //         margin: [2, 10, 0, 0],
  //         alignment: "left",
  //         width: "auto",
  //       },
  //       patientDetails?.demographicInfo?.dOB
  //         ? {
  //             text:
  //               " | " +
  //                 moment().diff(patientDetails?.demographicInfo?.dOB, "years") +
  //                 "(Y)" || "",
  //             bold: true,
  //             fontSize: 11,
  //             margin: [2, 10, 0, 0],
  //             width: "auto",
  //             alignment: "left",
  //           }
  //         : "",
  //       patientDetails?.demographicInfo?.gender?.charAt(0)
  //         ? {
  //             text: patientDetails?.demographicInfo?.gender?.charAt(0),
  //             bold: true,
  //             fontSize: 11,
  //             margin: [2, 10, 0, 0],
  //             alignment: "left",
  //             width: "auto",
  //           }
  //         : "",
  //       {
  //         // width: '30%',
  //         alignment: "right",
  //         columns: [
  //           [
  //             {
  //               text: "Date",
  //               alignment: "right",
  //               width: "auto",
  //               margin: [0, 10, 10, 0],
  //               fontSize: 10,
  //               color: "#464646",
  //             },
  //           ],

  //           {
  //             text: `${moment().format("DD/MM/YYYY")}`,
  //             alignment: "right",
  //             margin: [0, 10, 0, 0],
  //             bold: true,
  //             width: "auto",
  //             fontSize: 10,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   Object.keys(vitalsObject).length > 0 && prescriptionPdfSettings?.vitals
  //     ? {
  //         columns: [
  //           {
  //             text: "Temp: ",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [0, 10, 0, 5],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //           {
  //             text: vitalsObject?.temperature || "",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 0, 0],
  //             color: "#565656",
  //             fontSize: 10,
  //           },
  //           {
  //             text: "F°" + " | ",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 1, 0],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //           {
  //             text: "Heart Rate: ",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [4, 10, 0, 5],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //           {
  //             text: vitalsObject?.pulse
  //               ? parseInt(vitalsObject?.pulse, 10)
  //               : "",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 0, 0],
  //             color: "#565656",
  //             fontSize: 10,
  //           },
  //           {
  //             text: "BPM" + " | ",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 1, 0],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //           {
  //             text: "Blood Pressure: ",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [4, 10, 0, 5],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //           {
  //             text:
  //               vitalsObject?.bpDiastolic && vitalsObject?.bpSystolic
  //                 ? parseInt(vitalsObject?.bpDiastolic, 10) +
  //                   "/" +
  //                   parseInt(vitalsObject?.bpSystolic, 10)
  //                 : "",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 0, 0],
  //             color: "#565656",
  //             fontSize: 10,
  //           },
  //           {
  //             text: "mmhg" + " | ",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 1, 0],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //           {
  //             text: "Weight: ",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [4, 10, 0, 5],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //           {
  //             text: vitalsObject?.weight
  //               ? parseInt(vitalsObject?.weight, 10)?.toFixed(1)
  //               : "",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 0, 0],
  //             color: "#565656",
  //             fontSize: 10,
  //           },
  //           {
  //             text: "Kg" + " | ",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 1, 0],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //           {
  //             text: "SPO2: ",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [4, 10, 0, 5],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //           {
  //             text: vitalsObject?.spo2 || "",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 0, 0],
  //             color: "#565656",
  //             fontSize: 10,
  //           },
  //           {
  //             text: "%",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 0, 0],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //           {
  //             text: "Height: ",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [4, 10, 0, 5],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //           {
  //             text: vitalsObject?.height
  //               ? parseInt(vitalsObject?.height, 10)?.toFixed(1)
  //               : "",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 0, 0],
  //             color: "#565656",
  //             fontSize: 10,
  //           },
  //           {
  //             text: "cms",
  //             alignment: "left",
  //             width: "auto",
  //             margin: [1, 10, 0, 0],
  //             color: "#979393",
  //             fontSize: 10,
  //           },
  //         ],
  //       }
  //     : "",
  //   {
  //     margin: [0, 0, 0, 0],
  //     table: {
  //       headerRows: 1,
  //       widths: ["*"],
  //       body: [[""], [""]],
  //     },
  //     layout: "headerLineOnly",
  //   },

  //   addedCheifcomplaintsArray?.length > 0 &&
  //     prescriptionPdfSettings?.reasonVisit
  //     ? {
  //         text: "Symptoms:",
  //         bold: true,
  //         fontSize: 10,
  //         // color: '#14a7a7',
  //         margin: [0, 10, 0, 0],
  //         width: "auto",
  //         // decoration: 'underline'
  //       }
  //     : "",
  //   addedCheifcomplaintsArray?.length > 0 &&
  //     prescriptionPdfSettings?.reasonVisit
  //     ? {
  //         fontSize: 8,
  //         ul: [...(addedCheifcomplaintsArray?.map((p) => p.name) || "NA")],
  //       }
  //     : "",
  //   diagnosis?.provisionalDiagnosis?.length > 0 &&
  //     prescriptionPdfSettings?.diagnosis?.provisionalDiagnosis
  //     ? {
  //         text: "Provisional Diagnosis:",
  //         decoration: "underline",
  //         margin: [0, 10, 0, 0],
  //         fontSize: 10,
  //       }
  //     : "",
  //   diagnosis?.provisionalDiagnosis?.length > 0 &&
  //     prescriptionPdfSettings?.diagnosis?.provisionalDiagnosis
  //     ? {
  //         fontSize: 8,
  //         ul: [
  //           ...(diagnosis?.provisionalDiagnosis?.map(
  //             (p) => p?.diagnosisDescription
  //           ) || "NA"),
  //         ],
  //       }
  //     : "",
  //   diagnosis?.workingDiagnosis?.length > 0 &&
  //     prescriptionPdfSettings?.diagnosis?.workingDiagnosis
  //     ? {
  //         text: "Working Diagnosis:",
  //         decoration: "underline",
  //         margin: [0, 10, 0, 2],
  //         fontSize: 10,
  //       }
  //     : "",
  //   diagnosis?.workingDiagnosis?.length > 0 &&
  //     prescriptionPdfSettings?.diagnosis?.workingDiagnosis
  //     ? {
  //         fontSize: 8,
  //         ul: [
  //           ...(diagnosis?.workingDiagnosis?.map(
  //             (p) => p?.diagnosisDescription
  //           ) || "NA"),
  //         ],
  //       }
  //     : "",
  //   diagnosis?.differentialDiagnosis?.length > 0 &&
  //     prescriptionPdfSettings?.diagnosis?.differentialDiagnosis
  //     ? {
  //         text: "Diffrential Diagnosis:",
  //         // decoration: 'underline',
  //         margin: [0, 10, 0, 2],
  //         fontSize: 10,
  //       }
  //     : "",
  //   diagnosis?.differentialDiagnosis?.length > 0 &&
  //     prescriptionPdfSettings?.diagnosis?.differentialDiagnosis
  //     ? {
  //         fontSize: 8,
  //         ul: [
  //           ...(diagnosis?.differentialDiagnosis?.map(
  //             (p) => p?.diagnosisDescription
  //           ) || "NA"),
  //         ],
  //       }
  //     : "",
  //   diagnosis?.finalDiagnosis?.length > 0 &&
  //     prescriptionPdfSettings?.diagnosis?.finalDiagnosis
  //     ? {
  //         text: "Final Diagnosis:",
  //         // decoration: 'underline',
  //         margin: [0, 10, 0, 2],
  //         fontSize: 10,
  //       }
  //     : "",
  //   diagnosis?.finalDiagnosis?.length > 0 &&
  //     prescriptionPdfSettings?.diagnosis?.finalDiagnosis
  //     ? {
  //         fontSize: 8,
  //         ul: [
  //           ...(diagnosis?.finalDiagnosis?.map(
  //             (p) => p?.diagnosisDescription
  //           ) || "NA"),
  //         ],
  //       }
  //     : "",

  //   otherInstructions?.toString()?.length > 0 &&
  //     prescriptionPdfSettings?.patientsInstruction
  //     ? {
  //         text: "Patient Instructions:",
  //         decoration: "underline",
  //         margin: [0, 10, 0, 2],
  //         fontSize: 10,
  //       }
  //     : "",
  //   otherInstructions?.toString()?.length > 0 &&
  //     prescriptionPdfSettings?.patientsInstruction
  //     ? {
  //         text: otherInstructions?.toString(),
  //         fontSize: 8,
  //         margin: [10, 5, 0, 0],
  //         width: "auto",
  //       }
  //     : "",
  //   prescription?.length > 0 && prescriptionPdfSettings?.prescription
  //     ? {
  //         text: "Prescription",
  //         bold: true,
  //         fontSize: 10,
  //         // color: '#14a7a7',
  //         margin: [0, 10, 0, 4],
  //         // decoration: 'underline'
  //       }
  //     : "",
  //   prescription?.length > 0 && prescriptionPdfSettings?.prescription
  //     ? {
  //         fontSize: 8,
  //         table: {
  //           headerRows: 1,
  //           widths: [30, "*", 80, 80, "*"],
  //           body: [
  //             [
  //               {
  //                 text: "S.NO",
  //                 fillColor: "#E9E9E9",
  //                 color: "#8B8B8B",
  //                 bold: true,
  //                 fontSize: 9,
  //               },
  //               {
  //                 text: "Medicine Name",
  //                 fillColor: "#E9E9E9",
  //                 color: "#8B8B8B",
  //                 bold: true,
  //                 fontSize: 9,
  //               },
  //               {
  //                 text: "Dosage Route",
  //                 fillColor: "#E9E9E9",
  //                 bold: true,
  //                 color: "#8B8B8B",
  //                 fontSize: 9,
  //               },
  //               {
  //                 text: "Frequency",
  //                 fillColor: "#E9E9E9",
  //                 bold: true,
  //                 color: "#8B8B8B",
  //                 fontSize: 9,
  //               },
  //               {
  //                 text: "Instructions",
  //                 fillColor: "#E9E9E9",
  //                 bold: true,
  //                 color: "#8B8B8B",
  //                 fontSize: 9,
  //               },
  //             ],
  //             ...prescription.map((p, i) => [
  //               i + 1,
  //               { text: p.drugName, bold: true },
  //               p.drugRoute,
  //               p.frequency + " for " + p.duration,
  //               p.instructions !== undefined ? p.instructions : "",
  //             ]),
  //           ],
  //         },
  //         layout: "noBorders",
  //       }
  //     : "",
  //   labOrder?.length > 0 && prescriptionPdfSettings?.investigation
  //     ? {
  //         text: "Lab Investigation",
  //         bold: true,
  //         fontSize: 9,
  //         margin: [0, 30, 0, 4],
  //       }
  //     : "",
  //   labOrder?.length > 0 && prescriptionPdfSettings?.investigation
  //     ? {
  //         fontSize: 8,
  //         table: {
  //           headerRows: 1,
  //           widths: [30, "*", "*"],
  //           body: [
  //             [
  //               {
  //                 text: "S.NO",
  //                 fillColor: "#E9E9E9",
  //                 bold: true,
  //                 fontSize: 9,
  //               },
  //               {
  //                 text: "Test Name",
  //                 fillColor: "#E9E9E9",
  //                 bold: true,
  //                 fontSize: 9,
  //               },
  //               {
  //                 text: "Instructions",
  //                 fillColor: "#E9E9E9",
  //                 bold: true,
  //                 fontSize: 9,
  //               },
  //             ],
  //             ...labOrder.map((p, i) => [i + 1, p.testName, p.instructions]),
  //           ],
  //         },
  //         layout: "noBorders",
  //       }
  //     : "",
  //   clinicalInvestigation?.length > 0 && prescriptionPdfSettings?.investigation
  //     ? {
  //         text: "Clinical Investigation",
  //         bold: true,
  //         fontSize: 9,
  //         // color: '#14a7a7',
  //         margin: [0, 30, 0, 4],
  //         // decoration: 'underline'
  //       }
  //     : "",
  //   clinicalInvestigation?.length > 0 && prescriptionPdfSettings?.investigation
  //     ? {
  //         fontSize: 8,
  //         table: {
  //           headerRows: 1,
  //           widths: [30, "*", "*"],
  //           body: [
  //             [
  //               {
  //                 text: "S.NO",
  //                 fillColor: "#E9E9E9",
  //                 bold: true,
  //                 fontSize: 9,
  //               },
  //               {
  //                 text: "Test Name",
  //                 fillColor: "#E9E9E9",
  //                 bold: true,
  //                 fontSize: 9,
  //               },
  //               {
  //                 text: "Instructions",
  //                 fillColor: "#E9E9E9",
  //                 bold: true,
  //                 fontSize: 9,
  //               },
  //             ],
  //             ...clinicalInvestigation.map((p, i) => [
  //               i + 1,
  //               p.testName,
  //               p.instructions,
  //             ]),
  //           ],
  //         },
  //         layout: "noBorders",
  //       }
  //     : "",
  //   radiologyOrder?.length > 0 && prescriptionPdfSettings?.investigation
  //     ? {
  //         text: "Radiology Order",
  //         bold: true,
  //         fontSize: 9,
  //         // color: '#14a7a7',
  //         margin: [0, 30, 0, 4],
  //         // decoration: 'underline'
  //       }
  //     : "",
  //   radiologyOrder?.length > 0 && prescriptionPdfSettings?.investigation
  //     ? {
  //         fontSize: 8,
  //         table: {
  //           headerRows: 1,
  //           widths: [30, "*", "*"],
  //           body: [
  //             [
  //               {
  //                 text: "S.NO",
  //                 bold: true,
  //                 fillColor: "#E9E9E9",
  //                 fontSize: 9,
  //               },
  //               {
  //                 text: "Test Name",
  //                 bold: true,
  //                 fillColor: "#E9E9E9",
  //                 fontSize: 9,
  //               },
  //               {
  //                 text: "Instructions",
  //                 bold: true,
  //                 fillColor: "#E9E9E9",
  //                 fontSize: 9,
  //               },
  //             ],

  //             ...radiologyOrder.map((p, i) => [
  //               i + 1,
  //               p.testName,
  //               p.instructions,
  //             ]),
  //           ],
  //         },
  //         layout: "noBorders",
  //       }
  //     : ""
  // );
  // docDefinition?.content?.push(
  //   prescriptionPdfSettings?.overview?.allergies &&
  //     [
  //       ...(allergies?.drugAllergies || []),
  //       ...(allergies?.foodAllergies || []),
  //       ...(allergies?.environmentAllergies || []),
  //     ]?.length > 0
  //     ? {
  //         columns: [
  //           [
  //             {
  //               text: "Allergies",
  //               bold: true,
  //               fontSize: 10,
  //               // color: '#14a7a7',
  //               margin: [0, 10, 0, 4],
  //               // decoration: 'underline'
  //             },
  //             {
  //               fontSize: 8,
  //               margin: [0, 0, 10, 0],
  //               table: {
  //                 headerRows: 1,
  //                 widths: ["*", "*", "*"],
  //                 body: [
  //                   [
  //                     {
  //                       text: "Allergy Name",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                     },
  //                     {
  //                       text: "Allergy Type",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                     },
  //                     {
  //                       text: "Start Date",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                     },
  //                   ],
  //                   ...[
  //                     ...(allergies?.drugAllergies || []),
  //                     ...(allergies?.foodAllergies || []),
  //                     ...(allergies?.environmentAllergies || []),
  //                   ].map((d) => [
  //                     d?.drugName
  //                       ? { text: d?.drugName || "" }
  //                       : d?.environmentName
  //                       ? {
  //                           text: d?.environmentName || "",
  //                         }
  //                       : {
  //                           text: d?.foodName || "",
  //                         },
  //                     d?.type,
  //                     moment(d?.date).format("DD-MMM-YYYY"),
  //                   ]),
  //                 ],
  //               },
  //               layout: "noBorders",
  //             },
  //           ],
  //         ],
  //       }
  //     : "",
  //   currentMedications?.length > 0 &&
  //     prescriptionPdfSettings?.overview?.medicationHistory
  //     ? {
  //         columns: [
  //           [
  //             {
  //               text: "Medication History",
  //               bold: true,
  //               fontSize: 10,
  //               // color: '#14a7a7',
  //               margin: [0, 10, 0, 4],
  //               // decoration: 'underline'
  //             },
  //             {
  //               fontSize: 8,
  //               margin: [0, 0, 10, 0],
  //               table: {
  //                 headerRows: 1,
  //                 widths: ["*", "*", "*", "*"],
  //                 body: [
  //                   [
  //                     {
  //                       text: "Medicine Name",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                     {
  //                       text: "Dosage Route",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                     {
  //                       text: "Frequency",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                     {
  //                       text: "Instructions",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                   ],
  //                   ...currentMedications.map((c) => [
  //                     { text: c?.drugName || "" },
  //                     { text: c?.drugRoute || "" },
  //                     {
  //                       text: `${c?.frequency || ""} for ${c?.duration || ""}`,
  //                     },
  //                     { text: c?.instructions || "" },
  //                   ]),
  //                 ],
  //               },
  //               layout: "noBorders",
  //             },
  //           ],
  //         ],
  //       }
  //     : "",
  //   familyHistory?.length > 0 &&
  //     prescriptionPdfSettings?.overview?.familyHistory
  //     ? {
  //         columns: [
  //           [
  //             {
  //               text: "Family History",
  //               bold: true,
  //               fontSize: 10,
  //               // color: '#14a7a7',
  //               margin: [0, 10, 0, 4],
  //               // decoration: 'underline'
  //             },
  //             {
  //               fontSize: 8,
  //               margin: [0, 0, 10, 0],
  //               table: {
  //                 headerRows: 1,
  //                 widths: ["*", "*", "*"],
  //                 body: [
  //                   [
  //                     {
  //                       text: "Relationship",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                     {
  //                       text: "Condition",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                     {
  //                       text: "Outcome",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                   ],
  //                   ...familyHistory.map((f) => [
  //                     { text: f?.relationShip || "" },
  //                     { text: f?.condition || "" },
  //                     { text: f?.outcome || "" },
  //                   ]),
  //                 ],
  //               },
  //               layout: "noBorders",
  //             },
  //           ],
  //         ],
  //       }
  //     : "",
  //   currentProblems?.length > 0 &&
  //     prescriptionPdfSettings?.overview?.problemList
  //     ? {
  //         columns: [
  //           [
  //             {
  //               text: "Problem List",
  //               bold: true,
  //               fontSize: 10,
  //               // color: '#14a7a7',
  //               margin: [0, 10, 0, 4],
  //               // decoration: 'underline'
  //             },
  //             {
  //               fontSize: 8,
  //               margin: [0, 0, 10, 0],
  //               table: {
  //                 headerRows: 1,
  //                 widths: ["*", "*", "*"],
  //                 body: [
  //                   [
  //                     {
  //                       text: "Medical Condition",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                     {
  //                       text: "Started ON",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                     {
  //                       text: "Current Status",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                   ],
  //                   ...currentProblems.map((c) => [
  //                     { text: c?.ICDDescription || "" },
  //                     {
  //                       text: moment(c?.startedOn).format("DD-MMM-YYYY") || "",
  //                     },
  //                     { text: c?.currentStatus || "" },
  //                   ]),
  //                 ],
  //               },
  //               layout: "noBorders",
  //             },
  //           ],
  //         ],
  //       }
  //     : "",
  //   pastSurgicalHistory?.length > 0 &&
  //     prescriptionPdfSettings?.overview?.pastSurgicalHistory
  //     ? {
  //         columns: [
  //           [
  //             {
  //               text: "Past Surgical History",
  //               bold: true,
  //               fontSize: 10,
  //               // color: '#14a7a7',
  //               margin: [0, 10, 0, 4],
  //               // decoration: 'underline'
  //             },
  //             {
  //               fontSize: 8,
  //               margin: [0, 0, 10, 0],
  //               table: {
  //                 headerRows: 1,
  //                 widths: ["*", "*", "*"],
  //                 body: [
  //                   [
  //                     {
  //                       text: "Procedure Description",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                     {
  //                       text: "Time of Occurrence",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                     {
  //                       text: "Outcome",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                   ],
  //                   ...pastSurgicalHistory.map((p) => [
  //                     { text: p?.procedureDescription || "" },
  //                     {
  //                       text:
  //                         moment(p?.timeOfOccurance).format("DD-MMM-YYYY") ||
  //                         "",
  //                     },
  //                     { text: p?.outcome || "" },
  //                   ]),
  //                 ],
  //               },
  //               layout: "noBorders",
  //             },
  //           ],
  //         ],
  //       }
  //     : "",
  //   pastMedicalHistory?.length > 0 &&
  //     prescriptionPdfSettings?.overview?.pastMedicalHistory
  //     ? {
  //         columns: [
  //           [
  //             {
  //               text: "Past Medical History",
  //               bold: true,
  //               fontSize: 10,
  //               // color: '#14a7a7',
  //               margin: [0, 10, 0, 4],
  //               // decoration: 'underline'
  //             },
  //             {
  //               fontSize: 8,
  //               margin: [0, 0, 10, 0],
  //               table: {
  //                 headerRows: 1,
  //                 widths: ["*", "*", "*"],
  //                 body: [
  //                   [
  //                     {
  //                       text: "Medical Condition",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                     {
  //                       text: "Time of Occurrence",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                     {
  //                       text: "Outcome",
  //                       fillColor: "#E9E9E9",
  //                       bold: true,
  //                       fontSize: 9,
  //                       width: "auto",
  //                     },
  //                   ],
  //                   ...pastMedicalHistory.map((p) => [
  //                     { text: p?.ICDDescription },
  //                     {
  //                       text: moment(p?.timeOfOccurance).format("DD-MMM-YYYY"),
  //                     },
  //                     { text: p?.outcome },
  //                   ]),
  //                 ],
  //               },
  //               layout: "noBorders",
  //             },
  //           ],
  //         ],
  //       }
  //     : "",
  //   {
  //     margin: [0, 20, 0, 0],
  //     columns: [
  //       Object.keys(obstetricHistory)?.length > 0 &&
  //       prescriptionPdfSettings?.overview?.obstetricHistory &&
  //       patientDetails?.demographicInfo?.gender === "Female"
  //         ? [
  //             {
  //               text: "Obstetric History",
  //               fontSize: 10,
  //               decoration: "underline",
  //             },
  //             {
  //               text: "GPLA",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Gravidity",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: obstetricHistory?.GPLA?.gravidity || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Parity",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: obstetricHistory?.GPLA?.parity || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Live",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: obstetricHistory?.GPLA?.live,
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Abortion",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: obstetricHistory?.GPLA?.abortion,
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "TERMINATIONS",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Ectopic Pregnancy",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: obstetricHistory?.terminations,
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Comments",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: obstetricHistory?.commentForTerminations,
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "PREVIOUS PREGNANCIES",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 [
  //                   {
  //                     width: "auto",
  //                     stack: [
  //                       ...obstetricHistory?.previousPregnancies?.map((p) => [
  //                         {
  //                           columns: [
  //                             {
  //                               text: "Length In Weeks:",
  //                               fontSize: 9,
  //                               margin: [0, 2, 0, 1],
  //                               width: "auto",
  //                             },
  //                             {
  //                               text: p?.lengthInWeeks,
  //                               fontSize: 9,
  //                               margin: [1, 2, 0, 0],
  //                               width: "auto",
  //                             },
  //                           ],
  //                         },
  //                       ]),
  //                     ],
  //                   },
  //                 ],
  //                 [
  //                   {
  //                     stack: [
  //                       ...obstetricHistory?.previousPregnancies?.map((p) => [
  //                         {
  //                           columns: [
  //                             {
  //                               text: "Mode Of Delivery:",
  //                               fontSize: 9,
  //                               margin: [0, 2, 0, 1],
  //                               width: "auto",
  //                             },
  //                             p?.modeOfDelivery !== undefined
  //                               ? {
  //                                   text: p?.modeOfDelivery,
  //                                   fontSize: 9,
  //                                   margin: [1, 2, 0, 0],
  //                                   width: "auto",
  //                                 }
  //                               : "",
  //                           ],
  //                         },
  //                       ]),
  //                     ],
  //                   },
  //                 ],
  //               ],
  //             },
  //             {
  //               text: "PAST COMPLICATION OF PREGNANCY",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Before",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.pastComplicationsOfPregnancy?.before?.toString() ||
  //                     "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "During",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.pastComplicationsOfPregnancy?.during?.toString() ||
  //                     "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "After",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.pastComplicationsOfPregnancy?.after?.toString() ||
  //                     "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "FAMILY OBSTETRIC HISTORY",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Twins",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: obstetricHistory?.familyObstetricHistory?.twins || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Recurrent Miscarriage",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.familyObstetricHistory
  //                       ?.recurrentMiscarriage || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "CURRENT PREGNANCY",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Confirmation Of Pregnancy",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.confirmationOfPregnancy?.toString() ||
  //                     "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "DATES",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "LMP",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     moment(
  //                       obstetricHistory?.currentPregnancy?.dates?.LMP
  //                     ).format("DD-MM-YYYY") || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "EDD By LMP",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     moment(
  //                       obstetricHistory?.currentPregnancy?.dates?.EDDByLMP
  //                     ).format("DD-MM-YYYY") || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "EDD By Ultrasound",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     moment(
  //                       obstetricHistory?.currentPregnancy?.dates
  //                         ?.EDDByUltrasound
  //                     ).format("DD-MM-YYYY") || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Gestational Age In Weeks(POG)",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.dates
  //                       ?.gestationalAgeInWeeks || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "SCANS",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Size",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: obstetricHistory?.currentPregnancy?.scans?.size || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Location",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.scans?.location || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Morphological Issues",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.scans
  //                       ?.morphologicalIssues || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "OTHER INVESTIGATIONS",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "ABO Group",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.otherInvestigations
  //                       ?.ABOGroup || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Rhesus Group",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.otherInvestigations
  //                       ?.rhesusGroup || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "HBsAg",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.otherInvestigations
  //                       ?.hbsag || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "HIV Status",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.otherInvestigations
  //                       ?.hivStatus || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "VDRL",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.otherInvestigations
  //                       ?.VDRL || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Rubella Status",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.otherInvestigations
  //                       ?.rubellaStatus || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Haemoglobin",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.otherInvestigations
  //                       ?.hemoglobin || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "FOETAL MOVEMENTS",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Foetal Movements",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.foetalMovements
  //                       ?.foetalMovements || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "COMPLICATIONS OF THIS PREGNANCY",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Gestational Diabetes",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy
  //                       ?.complicationsOfThisPregnancy?.gestationalDiabetes ||
  //                     "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Pre-eclampsia",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy
  //                       ?.complicationsOfThisPregnancy?.preEclampsia || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "MEDICATIONS FOR THIS PREGNANCY",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Folic acid",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy
  //                       ?.medicationsForThisPregnancy?.folicAcid || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Iron",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy
  //                       ?.medicationsForThisPregnancy?.iron || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Calcium",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy
  //                       ?.medicationsForThisPregnancy?.calcium || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Antimetics",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy
  //                       ?.medicationsForThisPregnancy?.antiemetics || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Tetanus Toxoid Shot",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy
  //                       ?.medicationsForThisPregnancy?.tetanusToxoidShot || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "PLAN FOR DELIVERY",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     obstetricHistory?.currentPregnancy?.planForDelivery || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //           ]
  //         : "",
  //       Object.keys(GynaecologyHistory)?.length > 0 &&
  //       prescriptionPdfSettings?.overview?.gynaecologyHistory &&
  //       patientDetails?.demographicInfo?.gender === "Female"
  //         ? [
  //             {
  //               text: "Gynaecology History",
  //               fontSize: 10,
  //               decoration: "underline",
  //             },
  //             {
  //               text: "MENSTRUAL PERIODS",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Regularity",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     GynaecologyHistory?.menstrualPeriods?.regularity || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Duration",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: GynaecologyHistory?.menstrualPeriods?.duration || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Flow",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: GynaecologyHistory?.menstrualPeriods?.flow || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Pain",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: GynaecologyHistory?.menstrualPeriods?.pain || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "PAST GYNAECOLOGIC DISEASE",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Ectopic Pregnancy",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     GynaecologyHistory?.pastGynaecologicDisease
  //                       ?.ectopicPregnancy || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "STD",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     GynaecologyHistory?.pastGynaecologicDisease?.STD || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "PID",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     GynaecologyHistory?.pastGynaecologicDisease?.PID || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "PAST GYNAECOLOGIC SURGERY",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "D&C",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     GynaecologyHistory?.pastGynaecologicSurgery?.dAndC || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "LEFTZ Cervical Treatment",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     GynaecologyHistory?.pastGynaecologicSurgery
  //                       ?.letzCervicalTreatment || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Breast Surgery",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     GynaecologyHistory?.pastGynaecologicSurgery
  //                       ?.breastSurgery || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "PAP SMEAR",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Last Smear Taken On",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: GynaecologyHistory?.papSmear?.lastSmearTakenOn || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Result",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: GynaecologyHistory?.papSmear?.result || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "MAMMOGRAM",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Mammogram Done",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: GynaecologyHistory?.mammogram?.mammogramDone || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "PAST SUBFERTILITY",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Amount Of Time Attempting Pregnancy",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     GynaecologyHistory?.pastSubFertility
  //                       ?.amountOfTimeAttemptingPregnancy || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Medications",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text:
  //                     GynaecologyHistory?.pastSubFertility?.medications || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "IVF",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: GynaecologyHistory?.pastSubFertility?.IVF || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               text: "MENOPAUSE STATUS",
  //               fontSize: 9,
  //               color: "#14636A",
  //               bold: true,
  //               margin: [0, 2, 0, 1],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Attained",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: GynaecologyHistory?.menopauseStatus?.attained || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "AtAge",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: GynaecologyHistory?.menopauseStatus?.atAge || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //           ]
  //         : "",
  //     ],
  //   },
  //   Object.keys(socialHistory)?.length > 0 &&
  //     prescriptionPdfSettings?.overview?.socialHistory
  //     ? {
  //         columns: [
  //           [
  //             {
  //               text: "Social History",
  //               fontSize: 10,
  //               decoration: "underline",
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Sleep",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: socialHistory?.sleep || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Diet",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: socialHistory?.diet || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Smoking",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: socialHistory?.smoking || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Alocohol Consumption",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: socialHistory?.alcoholConsumption || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Tobacco Consumtion",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: socialHistory?.tobaccoConsumption || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Recreational Drugs",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: socialHistory?.recreationalDrugs || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Execrcise",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: socialHistory?.exercise || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Marital Status",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: personalSocailHistory?.maritalStatus || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Social Support",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: personalSocailHistory?.socialSupport || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: "Educational Status",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: personalSocailHistory?.educationStatus || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //             {
  //               columns: [
  //                 {
  //                   text: "Occupation",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //                 {
  //                   text: personalSocailHistory?.occupation || "",
  //                   fontSize: 9,
  //                   margin: [0, 2, 0, 1],
  //                 },
  //               ],
  //             },
  //           ],
  //           [],
  //         ],
  //       }
  //     : "",
  //   nueroString ||
  //     respString ||
  //     cardString ||
  //     abdString ||
  //     glassString ||
  //     integString ||
  //     neuroVasString ||
  //     muscuStirng
  //     ? {
  //         text: "Assessment",
  //         fontSize: 10,
  //         bold: true,
  //         margin: [0, 20, 0, 4],
  //       }
  //     : "",
  //   nueroString && prescriptionPdfSettings?.assessment?.neuro
  //     ? {
  //         text: "NEURO :",
  //         fontSize: 10,
  //         bold: true,
  //         margin: [0, 5, 0, 4],
  //       }
  //     : "",

  //   nueroString && prescriptionPdfSettings?.assessment?.neuro
  //     ? {
  //         text: "[ " + nueroString?.toString() + " ]",
  //         width: "auto",
  //         fontSize: 9,
  //       }
  //     : "",

  //   respString && prescriptionPdfSettings?.assessment?.respiratory
  //     ? {
  //         text: "RESPIRATORY :",
  //         fontSize: 10,
  //         bold: true,
  //         margin: [0, 10, 0, 4],
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   respString && prescriptionPdfSettings?.assessment?.respiratory
  //     ? {
  //         text: "[ " + respString?.toString() + "]",
  //         width: "auto",
  //         fontSize: 9,
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   cardString && prescriptionPdfSettings?.assessment?.cardiovascular
  //     ? {
  //         text: "CARDIOVASCULAR :",
  //         fontSize: 10,
  //         bold: true,
  //         margin: [0, 10, 0, 4],
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   cardString && prescriptionPdfSettings?.assessment?.cardiovascular
  //     ? {
  //         text: " [ " + cardString?.toString() + " ] ",
  //         width: "auto",
  //         fontSize: 9,
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   abdString && prescriptionPdfSettings?.assessment?.ABDOMINAL
  //     ? {
  //         text: "ABDOMINAL/GI/GU :",
  //         fontSize: 10,
  //         bold: true,
  //         margin: [0, 10, 0, 4],
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   abdString && prescriptionPdfSettings?.assessment?.ABDOMINAL
  //     ? {
  //         text: "[ " + abdString?.toString() + " ]",
  //         width: "auto",
  //         fontSize: 9,
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   muscuStirng && prescriptionPdfSettings?.assessment?.muscoloskeltal
  //     ? {
  //         text: "MUSCOLOSKELTAL :",
  //         fontSize: 10,
  //         bold: true,
  //         margin: [0, 10, 0, 4],
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   muscuStirng && prescriptionPdfSettings?.assessment?.muscoloskeltal
  //     ? {
  //         text: "[" + muscuStirng?.toString() + "]",
  //         width: "auto",
  //         fontSize: 9,
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   glassString && prescriptionPdfSettings?.assessment?.glaslowComaScale
  //     ? {
  //         text: "GLASLOW COMA SCALE(GCS SCALE) :",
  //         fontSize: 10,
  //         bold: true,
  //         margin: [0, 10, 0, 4],
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   glassString && prescriptionPdfSettings?.assessment?.glaslowComaScale
  //     ? {
  //         text: "[" + glassString?.toString() + " ]",
  //         width: "auto",
  //         fontSize: 9,
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   integString && prescriptionPdfSettings?.assessment?.integumentary
  //     ? {
  //         text: "INTEGUMENTARY :",
  //         fontSize: 10,
  //         bold: true,
  //         margin: [0, 10, 0, 4],
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   integString && prescriptionPdfSettings?.assessment?.integumentary
  //     ? {
  //         text: "[ " + integString?.toString() + " ]",
  //         width: "auto",
  //         fontSize: 9,
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   neuroVasString &&
  //     prescriptionPdfSettings?.assessment?.neurovascularExtremeties
  //     ? {
  //         text: "NEUROVASCULAR EXTREMETIES :",
  //         fontSize: 10,
  //         bold: true,
  //         margin: [0, 10, 0, 4],
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   neuroVasString &&
  //     prescriptionPdfSettings?.assessment?.neuneurovascularExtremetiesro
  //     ? {
  //         text: "[ " + neuroVasString?.toString() + " ]",
  //         width: "auto",
  //         fontSize: 9,
  //       }
  //     : {
  //         text: "",
  //         width: "auto",
  //       },
  //   Object.keys(followUp)?.length > 0 &&
  //     followUp?.isFollowupRequested &&
  //     prescriptionPdfSettings?.followup
  //     ? {
  //         alignment: "left",
  //         margin: [0, 50, 0, 0],
  //         columns: [
  //           {
  //             text: "Review",
  //             fontSize: 10,
  //             bold: true,
  //             // color: '#14a7a7',
  //             width: "auto",
  //             margin: [0, 5, 0, 0],
  //           },
  //           {
  //             text:
  //               " - Review after " + followUp?.follwUpDate + " days" || "NA",
  //             fontSize: 9,
  //             margin: [4, 6, 0, 0],
  //           },
  //         ],
  //       }
  //     : {
  //         text: "",
  //         alignment: "left",
  //         margin: [0, 50, 0, 0],
  //       },
  //   Object?.keys(referDoctorToPatient)?.length > 0 &&
  //     referDoctorToPatient?.referDoctorName !== "" &&
  //     prescriptionPdfSettings?.doctorReferral
  //     ? {
  //         margin: [0, 50, 0, 0],
  //         columns: [
  //           {
  //             text: "Referred Doctor: ",
  //             fontSize: 10,
  //             bold: true,
  //             width: "auto",
  //             // color: '#14a7a7',
  //             margin: [0, 5, 0, 0],
  //           },
  //           referDoctorToPatient?.referDoctorName !== ""
  //             ? {
  //                 text: "Name ",
  //                 fontSize: 9,
  //                 width: "auto",
  //                 color: "#979393",
  //                 margin: [4, 6, 0, 0],
  //               }
  //             : "",
  //           {
  //             text: referDoctorToPatient?.referDoctorName,
  //             fontSize: 9,
  //             width: "auto",
  //             margin: [4, 6, 0, 0],
  //           },
  //           referDoctorToPatient?.specialization !== ""
  //             ? {
  //                 text: " | SPECIALITY ",
  //                 fontSize: 9,
  //                 width: "auto",
  //                 color: "#979393",
  //                 margin: [4, 6, 0, 0],
  //               }
  //             : "",
  //           referDoctorToPatient?.specialization !== ""
  //             ? {
  //                 text: referDoctorToPatient?.specialization,
  //                 fontSize: 9,
  //                 width: "auto",
  //                 margin: [4, 6, 0, 0],
  //               }
  //             : "",
  //           referDoctorToPatient?.address !== ""
  //             ? {
  //                 text: " | LOCATION ",
  //                 fontSize: 9,
  //                 width: "auto",
  //                 color: "#979393",
  //                 margin: [4, 6, 0, 0],
  //               }
  //             : "",
  //           referDoctorToPatient?.address !== ""
  //             ? {
  //                 text: referDoctorToPatient?.address,
  //                 fontSize: 9,
  //                 width: "auto",
  //                 margin: [4, 6, 0, 0],
  //               }
  //             : "",
  //         ],
  //       }
  //     : ""
  // );
  return docDefinition;
};
