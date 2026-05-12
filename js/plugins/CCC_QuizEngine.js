/*:
 * @plugindesc CCC Quiz Engine - Complete 50 MCQ Logic.
 * @help 1. Use $gameVariables.askQuestion(id) to load data.
 * 2. Use \V[2] for Question, \V[4]-\V[7] for Choices.
 * 3. Variable #3 stores the Correct Answer Index (1-4).
 * 4. Variable #16 stores the Correct Answer Text (String).
 */

(function() {
    Game_Variables.prototype.askQuestion = function(id) {
        var q = "", a = "", b = "", c = "", d = "", ans = 0;

        switch (id) {
            case 1:
                q = "Deleted e-mails are usually stored for defined time at the:";
                a = "Starred Folder"; b = "Trash Folder"; c = "Draft Folder"; d = "None of these";
                ans = 2; break; 
            case 2:
                q = "In a computer spreadsheet, absolute cell reference can be represented as:";
                a = "A3"; b = "$A$3"; c = "A$3"; d = "$A3";
                ans = 2; break; 
            case 3:
                q = "The checking operation performed on input data is called the:";
                a = "Validation of data"; b = "Verification of data"; c = "Cross check"; d = "Control of data";
                ans = 1; break; 
            case 4:
                q = "ATM means:";
                a = "Any Time Money"; b = "Auto Truck of Mahindra"; c = "Automated teller Machine"; d = "None of these";
                ans = 3; break; 
            case 5:
                q = "Which displays the options available in hyperlinks in LibreOffice Writer?";
                a = "Place in the document, new document"; b = "Place in the internt, mail, document"; c = "Internet Mail, Document, New Document"; d = "Internet mail, Document";
                ans = 3; break; 
            case 6:
                q = "Where does the Zoom option appear in LibreOffice Impress?";
                a = "Title bar"; b = "Menu bar"; c = "Status bar"; d = "Task bar";
                ans = 3; break; 
            case 7:
                q = "Which bank was introduced first ATM machine in India?";
                a = "RBI"; b = "HSBC"; c = "PNB"; d = "ICICI bank";
                ans = 2; break; 
            case 8:
                q = "In Cloud Computing 'SaaS' full form is?";
                a = "Security as a Service"; b = "Software as a Service"; c = "System as a Service"; d = "Storage as a Service";
                ans = 2; break; 
            case 9:
                q = "Any presentation in LibreOffice Impress can be exported in:";
                a = "PDF"; b = "BMP"; c = "GIF"; d = "All of these";
                ans = 4; break; 
            case 10:
                q = "What is the full form of HTML?";
                a = "Hyper Text Markup Language"; b = "Hyper Text Marginal Language"; c = "High Talent Marks Language"; d = "Hyper Talent Marks Language";
                ans = 1; break; 
            case 11:
                q = "'e' in 'e-Learning' stands for:";
                a = "Electrical"; b = "Electronic"; c = "Easy"; d = "Everywhere";
                ans = 2; break; 
            case 12:
                q = "DFT full form is?";
                a = "Digital financial tools"; b = "digital files tools"; c = "dynamic financial tools"; d = "none";
                ans = 1; break; 
            case 13:
                q = "Digital sign a document in LibreOffice Writer menu option is in:";
                a = "File"; b = "Edit"; c = "Insert"; d = "Tools";
                ans = 1; break; 
            case 14:
                q = "A small physical structure with a computer and screen in public areas is:";
                a = "Mobile"; b = "Kiosks"; c = "Education"; d = "Hotel management";
                ans = 2; break; 
            case 15:
                q = "Match the following: 1.HTTP, 2.URL, 3.USB, 4.Internet";
                a = "1-ii, 2-iii, 3-i, 4-iv"; b = "1-iv, 2-ii, 3-i, 4-iii"; c = "1-ii, 2-iv, 3-i, 4-iii"; d = "1-i, 2-ii, 3-iii, 4-iv";
                ans = 3; break; 
            case 16:
                q = "We can insert a page number at:";
                a = "Footer"; b = "Header"; c = "Both A and B"; d = "None of the above";
                ans = 3; break; 
            case 17:
                q = "What is the line given above a text?";
                a = "Below line"; b = "Over line"; c = "Up line"; d = "Upper line";
                ans = 2; break; 
            case 18:
                q = "Which shortcut key do you use for the new style in Writer?";
                a = "Shift+F12"; b = "Ctrl+F11"; c = "Ctrl+shift+F11"; d = "Shift+F11";
                ans = 4; break; 
            case 19:
                q = "Match the following: 1.VGA/HDMI, 2.Mouse, 3.SSD, 4.RAM";
                a = "1-ii, 2-i, 3-iv, 4-iii"; b = "1-i, 2-ii, 3-iv, 4-iii"; c = "1-ii, 2-iv, 3-i, 4-iii"; d = "1-iv, 2-i, 3-ii, 4-iii";
                ans = 1; break; 
            case 20:
                q = "What is the full form of IFSC?";
                a = "Indian Financial System Code"; b = "Internet Financial System Code"; c = "Information Financial System Code"; d = "None";
                ans = 1; break; 
            case 21:
                q = "Which menu has the Word Count option in LibreOffice Writer?";
                a = "Tools"; b = "Insert"; c = "Format"; d = "Edit";
                ans = 1; break; 
            case 22:
                q = "Libre office calc average (2,6,7):";
                a = "9"; b = "3"; c = "5"; d = "6";
                ans = 3; break; 
            case 23:
                q = "What is the shortcut key for a Hyperlink?";
                a = "Ctrl+Shift+D"; b = "Ctrl+k"; c = "Ctrl+S"; d = "None of these";
                ans = 2; break; 
            case 24:
                q = "CEO of the Facebook is:";
                a = "Mark Zuckerberg"; b = "Mark Saverin"; c = "Dustin Biden"; d = "None of the above";
                ans = 1; break; 
            case 25:
                q = "What will be the shortcut key to use Heading-2?";
                a = "Ctrl+4"; b = "Ctrl+2"; c = "Ctrl+3"; d = "Ctrl+1";
                ans = 2; break; 
            case 26:
                q = "Which is default network mask for class A?";
                a = "255.0.0.0"; b = "255.255.0.0"; c = "255.255.255.0"; d = "255.255.255.255";
                ans = 1; break; 
            case 27:
                q = "Why is one time password safe?";
                a = "Easy to generate"; b = "Not sharable"; c = "Different for every access"; d = "Encrypted password";
                ans = 3; break; 
            case 28:
                q = "Comments in LibreOffice Calc can be:";
                a = "Edited"; b = "Shown"; c = "Deleted"; d = "All the above";
                ans = 4; break; 
            case 29:
                q = "Which device is required to connect a computer to the internet?";
                a = "Pen Drive"; b = "Mouse"; c = "Memory"; d = "Modem";
                ans = 4; break; 
            case 30:
                q = "The file attached to an email is called the:";
                a = "attachment"; b = "content"; c = "subject"; d = "BCC";
                ans = 1; break; 
            case 31:
                q = "The cell reference in a spreadsheet for cell range B2 to F15 is:";
                a = "B2.F15"; b = "B2;F15"; c = "B2:F15"; d = "B2-F15";
                ans = 3; break; 
            case 32:
                q = "Shortcut key for Auto Filter in Libre Calc";
                a = "CTRL+Shift+L"; b = "CTRL+Shift+A"; c = "CTRL+Shift+F"; d = "CTRL+Shift+K";
                ans = 1; break; 
            case 33:
                q = "A collection of worksheets is called as:";
                a = "Excel Sheets"; b = "Workbook"; c = "Excel Worksheets"; d = "Excel Book";
                ans = 2; break; 
            case 34:
                q = "What is the shortcut key to delete a cell in LibreOffice Calc?";
                a = "Ctrl++"; b = "Backspace"; c = "Ctrl -"; d = "Delete Key";
                ans = 3; break; 
            case 35:
                q = "Twitter text posted as Tweet can be of length:";
                a = "140"; b = "240"; c = "260"; d = "280";
                ans = 4; break; 
            case 36:
                q = "Which function is used to enter the current date in Calc?";
                a = "=NOW()"; b = "=DATE()"; c = "=TODAY()"; d = "=TIME()";
                ans = 3; break; 
            case 37:
                q = "The address of the active cell is displayed in:";
                a = "formula bar"; b = "active box"; c = "name box"; d = "active cell itself";
                ans = 3; break; 
            case 38:
                q = "What is the full form of W3C?";
                a = "World Wide Web Corporation"; b = "World Wide Web Community"; c = "World Wide Web Consortium"; d = "World Wide Web Council";
                ans = 3; break; 
            case 39:
                q = "Which of the following option is used to print a chart?";
                a = "Insert -> Chart"; b = "File -> View"; c = "File -> Print"; d = "View -> Chart";
                ans = 1; break; 
            case 40:
                q = "Which shortcut key do you use to highlight a value in Calc?";
                a = "Ctrl+F8"; b = "Ctrl+F6"; c = "Ctrl+L"; d = "Ctrl+F1";
                ans = 1; break; 
            case 41:
                q = "Shortcut key used for reach to last edit cell in Calc?";
                a = "Ctrl+Home"; b = "Ctrl+End"; c = "Ctrl+H"; d = "Alt+Ctrl+O";
                ans = 2; break; 
            case 42:
                q = "A good password must contain:";
                a = "Capital and small alphabets"; b = "Atleast one number"; c = "Atleast one alphanumeric"; d = "All of these";
                ans = 4; break; 
            case 43:
                q = "What is the black square in the lower-right corner of active cell?";
                a = "Copy handle"; b = "Fill handle"; c = "Insert handle"; d = "Border";
                ans = 2; break; 
            case 44:
                q = "What is APR in Credit Card?";
                a = "Annual Percentage Rate"; b = "Annual Processing Rate"; c = "Auto Percentage Rate"; d = "Auto Processing Rate";
                ans = 1; break; 
            case 45:
                q = "Which file extensions indicate file created in Paint?";
                a = "BMP"; b = "DOC"; c = "STK"; d = "PPT";
                ans = 1; break; 
            case 46:
                q = "What is the shortcut key to comment in Writer?";
                a = "Ctrl+Shift+C"; b = "Ctrl+Shift+U"; c = "Ctrl+Alt+M"; d = "Ctrl+Alt+C";
                ans = 1; break; 
            case 47:
                q = "What is the port number of SMTP?";
                a = "20"; b = "25"; c = "22"; d = "21";
                ans = 2; break; 
            case 48:
                q = "Calc = AVERAGE(10, 20, 30)";
                a = "60"; b = "20"; c = "10"; d = "30";
                ans = 2; break; 
            case 49:
                q = "Which menu has the option of open remote in Writer?";
                a = "Edit"; b = "View"; c = "File"; d = "Format";
                ans = 3; break; 
            case 50:
                q = "Where is POST located?";
                a = "DRAM"; b = "Hard-drive"; c = "RAM"; d = "ROM";
                ans = 4; break; 

            default:
                q = "System Error: Missing Data for Question " + id;
                a = "-"; b = "-"; c = "-"; d = "-"; break;
        }

        var correctStr = "";
        if (ans === 1) correctStr = a;
        if (ans === 2) correctStr = b;
        if (ans === 3) correctStr = c;
        if (ans === 4) correctStr = d;

        this.setValue(2, q);
        this.setValue(3, ans);
        this.setValue(4, a);
        this.setValue(5, b);
        this.setValue(6, c);
        this.setValue(7, d);
        
        $gameVariables.setValue(16, String(correctStr));
    };
})();