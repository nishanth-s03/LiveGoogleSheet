const { updateGoogleSheet } = require('./updateExcelController.js');

async function liveExcel(){
    setInterval(async () => {
        try{
            await updateGoogleSheet();
        } catch(err){
            console.log(err);
        }
    },1000);
}

module.exports = { liveExcel };