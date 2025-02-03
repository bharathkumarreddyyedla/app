export const invoiceDocumentCreate = (
  patientDetails = {},
  clinicDetails = {},
  billingDetails = {},
  labDetails = {},
  serviceType
) => {
  console.log("serviceType", serviceType);
  let invoicePDFContent = {};
  if (serviceType === "SERVICE") {
    invoicePDFContent = {
      content: [
        {
          columns: [
            {
              image: clinicDetails?.clinicLogo
                ? clinicDetails?.clinicLogo
                : undefined,
              width: 60,
              height: 60,
              alignment: "left",
              margin: [3, 1, 0, 3],
            },
            [
              {
                text: clinicDetails?.clinicName || "",
                bold: true,
                alignment: "left",
                margin: [20, 1, 1, 2],
              },
              {
                text:
                  clinicDetails?.clinicAddress +
                  (clinicDetails?.clinicCity
                    ? "," + clinicDetails?.clinicCity
                    : ""),
                alignment: "left",
                margin: [20, 1, 1, 2],
              },
              {
                text:
                  (clinicDetails?.clinicState
                    ? " , " + clinicDetails?.clinicState
                    : "") +
                  (clinicDetails?.clinicPincode
                    ? "- " + clinicDetails?.clinicPincode
                    : ""),
                alignment: "left",
                margin: [20, 1, 1, 2],
              },
            ],
          ],
        },

        // { canvas: [{ type: 'line', x1: -40, y1: 5, x2: 555, y2: 5, lineWidth: 0.5, color: '#C9C9C9' }] },

        {
          table: {
            headerRows: 1,
            widths: ["*"],
            body: [[""], [""]],
          },
          layout: "headerLineOnly",
        },
        {
          columns: [
            {
              width: "70%",
              columns: [
                [
                  {
                    text:
                      patientDetails?.patientName +
                      " " +
                      patientDetails?.age +
                      " / " +
                      (patientDetails?.patientGender === "Male"
                        ? "M"
                        : patientDetails?.patientGender === "Female"
                        ? "F"
                        : " O ") +
                      " " +
                      " , " +
                      patientDetails?.patientMobileNumber,

                    bold: true,

                    alignment: "left",
                    margin: [2, 10, 1, 2],
                  },
                  {
                    text: patientDetails?.patientEmail,
                    alignment: "left",
                    margin: [2, 1, 1, 1],
                  },
                ],
              ],
            },

            {
              width: "30%",
              columns: [
                [
                  {
                    text: "Date:" + billingDetails?.billedDate,
                    alignment: "right",
                    margin: [20, 10, 5, 2],
                  },
                  billingDetails?.billNumber
                    ? {
                        text: "Bill Number:" + billingDetails?.billNumber,
                        alignment: "right",
                        margin: [20, 1, 5, 2],
                      }
                    : "",
                ],
              ],
            },
          ],
        },

        // { canvas: [{ type: 'line', x1: -40, y1: 5, x2: 555, y2: 5, lineWidth: 0.5, color: '#C9C9C9' }] },

        {
          table: {
            headerRows: 1,
            widths: ["*"],
            body: [[""], [""]],
          },
          layout: "headerLineOnly",
        },
        {
          columns: [
            {
              text: "OPD Bills/ Receipts",
              bold: true,
              alignment: "center",
              margin: [3, 10, 0, 3],
            },
          ],
        },

        {
          table: {
            headerRows: 1,
            widths: ["*", "*", "*", "*", "*"],
            body: [
              [
                {
                  text: "SI.No",
                  fillColor: "#E9E9E9",
                },
                {
                  text: "Particulars",
                  fillColor: "#E9E9E9",
                },
                {
                  text: "Charges",
                  fillColor: "#E9E9E9",
                },
                {
                  text: "Discount",
                  fillColor: "#E9E9E9",
                },
                {
                  text: "Amount",
                  fillColor: "#E9E9E9",
                },
              ],
              ...billingDetails?.billingDetails.map((p, i) => [
                i + 1,
                p?.serviceInfo,
                p?.charges,
                p?.discount,
                p?.amount.toFixed(2),
              ]),
            ],
          },
        },

        {
          columns: [
            {
              text: "",
              width: 310,
              alignment: "left",
              margin: [3, 10, 0, 3],
            },
            {
              text: "Grand Total",
              bold: true,
              alignment: "left",
              margin: [3, 10, 0, 3],
            },
            {
              text: billingDetails?.finalAmountPaid.toFixed(2),
              bold: true,
              alignment: "left",
              margin: [5, 10, 0, 3],
            },
          ],
        },

        {
          columns: [
            {
              text:
                billingDetails?.date +
                " " +
                billingDetails?.time +
                "- Received Rs-" +
                billingDetails?.finalAmountPaid +
                " (via " +
                billingDetails?.paymentMode +
                ") as payment",
              width: 500,
              alignment: "left",
              margin: [3, 10, 0, 3],
            },
          ],
        },

        // { canvas: [{ type: 'line', x1: -40, y1: 5, x2: 555, y2: 5, lineWidth: 0.5, color: '#C9C9C9' }] },

        {
          table: {
            headerRows: 1,
            widths: ["*"],
            body: [[""], [""]],
          },
          layout: "headerLineOnly",
        },
      ],
    };
  } else {
    invoicePDFContent = {
      content: [
        {
          columns: [
            labDetails?.labLogo
              ? {
                  image: labDetails?.labLogo ? labDetails?.labLogo : undefined,
                  width: 60,
                  height: 60,
                  alignment: "left",
                  margin: [3, 1, 0, 3],
                }
              : {},
            [
              {
                text: labDetails?.labName || "",
                bold: true,
                alignment: "left",
                margin: [20, 1, 1, 2],
              },
              {
                text:
                  labDetails?.streetName +
                  (labDetails?.locality ? "," + labDetails?.locality : ""),
                alignment: "left",
                margin: [20, 1, 1, 2],
              },
              {
                text: labDetails?.city + " , " + labDetails?.state,
                alignment: "left",
                margin: [20, 1, 1, 2],
              },
            ],
          ],
        },
        {
          table: {
            headerRows: 1,
            widths: ["*"],
            body: [[""], [""]],
          },
          layout: "headerLineOnly",
        },
        {
          columns: [
            {
              width: "70%",
              columns: [
                [
                  {
                    text:
                      patientDetails?.patientName +
                      " " +
                      patientDetails?.age +
                      " / " +
                      (patientDetails?.patientGender == "Male"
                        ? "M"
                        : patientDetails?.patientGender == "Female"
                        ? "F"
                        : " O ") +
                      " " +
                      " , " +
                      patientDetails?.patientMobileNumber,
                    bold: true,
                    alignment: "left",
                    margin: [2, 10, 1, 2],
                  },
                ],
              ],
            },
            {
              width: "30%",
              columns: [
                {
                  text: "Date:" + billingDetails?.date,
                  alignment: "right",
                  margin: [20, 10, 5, 2],
                },
              ],
            },
          ],
        },
        {
          table: {
            headerRows: 1,
            widths: ["*"],
            body: [[""], [""]],
          },
          layout: "headerLineOnly",
        },
        {
          columns: [
            {
              text: "Test Details",
              bold: true,
              alignment: "center",
              margin: [3, 10, 0, 3],
            },
          ],
        },
        {
          table: {
            headerRows: 1,
            widths: ["*", "*", "*", "*", "*"],
            body: [
              [
                {
                  text: "SI.No",
                  fillColor: "#E9E9E9",
                },
                {
                  text: "Test Name",
                  fillColor: "#E9E9E9",
                },
                {
                  text: "Charges",
                  fillColor: "#E9E9E9",
                },
                {
                  text: "Discount %",
                  fillColor: "#E9E9E9",
                },
                {
                  text: "Amount",
                  fillColor: "#E9E9E9",
                },
              ],
              ...billingDetails?.testdetails.map((p, i) => [
                i + 1,
                p.testName,
                p.price,
                p.concession,
                p.amount,
              ]),
            ],
          },
        },
        {
          columns: [
            {
              text: "",
              width: 310,
              alignment: "left",
              margin: [3, 10, 0, 3],
            },
            [
              {
                columns: [
                  {
                    text: "Total",
                    bold: true,
                    alignment: "left",
                    margin: [3, 10, 0, 3],
                  },
                  {
                    text: Number(billingDetails?.amount).toFixed(2),
                    bold: true,
                    alignment: "right",
                    margin: [5, 10, 0, 3],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: "Discount Amount",
                    bold: true,
                    alignment: "left",
                    margin: [3, 10, 0, 3],
                  },
                  {
                    text: Number(billingDetails?.discountAmount).toFixed(2),
                    bold: true,
                    alignment: "right",
                    margin: [5, 10, 0, 3],
                  },
                ],
              },
              {
                columns: [
                  {
                    text: "Grand Total",
                    bold: true,
                    alignment: "left",
                    margin: [3, 10, 0, 3],
                  },
                  {
                    text: Number(billingDetails?.finalAmountPaid).toFixed(2),
                    bold: true,
                    alignment: "right",
                    margin: [5, 10, 0, 3],
                  },
                ],
              },
            ],
          ],
        },
        {
          columns: [
            {
              text:
                billingDetails?.date +
                " " +
                billingDetails?.time +
                "- Received Rs-" +
                billingDetails?.finalAmountPaid +
                " (via " +
                billingDetails?.paymentMode +
                ") as payment",
              width: 500,
              alignment: "left",
              margin: [3, 10, 0, 3],
            },
          ],
        },
        {
          table: {
            headerRows: 1,
            widths: ["*"],
            body: [[""], [""]],
          },
          layout: "headerLineOnly",
        },
      ],
    };
  }

  return invoicePDFContent;
};
