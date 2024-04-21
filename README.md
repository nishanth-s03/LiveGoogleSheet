# 📝 Description

<p style="text-align: justify;">
  "LiveExcel" is an innovative application designed to seamlessly integrate with Google Sheets, providing real-time collaboration and data synchronization capabilities. With LiveExcel, users can effortlessly collaborate on spreadsheets, viewing changes as they occur and working together in real-time. This powerful tool enhances productivity by enabling teams to instantly access and update spreadsheet data, ensuring accuracy and efficiency in collaborative projects.
</p>


# 📖 User Manual  

## ❄ Setup 
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a project
3. Open IAM & ADMIN from Navigation
4. Go to Service Accounts
5. Create Sevice Account 
    a. Give Permissions/ Set user Role atleast as Editor
    b. Generate A Key in JSON
    c. Save that JSON as credentials.json
6. Goto API & SERVICES 
    a. Search for Google Sheets API
    b. Enable Service
    c. Create OAUTH2.0 account from Credentials Section
7. Create A Google Sheet note down **SHEET_ID**

## ❄ Installation

### In Terminal

**Run Following Commands for Installation:**
<div style="background-color: rgba(0, 0, 0, 0.8); padding: 10px; border: 1px solid #000; border-radius: 5px;">
  <p style="font-weight: bold; color: #b3c6ff;">
    $ git clone https://github.com/nishanth-s03/LiveGoogleSheet.git<br>
    $ npm i<br>
  </p>
</div>


### In VSCode / other Editor
1. Create .env file and Create **CONNECTION_STRING**
2. Create credentials.json
3. Change **SHEET_ID** in updateExcelController.js

## ❄ Lets Go...

**Running Application:**<br>
<div style="background-color: rgba(0, 0, 0, 0.8); padding: 10px; border: 1px solid #000; border-radius: 5px;">
  <p style="font-weight: bold; color: #b3c6ff;">
  $ npm run excel<br>
  </p>
</div>