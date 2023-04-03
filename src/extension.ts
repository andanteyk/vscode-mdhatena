// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	//console.log('Congratulations, your extension "vscode-mdhatena" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-mdhatena.mdhatena', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		//vscode.window.showInformationMessage('Hello World from vscode-mdhatena!');

		let textEditor = vscode.window.activeTextEditor;
		if (!textEditor) {
			return;
		}

		let fullText = textEditor.document.getText();

		fullText = fullText.replace(/\$\$((.*\r?\n)*?)\$\$/gm, '<div align="center">[tex:$1]</div>');
		fullText = fullText.replace(/\$(.*?)\$/gm, '[tex:$1]');
		fullText = fullText.replace(/\r?\n/gm, '  \n');
		fullText = fullText.replace(/```(.*?)  /gm, '```$1');

		vscode.env.clipboard.writeText(fullText);
		vscode.window.showInformationMessage("copied!");
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }



function findAndReplace(editor: vscode.TextEditor, query: string | RegExp, replaceWith: string) {
	let fullText = editor.document.getText();

	// to write
	editor.edit(editBuilder => {
		editBuilder.replace(new vscode.Range(editor.document.positionAt(0), editor.document.positionAt(editor.document.getText().length)),
			fullText.replace(query, replaceWith));
	});
}
