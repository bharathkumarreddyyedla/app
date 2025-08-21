import pdkMake from "pdfmake/build/pdfmake.js";
// import { vfs } from "./vfsFonts";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
import { vfs } from "./vfs.js";
import moment from "moment";
import { billingDocumentCreate } from "./billingDocumentCreate.js";
import { encounterDocumentCreate } from "./encounterDocumentCreate.js";
import { invoiceDocumentCreate } from "./invoiceDocumentCreate.js";
import { reportsDocumentCreate } from "./reportsDocumentCreate.js";
import i18next from "./i18n.js";
pdfMake.vfs = vfs;
pdfMake.fonts = {
  Telugu: {
    normal: "NotoSansTelugu-Bold.ttf",
    bold: "NotoSansTelugu-Bold.ttf",
    italics: "NotoSansTelugu-Bold.ttf",
    bolditalics: "NotoSansTelugu-Bold.ttf",
  },
  Roboto: {
    normal: "Roboto-Regular.ttf",
    bold: "Roboto-Medium.ttf",
    italics: "Roboto-Italic.ttf",
    bolditalics: "Roboto-MediumItalic.ttf",
  },
};
export const pdf = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log("payload?.type", payload?.type);
      await i18next.changeLanguage(payload?.languageType || "en");
      let language = payload?.languageType === "TEL" ? "Telugu" : "Roboto";
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
          : payload?.type === "REPORTS_PDF"
          ? reportsDocumentCreate(
              payload?.clinicInfo,
              payload?.selectedStartDate,
              payload?.selectedEndDate,
              payload?.list,
              payload?.reportType,
              payload?.totalAppointments,
              payload?.totalRevenue,
              payload?.languageType
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
              payload?.invetigationsList,
              payload?.diagnosis,
              payload?.followUp,
              payload?.referDoctorToPatient,
              payload?.otherInstructions,
              payload?.doctorNotes,
              payload?.isDoctorNotes,
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
              payload?.personalSocailHistory,
              payload?.historyArray,
              payload?.breakFast,
              payload?.midMorningSnack,
              payload?.lunch,
              payload?.afternoonSnack,
              payload?.dinner,
              payload?.dietPlanAdditionalNotes,
              payload?.fitnessPlan,
              payload?.nutritionMealPlan,
              payload?.groupedQuestionaryData,
              payload?.prePostQuestionaryData,
              language
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
