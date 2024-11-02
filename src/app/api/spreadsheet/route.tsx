import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

export async function POST(req: Request, res: Response) {
  if (req.method !== "POST") {
    return new Response("Only POST requests allowed", { status: 405 });
  }
  const body: Step1FormType = await req.json();

  if (!body) {
    return new Response("No request body", { status: 400 });
  }

  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEET_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(
      "1qwSJsBnQK-ECuThLd_Lm41cGAmd_OmJV8ozRFOjqh1A",
      serviceAccountAuth,
    );
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    console.log("Body", req.body);

    await sheet.addRow({
      "Full Name": body.name,
      "Phone Number": body.number,
      "Email Address": body.email,
      "Internship Role": body.internship_role,
      "Experience Level": body.experience_level,
      Question: body.question,
      "How do you hear about us": body.hear_about_us,
    });

    return Response.json({
      status: 200,
      message: "success",
    });
  } catch (error) {
    console.log(error);
    return new Response(
      error instanceof Error ? error.message : "Something went wrong",
      { status: 500 },
    );
  }
}

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return new Response("Only POST requests allowed", { status: 405 });
//   }
//   const body = req.body as Step1FormType;

//   try {
//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_SHEET_PRIVATE_KEY?.replace(
//           /\\n/g,
//           "\n",
//         ),
//       },
//       scopes: [
//         "https://www.googleapis.com/auth/drive",
//         "https://www.googleapis.com/auth/drive.file",
//         "https://www.googleapis.com/auth/spreadsheets",
//       ],
//     });

//     const sheet = google.sheets({ version: "v4", auth });
//     const response = await sheet.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEET_SPREADSHEET_ID,
//       range: "Sheet1!A1:G1",
//       valueInputOption: "USER_ENTERED",
//       requestBody: {
//         values: [
//           [
//             body.name,
//             body.number,
//             body.email,
//             body.internship_role,
//             body.experience_level,
//             body.question,
//             body.hear_about_us,
//           ],
//         ],
//       },
//     });

//     console.log("Sheet res, ", response);

//     return Response.json({
//       data: response.data,
//       status: 200,
//       message: "success",
//     });
//   } catch (error) {
//     console.log(error);
//     return new Response(
//       error instanceof Error ? error.message : "Something went wrong",
//       { status: 500 },
//     );
//   }
// }
