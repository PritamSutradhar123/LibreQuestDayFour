/*:
 * @plugindesc Custom Quest Log for CCC Training Objectives (Auto-Wrap Version).
 * @help Use $gameVariables.setNote(id) in a script call to set Variable 1.
 */

(function() {
    // Blueprint for the variable function
    Game_Variables.prototype.setNote = function(id) {
        var note = "";
        switch (id) {
            // --- EMAIL & DATA OPERATIONS ---
            case 1: note = "EMAIL: Deleted e-mails are usually stored for a defined time in the Trash Folder."; break;
            case 2: note = "SPREADSHEET: An absolute cell reference in a spreadsheet is represented as $A$3."; break;
            case 3: note = "DATA: The checking operation performed on input data is called Validation of data."; break;
            case 4: note = "ATM: ATM stands for Automated Teller Machine."; break;
            case 5: note = "HYPERLINKS: Hyperlink options in LibreOffice Writer include Internet, Mail, Document, and New Document."; break;
            case 6: note = "IMPRESS: The Zoom option in LibreOffice Impress appears on the Status bar."; break;
            case 7: note = "BANKING: HSBC was the first bank to introduce the ATM machine in India."; break;
            case 8: note = "CLOUD: In Cloud Computing, 'SaaS' stands for Software as a Service."; break;
            case 9: note = "EXPORT: Presentations in LibreOffice Impress can be exported as PDF, BMP, and GIF formats."; break;
            case 10: note = "HTML: HTML stands for Hyper Text Markup Language."; break;

            // --- TECHNOLOGY & SIGNATURES ---
            case 11: note = "LEARNING: The 'e' in 'e-Learning' stands for Electronic."; break;
            case 12: note = "DFT: DFT stands for Digital Financial Tools."; break;
            case 13: note = "SECURITY: To digitally sign a document in LibreOffice Writer, use the File menu."; break;
            case 14: note = "IT: A Kiosk is a small physical structure with a computer and screen for public information."; break;
            case 15: note = "ABBREVIATIONS: HTTP is Hypertext Transfer Protocol and USB is Universal Serial Bus."; break;
            case 16: note = "FORMATTING: Page numbers can be inserted in both the Header and Footer."; break;
            case 17: note = "TEXT: A line given above a text is called an Over line (or overbar/overscore)."; break;
            case 18: note = "SHORTCUT: Use Shift+F11 for a new style in LibreOffice Writer."; break;
            case 19: note = "HARDWARE: HDMI is for Visual Display, and a Mouse is a Pointing Device."; break;
            case 20: note = "IFSC: IFSC stands for Indian Financial System Code."; break;

            // --- WRITER & CALC SHORTCUTS ---
            case 21: note = "TOOLS: The Word Count option in LibreOffice Writer is found in the Tools menu."; break;
            case 22: note = "CALC: The average of (2, 6, 7) in LibreOffice Calc is 5."; break;
            case 23: note = "HYPERLINK: The shortcut key for a Hyperlink is Ctrl+k."; break;
            case 24: note = "SOCIAL: Mark Zuckerberg is the CEO of Facebook."; break;
            case 25: note = "SHORTCUT: The shortcut key to use Heading-2 is Ctrl+2."; break;
            case 26: note = "NETWORK: The default network mask for Class A is 255.0.0.0."; break;
            case 27: note = "SECURITY: One Time Passwords (OTP) are safe because they are different for every access."; break;
            case 28: note = "CALC: Comments in LibreOffice Calc can be edited, shown, and deleted."; break;
            case 29: note = "MODEM: A Modem is required to connect a computer to the internet."; break;
            case 30: note = "EMAIL: A file attached to an email is called an attachment."; break;

            // --- SPREADSHEETS & TWITTER ---
            case 31: note = "RANGE: The cell reference for the range B2 to F15 is written as B2:F15."; break;
            case 32: note = "FILTER: The shortcut key to Auto Filter in LibreOffice Calc is CTRL+Shift+L."; break;
            case 33: note = "WORKBOOK: A collection of worksheets is called a Workbook."; break;
            case 34: note = "DELETE: Use Ctrl + (Minus) to delete a cell in LibreOffice Calc."; break;
            case 35: note = "TWITTER: A Twitter text posted as a Tweet can be 280 characters in length."; break;
            case 36: note = "DATE: Use the =TODAY() function to enter the current date in LibreOffice Calc."; break;
            case 37: note = "NAME BOX: The address of the active cell is displayed in the Name Box."; break;
            case 38: note = "W3C: W3C stands for World Wide Web Consortium."; break;
            case 39: note = "CHARTS: To bring a chart, use the Insert -> Chart option."; break;
            case 40: note = "HIGHLIGHT: Use Ctrl+F8 to highlight a value in LibreOffice Calc."; break;

            // --- PASSWORDS & PORTS ---
            case 41: note = "EDIT: Use Ctrl+End to reach the last edited cell in LibreOffice Calc."; break;
            case 42: note = "PASSWORD: A good password contains case-sensitive alphabets, numbers, and alphanumeric characters."; break;
            case 43: note = "HANDLE: The small black square in the corner of an active cell is the Fill handle."; break;
            case 44: note = "CREDIT: In Credit Cards, APR stands for Annual Percentage Rate."; break;
            case 45: note = "PAINT: The BMP file extension indicates a file created in Paint."; break;
            case 46: note = "COMMENT: The shortcut key to comment in LibreOffice Writer is Ctrl+Alt+C."; break;
            case 47: note = "PORT: The port number for SMTP is 25."; break;
            case 48: note = "AVERAGE: The output of =AVERAGE(10, 20, 30) in Calc is 20."; break;
            case 49: note = "REMOTE: The 'Open Remote' option in LibreOffice Writer is located in the File menu."; break;
            case 50: note = "POST: POST (Power On Self Test) is located in the ROM."; break;

            default: note = "System error: Note ID " + id + " not found."; break;
        }

        // --- AUTOMATIC WRAPPER LOGIC ---
        function wrapText(str) {
            var maxLength = 45; // Max characters per line for the default window
            var words = str.split(' ');
            var currentLine = '';
            var finalOutput = '';

            for (var i = 0; i < words.length; i++) {
                if ((currentLine + words[i]).length <= maxLength) {
                    currentLine += (currentLine === '' ? '' : ' ') + words[i];
                } else {
                    finalOutput += currentLine + '\n';
                    currentLine = words[i];
                }
            }
            return finalOutput + currentLine;
        }

        // Apply wrap and save to Variable 1
        var wrappedNote = wrapText(note);
        this.setValue(1, wrappedNote); // Sets \V[1]
    };
})();