import pdkMake from "pdfmake/build/pdfmake.js";
// import { vfs } from "./vfsFonts";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
import { vfs } from "./vfs.js";
import moment from "moment";
import { billingDocumentCreate } from "./billingDocumentCreate.js";
import { encounterDocumentCreate } from "./encounterDocumentCreate.js";
import { invoiceDocumentCreate } from "./invoiceDocumentCreate.js";

pdfMake.vfs = vfs;

export const pdf = (payload) =>
  new Promise((resolve, reject) => {
    try {
      console.log("payload?.type", payload?.type);
      let docDefinition =
        payload?.type === "BILL_PDF"
          ? billingDocumentCreate(
              payload?.clinicInformation,
              payload?.patientDetails,
              payload?.billingDetails,
              payload?.providerDetails
            )
          : payload?.type === "INVOICE_PDF"
          ? invoiceDocumentCreate(
              payload?.patientDetails,
              payload?.clinicDetails,
              payload?.billingDetails,
              payload?.labDetails,
              payload?.serviceType
            )
          : encounterDocumentCreate(
              payload?.appointmentDetails,
              payload?.patientDetails,
              payload?.doctorProfile,
              payload?.graduationDetails,
              payload?.medicalRegList,
              payload?.clinicDetails || {},
              payload?.addedCheifcomplaintsArray,
              payload?.prescription,
              payload?.labOrder,
              payload?.clinicalInvestigation,
              payload?.radiologyOrder,
              payload?.diagnosis,
              payload?.followUp,
              payload?.referDoctorToPatient,
              payload?.otherInstructions,
              payload?.vitalsObject,
              payload?.allergies,
              payload?.currentMedications,
              payload?.familyHistory,
              payload?.currentProblems,
              payload?.pastSurgicalHistory,
              payload?.pastMedicalHistory,
              payload?.obstetricHistory,
              payload?.GynaecologyHistory,
              payload?.socialHistory,
              payload?.nueroString,
              payload?.respString,
              payload?.cardString,
              payload?.abdString,
              payload?.glassString,
              payload?.integString,
              payload?.neuroVasString,
              payload?.muscuStirng,
              payload?.prescriptionPdfSettings,
              payload?.personalSocailHistory
            );
      pdfMake?.createPdf(docDefinition)?.getBase64((pdfData) => {
        if (pdfData) {
          resolve({
            pdfData: `data:application/pdf;base64,${pdfData}`,
            onlyBase64: pdfData,
          });
        } else {
          console.log("pdf error", pdfData);
          reject("Something went wrong");
        }
      }, undefined);
    } catch (err) {
      console.log("catch err", err);
      reject(err);
    }
  });
