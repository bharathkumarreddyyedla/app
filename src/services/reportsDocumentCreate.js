import moment from "moment";

export const reportsDocumentCreate = (
  clinicInfo = {},
  selectedStartDate = "",
  selectedEndDate = "",
  list = [],
  reportType = "PATIENT",
  totalAppointments = 0,
  totalRevenue = 0
) => {
  let docDefinition = {};
  if (reportType === "PATIENT") {
    docDefinition = {
      content: [
        {
          columns: [
            clinicInfo?.cliniclogo
              ? {
                  image: clinicInfo?.cliniclogo,
                  width: 50,
                  height: 50,
                  alignment: "left",
                  margin: [3, 1, 0, 3],
                }
              : {
                  image: clinicInfo?.cianaImageBase64,
                  width: 40,
                  height: 40,
                  alignment: "left",
                  margin: [0, 0, 0, 0],
                },
            [
              {
                text: clinicInfo?.clinicName,
                style: "header",
                fontSize: 18,
                bold: true,
                alignment: "left",
                margin: [15, 15, 1, 2],
              },

              {
                text:
                  clinicInfo?.clinicaddress?.city +
                  (clinicInfo?.clinicaddress?.state &&
                    ", " + clinicInfo?.clinicaddress?.state),
                alignment: "left",
                margin: [15, 1, 1, 2],
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
          margin: [10, 5, 10, 5],
          columns: [
            [
              {
                text:
                  "Follow Up patients Reports From " +
                  moment(selectedStartDate).format("DD-MM-YYYY") +
                  " To " +
                  moment(selectedEndDate).format("DD-MM-YYYY"),
                fontSize: 12,
                bold: true,
                alignment: "center",
              },
            ],
          ],
        },
        {
          margin: [0, 10, 0, 10],
          layout: {
            hLineColor: function (i, node) {
              return i === 0 || i === 1 || i === node.table.body.length
                ? "black"
                : "gray";
            },
            vLineColor: function (i, node) {
              return i === 0 || i === node.table.widths.length
                ? "black"
                : "gray";
            },
          },
          table: {
            headerRows: 1,
            widths: [100, 50, 30, "*", "*", 70],
            body: [
              [
                // {
                //   text: 'S.NO',
                //   fontSize: 10,
                //   bold: true
                // },
                {
                  text: "Patient",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Gender",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Age",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Doctor",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Specialization",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "FollowUP",
                  fontSize: 10,
                  bold: true,
                },
              ],
              ...list.map((el, i) => [
                { text: el.patientName, fontSize: 9 },
                { text: el.gender, fontSize: 9 },
                {
                  text: el.dob ? moment().diff(el.dob, "years").toString() : "",
                  fontSize: 9,
                },
                { text: el.doctorName, fontSize: 9 },
                { text: el.specialization, fontSize: 9 },
                { text: el.followupDate, fontSize: 9 },
              ]),
            ],
          },
        },
      ],
    };
  } else if (reportType === "CONSULTATION") {
    docDefinition = {
      pageSize: "A4",
      pageOrientation: "landscape",
      content: [
        {
          columns: [
            clinicInfo?.cliniclogo
              ? {
                  image: clinicInfo?.cliniclogo,
                  width: 50,
                  height: 50,
                  alignment: "left",
                  margin: [3, 1, 0, 3],
                }
              : {
                  image: clinicInfo?.cianaImageBase64,
                  width: 40,
                  height: 40,
                  alignment: "left",
                  margin: [0, 0, 0, 0],
                },
            [
              {
                text: clinicInfo?.clinicName,
                style: "header",
                fontSize: 18,
                bold: true,
                alignment: "left",
                margin: [15, 15, 1, 2],
              },

              [
                {
                  text:
                    clinicInfo?.clinicaddress?.city +
                    (clinicInfo?.clinicaddress.state &&
                      ", " + clinicInfo?.clinicaddress?.state),
                  alignment: "left",
                  margin: [15, 1, 1, 2],
                },
              ],
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
          margin: [10, 5, 10, 5],
          columns: [
            [
              {
                text:
                  "Consultation Revenue Reports From " +
                  moment(selectedStartDate).format("DD-MM-YYYY") +
                  " To " +
                  moment(selectedEndDate).format("DD-MM-YYYY"),
                fontSize: 12,
                bold: true,
                alignment: "center",
              },
            ],
          ],
        },
        {
          columns: [
            {
              text: "",
              width: 5,
            },
            [
              {
                text: "No. Of Appointments  :  " + totalAppointments,
                fontSize: 10,
                bold: true,
                alignment: "left",
                margin: [0, 2, 0, 0],
              },
              {
                text: "Total Revenue  : ₹ " + totalRevenue,
                fontSize: 10,
                bold: true,
                alignment: "left",
                margin: [0, 2, 0, 0],
              },
            ],
          ],
        },
        {
          margin: [0, 10, 0, 10],
          layout: {
            hLineColor: function (i, node) {
              return i === 0 || i === 1 || i === node.table.body.length
                ? "black"
                : "gray";
            },
            vLineColor: function (i, node) {
              return i === 0 || i === node.table.widths.length
                ? "black"
                : "gray";
            },
          },
          table: {
            headerRows: 1,
            widths: ["*", 80, 50, 80, 60, 50, 40, 50, 40, 40, 40, 50],
            body: [
              [
                // {
                //   text: 'S.NO',
                //   fontSize: 10,
                //   bold: true
                // },
                {
                  text: "Appointment ID",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Patient",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Gender & Age",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Doctor",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Speciality",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Date",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Time",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Appointment Type",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Amount(₹)",
                  fontSize: 10,
                  bold: true,
                  alignment: "right",
                },
                {
                  text: "Discount(%)",
                  fontSize: 10,
                  bold: true,
                  alignment: "right",
                },
                {
                  text: "Net Amount(₹)",
                  fontSize: 10,
                  bold: true,
                  alignment: "right",
                },
                {
                  text: "Payment Mode",
                  fontSize: 10,
                  bold: true,
                },
              ],
              ...list.map((el, i) => [
                { text: el.appointmentID, fontSize: 9 },
                { text: el.patientName, fontSize: 9 },
                {
                  text: `${el.gender}${
                    el.dob
                      ? " | " + moment().diff(el.dob, "years").toString()
                      : ""
                  }`,
                  fontSize: 9,
                },
                { text: el.providerName, fontSize: 9 },
                { text: el.specialization[0], fontSize: 9 },
                { text: moment(el.date).format("DD-MM-YYYY"), fontSize: 9 },
                { text: el.time, fontSize: 9 },
                { text: el.appointmentType, fontSize: 9 },
                {
                  text: parseFloat(el.charges).toFixed(2),
                  fontSize: 9,
                  alignment: "right",
                },
                {
                  text: parseFloat(el.discount).toFixed(2),
                  fontSize: 9,
                  alignment: "right",
                },
                {
                  text: parseFloat(el.finalAmount).toFixed(2),
                  fontSize: 9,
                  alignment: "right",
                },
                { text: el.paymentMode, fontSize: 9 },
              ]),
            ],
          },
        },
      ],
    };
  } else if (reportType === "SERVICE") {
    docDefinition = {
      content: [
        {
          columns: [
            clinicInfo?.cliniclogo
              ? {
                  image: clinicInfo?.cliniclogo,
                  width: 50,
                  height: 50,
                  alignment: "left",
                  margin: [3, 1, 0, 3],
                }
              : {
                  image: clinicInfo?.cianaImageBase64 || "",
                  width: 40,
                  height: 40,
                  alignment: "left",
                  margin: [0, 0, 0, 0],
                },
            [
              {
                text: clinicInfo?.clinicName,
                style: "header",
                fontSize: 18,
                bold: true,
                alignment: "left",
                margin: [15, 15, 1, 2],
              },

              {
                text:
                  clinicInfo?.clinicaddress?.city +
                  (clinicInfo?.clinicaddress?.state &&
                    ", " + clinicInfo?.clinicaddress?.state),
                alignment: "left",
                margin: [15, 1, 1, 2],
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
          margin: [10, 5, 10, 5],
          columns: [
            [
              {
                text:
                  "Services Revenue Reports From " +
                  moment(selectedStartDate).format("DD-MM-YYYY") +
                  " To " +
                  moment(selectedEndDate).format("DD-MM-YYYY"),
                fontSize: 12,
                bold: true,
                alignment: "center",
              },
            ],
          ],
        },
        {
          columns: [
            {
              text: "",
              width: 5,
            },
            [
              {
                text: "Total Revenue  : ₹ " + totalRevenue,
                fontSize: 10,
                bold: true,
                alignment: "left",
                margin: [0, 2, 0, 0],
              },
            ],
          ],
        },
        {
          margin: [0, 10, 0, 10],
          layout: {
            hLineColor: function (i, node) {
              return i === 0 || i === 1 || i === node.table.body.length
                ? "black"
                : "gray";
            },
            vLineColor: function (i, node) {
              return i === 0 || i === node.table.widths.length
                ? "black"
                : "gray";
            },
          },
          table: {
            headerRows: 1,
            widths: [100, 50, 80, "*"],
            body: [
              [
                {
                  text: "Patient",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Gender & Age",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Date & time",
                  fontSize: 10,
                  bold: true,
                },
                {
                  text: "Service Details",
                  fontSize: 10,
                  bold: true,
                },
              ],
              ...list.map((el, i) => [
                { text: el.patientName, fontSize: 9 },
                {
                  text: `${el.gender}${
                    el.dob
                      ? " | " + moment().diff(el.dob, "years").toString()
                      : ""
                  }`,
                  fontSize: 9,
                },
                {
                  text: moment(el.billedOn).format("DD-MM-YYYY  h:mm a"),
                  fontSize: 9,
                },
                {
                  stack: [
                    {
                      layout: {
                        hLineColor: "gray",
                        vLineColor: "gray",
                      },
                      table: {
                        headerRows: 1,
                        widths: ["*", 50, 50, 50],
                        body: [
                          [
                            {
                              text: "Service Name",
                              fontSize: 7,
                              bold: true,
                            },
                            {
                              text: "Amount",
                              fontSize: 7,
                              bold: true,
                              alignment: "right",
                            },
                            {
                              text: "Discount Amount",
                              fontSize: 7,
                              bold: true,
                              alignment: "right",
                            },
                            {
                              text: "Net Amount",
                              fontSize: 7,
                              bold: true,
                              alignment: "right",
                            },
                          ],
                          ...el.serviceDetails.map((ele, j) => [
                            { text: ele.serviceInfo, fontSize: 7 },
                            {
                              text: parseFloat(ele.charges).toFixed(2),
                              fontSize: 7,
                              alignment: "right",
                            },
                            {
                              text: parseFloat(ele.discount).toFixed(2),
                              fontSize: 7,
                              alignment: "right",
                            },
                            {
                              text: parseFloat(ele.finalAmount).toFixed(2),
                              fontSize: 7,
                              alignment: "right",
                            },
                          ]),
                        ],
                      },
                    },
                    {
                      text:
                        "TOTAL AMOUNT: " +
                        parseFloat(el.totalAmount).toFixed(2),
                      fontSize: 7,
                      bold: true,
                      alignment: "right",
                    },
                    {
                      text:
                        "TOTAL DISCOUNT AMOUNT: " +
                        parseFloat(el.totalDiscountAmount).toFixed(2),
                      fontSize: 7,
                      bold: true,
                      alignment: "right",
                    },
                    {
                      text:
                        "TOTAL NET AMOUNT: " +
                        parseFloat(el.finalTotalAmount).toFixed(2),
                      fontSize: 7,
                      bold: true,
                      alignment: "right",
                    },
                    {
                      text: "PAYMENT MODE: " + el.paymentMode,
                      fontSize: 7,
                      bold: true,
                      alignment: "right",
                    },
                  ],
                },
              ]),
            ],
          },
        },
      ],
    };
  }
  return docDefinition;
};
