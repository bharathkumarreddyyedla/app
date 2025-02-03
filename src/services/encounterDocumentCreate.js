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
  labOrder,
  clinicalInvestigation,
  radiologyOrder,
  diagnosis,
  followUp,
  referDoctorToPatient,
  otherInstructions,
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
  personalSocailHistory
) => {
  const docDefinition = {
    pageMargins: [20, 90, 20, 120],
    header: [
      {
        margin: [20, 20, 20, 0],
        columns: [
          {
            image: clinicDetails?.clinicLogo,
            width: 60,
            height: 60,
            alignment: "left",
            margin: [0, 0, 0, 0],
          },
          [
            {
              text: clinicDetails?.clinicName || "",
              bold: true,
              color: "#4B2A08",
              fontSize: 16,
              alignment: "left",
              margin: [10, 0, 0, 0],
            },
            {
              text: clinicDetails?.address?.buildingNumber || "",
              fontSize: 10,
              margin: [10, 0, 0, 0],
            },
            {
              text: clinicDetails?.address?.street || "",
              fontSize: 10,
              margin: [10, 0, 0, 0],
            },
            {
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
          [
            {
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
              text:
                graduationDetails?.course +
                  " | " +
                  doctorProfile?.specialization[0] || "",
              alignment: "right",
              margin: [0, 0, 0, 0],
              fontSize: 10,
            },
            {
              text: "AMC Reg. No. " + medicalRegList?.regNumber || "",
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
                    text: "CONSULTATION TYPE",
                    bold: true,
                    fontSize: 12,
                    width: "auto",
                    alignment: "left",
                  },
                  {
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
            text:
              graduationDetails?.course +
                " | " +
                doctorProfile?.specialization[0] || "",
            fontSize: 12,
            alignment: "right",
            color: "#979393",
            width: "auto",
          },
          {
            text: "Powered by  :",
            fontSize: 6,
            width: "auto",
            alignment: "left",
            margin: [28, 0, 0, 0],
          },
          {
            columns: [
              //   [
              //     {
              //       image: docisnLogoPngBase64,
              //       width: 60,
              //       alignment: "left",
              //     },
              //   ],
              {
                text: "USE DOCISN APP FOR ALL YOUR MEDICAL NEEDS",
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
          text: " | " + patientDetails?.phoneNumber,
          bold: true,
          fontSize: 11,
          margin: [2, 10, 0, 0],
          alignment: "left",
          width: "auto",
        },
        patientDetails?.demographicInfo?.dOB
          ? {
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
                text: "Date",
                alignment: "right",
                width: "auto",
                margin: [0, 10, 10, 0],
                fontSize: 10,
                color: "#464646",
              },
            ],

            {
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
              text: "Temp: ",
              alignment: "left",
              width: "auto",
              margin: [0, 10, 0, 5],
              color: "#979393",
              fontSize: 10,
            },
            {
              text: vitalsObject?.temperature || "",
              alignment: "left",
              width: "auto",
              margin: [1, 10, 0, 0],
              color: "#565656",
              fontSize: 10,
            },
            {
              text: "F°" + " | ",
              alignment: "left",
              width: "auto",
              margin: [1, 10, 1, 0],
              color: "#979393",
              fontSize: 10,
            },
            {
              text: "Heart Rate: ",
              alignment: "left",
              width: "auto",
              margin: [4, 10, 0, 5],
              color: "#979393",
              fontSize: 10,
            },
            {
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
              text: "BPM" + " | ",
              alignment: "left",
              width: "auto",
              margin: [1, 10, 1, 0],
              color: "#979393",
              fontSize: 10,
            },
            {
              text: "Blood Pressure: ",
              alignment: "left",
              width: "auto",
              margin: [4, 10, 0, 5],
              color: "#979393",
              fontSize: 10,
            },
            {
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
              text: "mmhg" + " | ",
              alignment: "left",
              width: "auto",
              margin: [1, 10, 1, 0],
              color: "#979393",
              fontSize: 10,
            },
            {
              text: "Weight: ",
              alignment: "left",
              width: "auto",
              margin: [4, 10, 0, 5],
              color: "#979393",
              fontSize: 10,
            },
            {
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
              text: "Kg" + " | ",
              alignment: "left",
              width: "auto",
              margin: [1, 10, 1, 0],
              color: "#979393",
              fontSize: 10,
            },
            {
              text: "SPO2: ",
              alignment: "left",
              width: "auto",
              margin: [4, 10, 0, 5],
              color: "#979393",
              fontSize: 10,
            },
            {
              text: vitalsObject?.spo2 || "",
              alignment: "left",
              width: "auto",
              margin: [1, 10, 0, 0],
              color: "#565656",
              fontSize: 10,
            },
            {
              text: "%",
              alignment: "left",
              width: "auto",
              margin: [1, 10, 0, 0],
              color: "#979393",
              fontSize: 10,
            },
            {
              text: "Height: ",
              alignment: "left",
              width: "auto",
              margin: [4, 10, 0, 5],
              color: "#979393",
              fontSize: 10,
            },
            {
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
          text: "Symptoms:",
          bold: true,
          fontSize: 10,
          // color: '#14a7a7',
          margin: [0, 10, 0, 0],
          width: "auto",
          // decoration: 'underline'
        }
      : "",
    addedCheifcomplaintsArray?.length > 0 &&
      prescriptionPdfSettings?.reasonVisit
      ? {
          fontSize: 8,
          ul: [...(addedCheifcomplaintsArray?.map((p) => p.name) || "NA")],
        }
      : "",
    diagnosis?.provisionalDiagnosis?.length > 0 &&
      prescriptionPdfSettings?.diagnosis?.provisionalDiagnosis
      ? {
          text: "Provisional Diagnosis:",
          decoration: "underline",
          margin: [0, 10, 0, 0],
          fontSize: 10,
        }
      : "",
    diagnosis?.provisionalDiagnosis?.length > 0 &&
      prescriptionPdfSettings?.diagnosis?.provisionalDiagnosis
      ? {
          fontSize: 8,
          ul: [
            ...(diagnosis?.provisionalDiagnosis?.map(
              (p) => p?.diagnosisDescription
            ) || "NA"),
          ],
        }
      : "",
    diagnosis?.workingDiagnosis?.length > 0 &&
      prescriptionPdfSettings?.diagnosis?.workingDiagnosis
      ? {
          text: "Working Diagnosis:",
          decoration: "underline",
          margin: [0, 10, 0, 2],
          fontSize: 10,
        }
      : "",
    diagnosis?.workingDiagnosis?.length > 0 &&
      prescriptionPdfSettings?.diagnosis?.workingDiagnosis
      ? {
          fontSize: 8,
          ul: [
            ...(diagnosis?.workingDiagnosis?.map(
              (p) => p?.diagnosisDescription
            ) || "NA"),
          ],
        }
      : "",
    diagnosis?.differentialDiagnosis?.length > 0 &&
      prescriptionPdfSettings?.diagnosis?.differentialDiagnosis
      ? {
          text: "Diffrential Diagnosis:",
          // decoration: 'underline',
          margin: [0, 10, 0, 2],
          fontSize: 10,
        }
      : "",
    diagnosis?.differentialDiagnosis?.length > 0 &&
      prescriptionPdfSettings?.diagnosis?.differentialDiagnosis
      ? {
          fontSize: 8,
          ul: [
            ...(diagnosis?.differentialDiagnosis?.map(
              (p) => p?.diagnosisDescription
            ) || "NA"),
          ],
        }
      : "",
    diagnosis?.finalDiagnosis?.length > 0 &&
      prescriptionPdfSettings?.diagnosis?.finalDiagnosis
      ? {
          text: "Final Diagnosis:",
          // decoration: 'underline',
          margin: [0, 10, 0, 2],
          fontSize: 10,
        }
      : "",
    diagnosis?.finalDiagnosis?.length > 0 &&
      prescriptionPdfSettings?.diagnosis?.finalDiagnosis
      ? {
          fontSize: 8,
          ul: [
            ...(diagnosis?.finalDiagnosis?.map(
              (p) => p?.diagnosisDescription
            ) || "NA"),
          ],
        }
      : "",

    otherInstructions?.toString()?.length > 0 &&
      prescriptionPdfSettings?.patientsInstruction
      ? {
          text: "Patient Instructions:",
          decoration: "underline",
          margin: [0, 10, 0, 2],
          fontSize: 10,
        }
      : "",
    otherInstructions?.toString()?.length > 0 &&
      prescriptionPdfSettings?.patientsInstruction
      ? {
          text: otherInstructions?.toString(),
          fontSize: 8,
          margin: [10, 5, 0, 0],
          width: "auto",
        }
      : "",
    prescription?.length > 0 && prescriptionPdfSettings?.prescription
      ? {
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
                  text: "S.NO",
                  fillColor: "#E9E9E9",
                  color: "#8B8B8B",
                  bold: true,
                  fontSize: 9,
                },
                {
                  text: "Medicine Name",
                  fillColor: "#E9E9E9",
                  color: "#8B8B8B",
                  bold: true,
                  fontSize: 9,
                },
                {
                  text: "Dosage Route",
                  fillColor: "#E9E9E9",
                  bold: true,
                  color: "#8B8B8B",
                  fontSize: 9,
                },
                {
                  text: "Frequency",
                  fillColor: "#E9E9E9",
                  bold: true,
                  color: "#8B8B8B",
                  fontSize: 9,
                },
                {
                  text: "Instructions",
                  fillColor: "#E9E9E9",
                  bold: true,
                  color: "#8B8B8B",
                  fontSize: 9,
                },
              ],
              ...prescription.map((p, i) => [
                i + 1,
                { text: p.drugName, bold: true },
                p.drugRoute,
                p.frequency + " for " + p.duration,
                p.instructions !== undefined ? p.instructions : "",
              ]),
            ],
          },
          layout: "noBorders",
        }
      : "",
    labOrder?.length > 0 && prescriptionPdfSettings?.investigation
      ? {
          text: "Lab Investigation",
          bold: true,
          fontSize: 9,
          margin: [0, 30, 0, 4],
        }
      : "",
    labOrder?.length > 0 && prescriptionPdfSettings?.investigation
      ? {
          fontSize: 8,
          table: {
            headerRows: 1,
            widths: [30, "*", "*"],
            body: [
              [
                {
                  text: "S.NO",
                  fillColor: "#E9E9E9",
                  bold: true,
                  fontSize: 9,
                },
                {
                  text: "Test Name",
                  fillColor: "#E9E9E9",
                  bold: true,
                  fontSize: 9,
                },
                {
                  text: "Instructions",
                  fillColor: "#E9E9E9",
                  bold: true,
                  fontSize: 9,
                },
              ],
              ...labOrder.map((p, i) => [i + 1, p.testName, p.instructions]),
            ],
          },
          layout: "noBorders",
        }
      : "",
    clinicalInvestigation?.length > 0 && prescriptionPdfSettings?.investigation
      ? {
          text: "Clinical Investigation",
          bold: true,
          fontSize: 9,
          // color: '#14a7a7',
          margin: [0, 30, 0, 4],
          // decoration: 'underline'
        }
      : "",
    clinicalInvestigation?.length > 0 && prescriptionPdfSettings?.investigation
      ? {
          fontSize: 8,
          table: {
            headerRows: 1,
            widths: [30, "*", "*"],
            body: [
              [
                {
                  text: "S.NO",
                  fillColor: "#E9E9E9",
                  bold: true,
                  fontSize: 9,
                },
                {
                  text: "Test Name",
                  fillColor: "#E9E9E9",
                  bold: true,
                  fontSize: 9,
                },
                {
                  text: "Instructions",
                  fillColor: "#E9E9E9",
                  bold: true,
                  fontSize: 9,
                },
              ],
              ...clinicalInvestigation.map((p, i) => [
                i + 1,
                p.testName,
                p.instructions,
              ]),
            ],
          },
          layout: "noBorders",
        }
      : "",
    radiologyOrder?.length > 0 && prescriptionPdfSettings?.investigation
      ? {
          text: "Radiology Order",
          bold: true,
          fontSize: 9,
          // color: '#14a7a7',
          margin: [0, 30, 0, 4],
          // decoration: 'underline'
        }
      : "",
    radiologyOrder?.length > 0 && prescriptionPdfSettings?.investigation
      ? {
          fontSize: 8,
          table: {
            headerRows: 1,
            widths: [30, "*", "*"],
            body: [
              [
                {
                  text: "S.NO",
                  bold: true,
                  fillColor: "#E9E9E9",
                  fontSize: 9,
                },
                {
                  text: "Test Name",
                  bold: true,
                  fillColor: "#E9E9E9",
                  fontSize: 9,
                },
                {
                  text: "Instructions",
                  bold: true,
                  fillColor: "#E9E9E9",
                  fontSize: 9,
                },
              ],

              ...radiologyOrder.map((p, i) => [
                i + 1,
                p.testName,
                p.instructions,
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
                        text: "Allergy Name",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                      },
                      {
                        text: "Allergy Type",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                      },
                      {
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
                    ].map((d) => [
                      d?.drugName
                        ? { text: d?.drugName || "" }
                        : d?.environmentName
                        ? {
                            text: d?.environmentName || "",
                          }
                        : {
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
                        text: "Medicine Name",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                      {
                        text: "Dosage Route",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                      {
                        text: "Frequency",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                      {
                        text: "Instructions",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                    ],
                    ...currentMedications.map((c) => [
                      { text: c?.drugName || "" },
                      { text: c?.drugRoute || "" },
                      {
                        text: `${c?.frequency || ""} for ${c?.duration || ""}`,
                      },
                      { text: c?.instructions || "" },
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
                        text: "Relationship",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                      {
                        text: "Condition",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                      {
                        text: "Outcome",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                    ],
                    ...familyHistory.map((f) => [
                      { text: f?.relationShip || "" },
                      { text: f?.condition || "" },
                      { text: f?.outcome || "" },
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
                        text: "Medical Condition",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                      {
                        text: "Started ON",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                      {
                        text: "Current Status",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                    ],
                    ...currentProblems.map((c) => [
                      { text: c?.ICDDescription || "" },
                      {
                        text: moment(c?.startedOn).format("DD-MMM-YYYY") || "",
                      },
                      { text: c?.currentStatus || "" },
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
                        text: "Procedure Description",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                      {
                        text: "Time of Occurrence",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                      {
                        text: "Outcome",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                    ],
                    ...pastSurgicalHistory.map((p) => [
                      { text: p?.procedureDescription || "" },
                      {
                        text:
                          moment(p?.timeOfOccurance).format("DD-MMM-YYYY") ||
                          "",
                      },
                      { text: p?.outcome || "" },
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
                        text: "Medical Condition",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                      {
                        text: "Time of Occurrence",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                      {
                        text: "Outcome",
                        fillColor: "#E9E9E9",
                        bold: true,
                        fontSize: 9,
                        width: "auto",
                      },
                    ],
                    ...pastMedicalHistory.map((p) => [
                      { text: p?.ICDDescription },
                      {
                        text: moment(p?.timeOfOccurance).format("DD-MMM-YYYY"),
                      },
                      { text: p?.outcome },
                    ]),
                  ],
                },
                layout: "noBorders",
              },
            ],
          ],
        }
      : "",
    {
      margin: [0, 20, 0, 0],
      columns: [
        Object.keys(obstetricHistory)?.length > 0 &&
        prescriptionPdfSettings?.overview?.obstetricHistory &&
        patientDetails?.demographicInfo?.gender === "Female"
          ? [
              {
                text: "Obstetric History",
                fontSize: 10,
                decoration: "underline",
              },
              {
                text: "GPLA",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Gravidity",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: obstetricHistory?.GPLA?.gravidity || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Parity",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: obstetricHistory?.GPLA?.parity || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: "Live",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: obstetricHistory?.GPLA?.live,
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Abortion",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: obstetricHistory?.GPLA?.abortion,
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "TERMINATIONS",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Ectopic Pregnancy",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: obstetricHistory?.terminations,
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Comments",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: obstetricHistory?.commentForTerminations,
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "PREVIOUS PREGNANCIES",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  [
                    {
                      width: "auto",
                      stack: [
                        ...obstetricHistory?.previousPregnancies?.map((p) => [
                          {
                            columns: [
                              {
                                text: "Length In Weeks:",
                                fontSize: 9,
                                margin: [0, 2, 0, 1],
                                width: "auto",
                              },
                              {
                                text: p?.lengthInWeeks,
                                fontSize: 9,
                                margin: [1, 2, 0, 0],
                                width: "auto",
                              },
                            ],
                          },
                        ]),
                      ],
                    },
                  ],
                  [
                    {
                      stack: [
                        ...obstetricHistory?.previousPregnancies?.map((p) => [
                          {
                            columns: [
                              {
                                text: "Mode Of Delivery:",
                                fontSize: 9,
                                margin: [0, 2, 0, 1],
                                width: "auto",
                              },
                              p?.modeOfDelivery !== undefined
                                ? {
                                    text: p?.modeOfDelivery,
                                    fontSize: 9,
                                    margin: [1, 2, 0, 0],
                                    width: "auto",
                                  }
                                : "",
                            ],
                          },
                        ]),
                      ],
                    },
                  ],
                ],
              },
              {
                text: "PAST COMPLICATION OF PREGNANCY",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Before",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "During",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "After",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.pastComplicationsOfPregnancy?.after?.toString() ||
                      "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "FAMILY OBSTETRIC HISTORY",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Twins",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: obstetricHistory?.familyObstetricHistory?.twins || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Recurrent Miscarriage",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.familyObstetricHistory
                        ?.recurrentMiscarriage || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "CURRENT PREGNANCY",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Confirmation Of Pregnancy",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy?.confirmationOfPregnancy?.toString() ||
                      "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "DATES",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "LMP",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      moment(
                        obstetricHistory?.currentPregnancy?.dates?.LMP
                      ).format("DD-MM-YYYY") || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "EDD By LMP",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "EDD By Ultrasound",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      moment(
                        obstetricHistory?.currentPregnancy?.dates
                          ?.EDDByUltrasound
                      ).format("DD-MM-YYYY") || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Gestational Age In Weeks(POG)",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy?.dates
                        ?.gestationalAgeInWeeks || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "SCANS",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Size",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: obstetricHistory?.currentPregnancy?.scans?.size || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Location",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "Morphological Issues",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy?.scans
                        ?.morphologicalIssues || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "OTHER INVESTIGATIONS",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "ABO Group",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy?.otherInvestigations
                        ?.ABOGroup || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Rhesus Group",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "HBsAg",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy?.otherInvestigations
                        ?.hbsag || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "HIV Status",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "VDRL",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy?.otherInvestigations
                        ?.VDRL || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Rubella Status",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "Haemoglobin",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy?.otherInvestigations
                        ?.hemoglobin || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "FOETAL MOVEMENTS",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Foetal Movements",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy?.foetalMovements
                        ?.foetalMovements || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "COMPLICATIONS OF THIS PREGNANCY",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Gestational Diabetes",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy
                        ?.complicationsOfThisPregnancy?.gestationalDiabetes ||
                      "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Pre-eclampsia",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy
                        ?.complicationsOfThisPregnancy?.preEclampsia || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "MEDICATIONS FOR THIS PREGNANCY",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Folic acid",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy
                        ?.medicationsForThisPregnancy?.folicAcid || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Iron",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "Calcium",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      obstetricHistory?.currentPregnancy
                        ?.medicationsForThisPregnancy?.calcium || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Antimetics",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "Tetanus Toxoid Shot",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "PLAN FOR DELIVERY",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                text: "Gynaecology History",
                fontSize: 10,
                decoration: "underline",
              },
              {
                text: "MENSTRUAL PERIODS",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Regularity",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      GynaecologyHistory?.menstrualPeriods?.regularity || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Duration",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: GynaecologyHistory?.menstrualPeriods?.duration || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: "Flow",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: GynaecologyHistory?.menstrualPeriods?.flow || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Pain",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: GynaecologyHistory?.menstrualPeriods?.pain || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "PAST GYNAECOLOGIC DISEASE",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Ectopic Pregnancy",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      GynaecologyHistory?.pastGynaecologicDisease
                        ?.ectopicPregnancy || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "STD",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "PID",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      GynaecologyHistory?.pastGynaecologicDisease?.PID || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "PAST GYNAECOLOGIC SURGERY",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "D&C",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      GynaecologyHistory?.pastGynaecologicSurgery?.dAndC || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "LEFTZ Cervical Treatment",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "Breast Surgery",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      GynaecologyHistory?.pastGynaecologicSurgery
                        ?.breastSurgery || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "PAP SMEAR",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Last Smear Taken On",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: GynaecologyHistory?.papSmear?.lastSmearTakenOn || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Result",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: GynaecologyHistory?.papSmear?.result || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "MAMMOGRAM",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Mammogram Done",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: GynaecologyHistory?.mammogram?.mammogramDone || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "PAST SUBFERTILITY",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Amount Of Time Attempting Pregnancy",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text:
                      GynaecologyHistory?.pastSubFertility
                        ?.amountOfTimeAttemptingPregnancy || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Medications",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
                    text: "IVF",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: GynaecologyHistory?.pastSubFertility?.IVF || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                text: "MENOPAUSE STATUS",
                fontSize: 9,
                color: "#14636A",
                bold: true,
                margin: [0, 2, 0, 1],
              },
              {
                columns: [
                  {
                    text: "Attained",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: GynaecologyHistory?.menopauseStatus?.attained || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "AtAge",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
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
    Object.keys(socialHistory)?.length > 0 &&
      prescriptionPdfSettings?.overview?.socialHistory
      ? {
          columns: [
            [
              {
                text: "Social History",
                fontSize: 10,
                decoration: "underline",
              },
              {
                columns: [
                  {
                    text: "Sleep",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: socialHistory?.sleep || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Diet",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: socialHistory?.diet || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: "Smoking",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: socialHistory?.smoking || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Alocohol Consumption",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: socialHistory?.alcoholConsumption || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: "Tobacco Consumtion",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: socialHistory?.tobaccoConsumption || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Recreational Drugs",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: socialHistory?.recreationalDrugs || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: "Execrcise",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: socialHistory?.exercise || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Marital Status",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: personalSocailHistory?.maritalStatus || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: "Social Support",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: personalSocailHistory?.socialSupport || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: "Educational Status",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: personalSocailHistory?.educationStatus || "",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: "Occupation",
                    fontSize: 9,
                    margin: [0, 2, 0, 1],
                  },
                  {
                    text: personalSocailHistory?.occupation || "",
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
    nueroString ||
      respString ||
      cardString ||
      abdString ||
      glassString ||
      integString ||
      neuroVasString ||
      muscuStirng
      ? {
          text: "Assessment",
          fontSize: 10,
          bold: true,
          margin: [0, 20, 0, 4],
        }
      : "",
    nueroString && prescriptionPdfSettings?.assessment?.neuro
      ? {
          text: "NEURO :",
          fontSize: 10,
          bold: true,
          margin: [0, 5, 0, 4],
        }
      : "",

    nueroString && prescriptionPdfSettings?.assessment?.neuro
      ? {
          text: "[ " + nueroString?.toString() + " ]",
          width: "auto",
          fontSize: 9,
        }
      : "",

    respString && prescriptionPdfSettings?.assessment?.respiratory
      ? {
          text: "RESPIRATORY :",
          fontSize: 10,
          bold: true,
          margin: [0, 10, 0, 4],
        }
      : {
          text: "",
          width: "auto",
        },
    respString && prescriptionPdfSettings?.assessment?.respiratory
      ? {
          text: "[ " + respString?.toString() + "]",
          width: "auto",
          fontSize: 9,
        }
      : {
          text: "",
          width: "auto",
        },
    cardString && prescriptionPdfSettings?.assessment?.cardiovascular
      ? {
          text: "CARDIOVASCULAR :",
          fontSize: 10,
          bold: true,
          margin: [0, 10, 0, 4],
        }
      : {
          text: "",
          width: "auto",
        },
    cardString && prescriptionPdfSettings?.assessment?.cardiovascular
      ? {
          text: " [ " + cardString?.toString() + " ] ",
          width: "auto",
          fontSize: 9,
        }
      : {
          text: "",
          width: "auto",
        },
    abdString && prescriptionPdfSettings?.assessment?.ABDOMINAL
      ? {
          text: "ABDOMINAL/GI/GU :",
          fontSize: 10,
          bold: true,
          margin: [0, 10, 0, 4],
        }
      : {
          text: "",
          width: "auto",
        },
    abdString && prescriptionPdfSettings?.assessment?.ABDOMINAL
      ? {
          text: "[ " + abdString?.toString() + " ]",
          width: "auto",
          fontSize: 9,
        }
      : {
          text: "",
          width: "auto",
        },
    muscuStirng && prescriptionPdfSettings?.assessment?.muscoloskeltal
      ? {
          text: "MUSCOLOSKELTAL :",
          fontSize: 10,
          bold: true,
          margin: [0, 10, 0, 4],
        }
      : {
          text: "",
          width: "auto",
        },
    muscuStirng && prescriptionPdfSettings?.assessment?.muscoloskeltal
      ? {
          text: "[" + muscuStirng?.toString() + "]",
          width: "auto",
          fontSize: 9,
        }
      : {
          text: "",
          width: "auto",
        },
    glassString && prescriptionPdfSettings?.assessment?.glaslowComaScale
      ? {
          text: "GLASLOW COMA SCALE(GCS SCALE) :",
          fontSize: 10,
          bold: true,
          margin: [0, 10, 0, 4],
        }
      : {
          text: "",
          width: "auto",
        },
    glassString && prescriptionPdfSettings?.assessment?.glaslowComaScale
      ? {
          text: "[" + glassString?.toString() + " ]",
          width: "auto",
          fontSize: 9,
        }
      : {
          text: "",
          width: "auto",
        },
    integString && prescriptionPdfSettings?.assessment?.integumentary
      ? {
          text: "INTEGUMENTARY :",
          fontSize: 10,
          bold: true,
          margin: [0, 10, 0, 4],
        }
      : {
          text: "",
          width: "auto",
        },
    integString && prescriptionPdfSettings?.assessment?.integumentary
      ? {
          text: "[ " + integString?.toString() + " ]",
          width: "auto",
          fontSize: 9,
        }
      : {
          text: "",
          width: "auto",
        },
    neuroVasString &&
      prescriptionPdfSettings?.assessment?.neurovascularExtremeties
      ? {
          text: "NEUROVASCULAR EXTREMETIES :",
          fontSize: 10,
          bold: true,
          margin: [0, 10, 0, 4],
        }
      : {
          text: "",
          width: "auto",
        },
    neuroVasString &&
      prescriptionPdfSettings?.assessment?.neuneurovascularExtremetiesro
      ? {
          text: "[ " + neuroVasString?.toString() + " ]",
          width: "auto",
          fontSize: 9,
        }
      : {
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
              text: "Review",
              fontSize: 10,
              bold: true,
              // color: '#14a7a7',
              width: "auto",
              margin: [0, 5, 0, 0],
            },
            {
              text:
                " - Review after " + followUp?.follwUpDate + " days" || "NA",
              fontSize: 9,
              margin: [4, 6, 0, 0],
            },
          ],
        }
      : {
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
              text: "Referred Doctor: ",
              fontSize: 10,
              bold: true,
              width: "auto",
              // color: '#14a7a7',
              margin: [0, 5, 0, 0],
            },
            referDoctorToPatient?.referDoctorName !== ""
              ? {
                  text: "Name ",
                  fontSize: 9,
                  width: "auto",
                  color: "#979393",
                  margin: [4, 6, 0, 0],
                }
              : "",
            {
              text: referDoctorToPatient?.referDoctorName,
              fontSize: 9,
              width: "auto",
              margin: [4, 6, 0, 0],
            },
            referDoctorToPatient?.specialization !== ""
              ? {
                  text: " | SPECIALITY ",
                  fontSize: 9,
                  width: "auto",
                  color: "#979393",
                  margin: [4, 6, 0, 0],
                }
              : "",
            referDoctorToPatient?.specialization !== ""
              ? {
                  text: referDoctorToPatient?.specialization,
                  fontSize: 9,
                  width: "auto",
                  margin: [4, 6, 0, 0],
                }
              : "",
            referDoctorToPatient?.address !== ""
              ? {
                  text: " | LOCATION ",
                  fontSize: 9,
                  width: "auto",
                  color: "#979393",
                  margin: [4, 6, 0, 0],
                }
              : "",
            referDoctorToPatient?.address !== ""
              ? {
                  text: referDoctorToPatient?.address,
                  fontSize: 9,
                  width: "auto",
                  margin: [4, 6, 0, 0],
                }
              : "",
          ],
        }
      : ""
  );
  return docDefinition;
};
