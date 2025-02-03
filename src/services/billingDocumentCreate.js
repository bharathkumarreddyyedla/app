import moment from "moment";

export const billingDocumentCreate = (
  clinicInformation,
  patientDetails,
  billingDetails,
  providerDetails
) => {
  let docDefinition = {
    pageSize: "A5",
    pageOrientation: "landscape",
    pageMargins: [40, 40, 40, 40],
    content: [
      {
        columns: [
          {
            image: clinicInformation?.clinicLogo,
            width: 40,
            height: 40,
            alignment: "left",
            margin: [0, 0, 0, 0],
          },
          [
            {
              text: clinicInformation?.clinicName,
              bold: true,
              color: "brown",
              fontSize: 16,
              alignment: "left",
              margin: [10, 0, 0, 0],
            },
            {
              text:
                clinicInformation?.address?.buildingNumber +
                (clinicInformation?.address?.street !== ""
                  ? "," + clinicInformation?.address?.street
                  : ""),
              fontSize: 10,
              margin: [10, 0, 0, 0],
            },
            {
              text:
                clinicInformation?.address?.city +
                  "," +
                  clinicInformation?.address?.stateName +
                  " - " +
                  clinicInformation?.address?.pinCode || "",
              fontSize: 10,
              margin: [10, 0, 0, 2],
            },
          ],
        ],
      },
      {
        canvas: [
          {
            type: "line",
            x1: -40,
            y1: 0,
            x2: 555,
            y2: 0,
            lineWidth: 0.5,
            color: "#C9C9C9",
          },
        ],
      },
      {
        columns: [
          {
            text: "Patient Info:",
            bold: true,
            fontSize: 12,
            width: 80,
            margin: [0, 10, 0, 0],
          },
          [
            {
              text:
                patientDetails?.patientName +
                " " +
                moment().diff(patientDetails?.patientDOB, "years") +
                "(Y)" +
                patientDetails?.patinetGender +
                " , " +
                patientDetails?.patientMobileNumber,
              alignment: "left",
              fontSize: 11,
              bold: true,
              margin: [0, 10, 0, 0],
            },
            {
              columns: [
                {
                  text:
                    patientDetails?.patientAddress.houseNumber !== ""
                      ? patientDetails?.patientAddress.houseNumber + " "
                      : " ",
                  alignment: "left",
                  fontSize: 10,
                  width: "auto",
                },
                {
                  text:
                    patientDetails?.patientAddress?.street !== "" ? " , " : "",
                  alignment: "left",
                  fontSize: 10,
                  width: "auto",
                },
                {
                  text:
                    patientDetails?.patientAddress?.street !== ""
                      ? patientDetails?.patientAddress?.street
                      : "",
                  alignment: "left",
                  fontSize: 10,
                  width: "auto",
                },
                {
                  text:
                    patientDetails?.patientAddress?.city !== "" ? " , " : "",
                  alignment: "left",
                  fontSize: 10,
                  width: "auto",
                },
                {
                  text:
                    patientDetails?.patientAddress?.city !== ""
                      ? patientDetails?.patientAddress?.city
                      : "",
                  alignment: "left",
                  fontSize: 10,
                  width: "auto",
                },

                {
                  text:
                    patientDetails?.patientAddress?.state !== "" ? " , " : "",
                  alignment: "left",
                  fontSize: 10,
                  width: "auto",
                },
                {
                  text:
                    patientDetails?.patientAddress?.state !== ""
                      ? patientDetails?.patientAddress?.state
                      : "",
                  alignment: "left",
                  fontSize: 10,
                  width: "auto",
                },
                {
                  text:
                    patientDetails?.patientAddress?.pinCode !== "" ? " - " : "",
                  alignment: "left",
                  fontSize: 10,
                  width: "auto",
                },
                patientDetails?.patientAddress?.pinCode !== ""
                  ? {
                      text: patientDetails?.patientAddress?.pinCode || "",
                      alignment: "left",
                      fontSize: 10,
                      width: "auto",
                    }
                  : " ",
              ],
            },
          ],
          [
            {
              columns: [
                {
                  text: "Date: ",
                  alignment: "right",
                  fontSize: 10,
                  margin: [100, 10, 0, 0],
                  color: "#464646",
                },
                [
                  {
                    text: moment(new Date()).format("DD/MM/YYYY"),
                    alignment: "center",
                    fontSize: 12,
                    margin: [0, 10, 0, 0],
                    bold: true,
                  },
                ],
              ],
            },
            {
              columns: [
                {
                  text: "Bill Number: ",
                  alignment: "right",
                  fontSize: 11,
                  margin: [0, 10, 0, 2],
                  color: "#464646",
                },
                [
                  {
                    text: billingDetails?.billNumber || "",
                    alignment: "center",
                    fontSize: 12,
                    margin: [0, 10, 0, 2],
                    bold: true,
                  },
                ],
              ],
            },
          ],
        ],
      },

      {
        canvas: [
          {
            type: "line",
            x1: -40,
            y1: 0,
            x2: 555,
            y2: 0,
            lineWidth: 0.5,
            color: "#C9C9C9",
          },
        ],
      },
      {
        text: "OPD Bills/receipts",
        bold: true,
        fontSize: 14,
        alignment: "center",
        margin: [0, 5, 0, 5],
      },
      {
        table: {
          headerRows: 1,
          widths: [30, "*", 60, 70, 60],
          body: [
            [
              {
                text: "S.No.",
                fillColor: "#E9E9E9",
              },
              {
                text: "Services",
                fillColor: "#E9E9E9",
              },
              {
                text: "Charges",
                fillColor: "#E9E9E9",
              },
              {
                text: "Discount (%)",
                fillColor: "#E9E9E9",
              },
              {
                text: "Amount",
                fillColor: "#E9E9E9",
              },
            ],
            ...billingDetails?.billingDetails?.map((p, i) => [
              i + 1,
              p.serviceInfo === "consultationFee"
                ? billingDetails?.appointmentType +
                  p?.serviceInfo +
                  " (" +
                  billingDetails?.appointmentDate +
                  ")"
                : p?.serviceInfo,
              p.charges,
              p.discount,
              p.amount,
            ]),
          ],
        },
      },
      {
        columns: [
          {
            text: "Grand Total",
            bold: true,
            fontSize: 12,
            alignment: "right",
            margin: [0, 5, 0, 0],
          },
          {
            text: billingDetails?.finalAmountPaid || "",
            bold: true,
            fontSize: 12,
            alignment: "right",
            width: "auto",
            margin: [10, 5, 0, 0],
          },
        ],
      },
      {
        text:
          moment(billingDetails?.billedOn).format("DD/MM/YYYY") +
            "  " +
            moment(billingDetails?.billedOn).format("hh:mm A") +
            " - Received Rs. " +
            billingDetails?.totalAmount +
            " (by " +
            billingDetails?.modeOfPayment +
            " ) as payment" || "",
        fontSize: 10,
        margin: [0, 10, 0, 0],
      },
      {
        canvas: [
          {
            type: "line",
            x1: -40,
            x2: 555,
            y1: 5,
            y2: 5,
            lineWidth: 0.5,
            color: "#C9C9C9",
          },
        ],
      },
      providerDetails?.doctorSignature
        ? {
            image: providerDetails?.doctorSignature,
            width: 100,
            height: 60,
            alignment: "right",
            margin: [0, 5, 0, 0],
          }
        : {
            width: 100,
            height: 60,
            alignment: "right",
            margin: [0, 5, 0, 0],
          },
      {
        text: "Authorized Signature",
        fontSize: 10,
        alignment: "right",
      },
      {
        columns: [
          {
            text: "Powered by aciana - www.docisn.com",
            fontSize: 12,
            bold: true,
          },
          {
            text: "Dr. " + providerDetails?.doctorName || "",
            fontSize: 12,
            bold: true,
            alignment: "right",
          },
        ],
      },
    ],
  };
  return docDefinition;
};
