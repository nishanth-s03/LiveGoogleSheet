const { google } = require('googleapis');
const moment = require('moment');
const { getAttendanceData } = require('../Models/attendanceModel.js');

const CREDENTIALS = require('../credentials.json');//GET YOUR CREDENTIALS.json FROM GOOGLE DEVELOPER CONSOLE
const SHEET_ID = 'SHEET_ID';//GET YOUR SHEET ID FROM GOOGLE SHEETS URL

const  auth = new google.auth.GoogleAuth({
    credentials: CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

async function updateGoogleSheet() {
    const sheets = google.sheets({ version: 'v4', auth });

    let attendanceData = await getAttendanceData();

    attendanceData.sort((a, b) => new Date(b.date) - new Date(a.date));

    const values = [];
    let currentDate = null;

    values.push(['NONE'])
    values.push(['Attendance Data']);

    attendanceData.forEach(row => {
        if (!moment(row.date).isSame(currentDate, 'day')) {
            values.push(['','','','']);
            currentDate = moment(row.date);
            values.push([currentDate.format('YYYY-MM-DD'),'','','']);
            values.push(['Employee ID', 'First In', 'Last Out', 'Date']);
        }

        values.push([
            row.employeeId,
            row.firstInTime.toISOString().split("T")[1].split(".")[0],
            row.lastOutTime.toISOString().split("T")[1].split(".")[0],
            row.date.toISOString().split("T")[0].split(".")[0]
        ]);
    });

    return new Promise((resolve, reject) => {
        sheets.spreadsheets.values.update({
            spreadsheetId: SHEET_ID,
            range: 'Sheet1!A1:D',
            valueInputOption: 'RAW',
            resource: {
                values
            }
        }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = { updateGoogleSheet };