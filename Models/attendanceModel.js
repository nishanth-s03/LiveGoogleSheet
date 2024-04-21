const mssql = require('mssql');
const dotenv = require('dotenv');

dotenv.config();

async function getAttendanceData(){
    const connection = await mssql.connect(process.env.CONNECTION_STRING);

    try {
        const result = await connection.query(`
            SELECT 
                employeeId,
                MIN(inTime) as firstInTime,
                MAX(outTime) as lastOutTime,
                date
            FROM TBL_ATTENDANCE
            GROUP BY employeeId, date
            ORDER BY date DESC`);

        return result.recordset;
    } catch (error) {
        throw error;
    } finally {
        await connection.close();
    }
}

module.exports ={ getAttendanceData };