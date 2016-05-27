﻿window.CCounter = 0;
CKEDITOR.dialog.add("eqneditorDialog", function(b) {
    var c = "https:" == document.location.protocol ? "https://" : "http://";
    window.CCounter++;
    return {
        title: b.lang.eqneditor.title,
        minWidth: 550,
        minHeight: 380,
        resizable: CKEDITOR.DIALOG_RESIZE_NONE,
        contents: [{
            id: "CCEquationEditor",
            label: "EqnEditor",
            elements: [{
                type: "html",
                html: '<div id="CCtoolbar' + window.CCounter + '"></div>',
                style: "margin-top:-9px"
            }, {
                type: "html",
                html: '<label for="CClatex' + window.CCounter + '">Equation (LaTeX):</label>'
            }, {
                type: "html",
                html: '<textarea id="CClatex' +
                    window.CCounter + '" rows="5"></textarea>',
                style: "border:1px solid #8fb6bd; width:540px; font-size:16px; padding:5px; background-color:#ffc"
            }, {
                type: "html",
                html: '<label for="CCequation' + window.CCounter + '">Preview:</label>'
            }, {
                type: "html",
                html: '<div style="position:absolute; left:5px; bottom:0; z-index:999"><a href="http://www.codecogs.com" target="_blank"><img src="' + c + 'latex.codecogs.com/images/poweredbycc.gif" alt="Powered by CodeCogs" style="vertical-align:-4px; border:none"/></a> &nbsp; <a href="http://www.codecogs.com/latex/about.php" target="_blank">About</a> | <a href="http://www.codecogs.com/latex/popup.php" target="_blank">Install</a> | <a href="http://www.codecogs.com/pages/forums/forum_view.php?f=28" target="_blank">Forum</a> | <a href="http://www.codecogs.com" target="_blank">CodeCogs</a> &copy; 2007-2014</div><img id="CCequation' +
                    window.CCounter + '" src="' + c + 'www.codecogs.com/images/spacer.gif" />'
            }]
        }],
        onLoad: function() {
            EqEditor.embed("CCtoolbar" + window.CCounter, "", "efull");
            EqEditor.add(new EqTextArea("CCequation" + window.CCounter, "CClatex" + window.CCounter), !1)
        },
        onShow: function() {
            var a = b.getSelection().getStartElement().getAscendant("img", !0);
            a && (a = a.getAttribute("src").match(/(gif|svg)\.latex\?(.*)/), null != a && EqEditor.getTextArea().setText(a[2]), this.insertMode = !0);
            this.setupContent(this.image)
        },
        onOk: function() {
            var a = document.createElement("div");
            var text =  '<div id="text">'+ EqEditor.getTextArea().getLaTeX() +'</div>';
            a.setAttribute("id","test");
            // a.setAttribute("src", EqEditor.getTextArea().exportEquation("urlencoded"));
            console.log(a);
            // b.insertElement("\\("+EqEditor.getTextArea().getLaTeX()+"\\)");
            Example.add_history(EqEditor.getTextArea().getLaTeX());
            // CKEDITOR.instances[b['name']].setData(text);
            CKEDITOR.instances[b['name']].insertText("\\("+EqEditor.getTextArea().getLaTeX()+"\\)");
        }
    }
});