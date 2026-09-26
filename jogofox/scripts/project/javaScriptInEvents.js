

const scriptsInEvents = {

	async FolhaDeEventos1_Event9_Act2(runtime, localVars)
	{
		const score = runtime.globalVars.score;
		runtime.globalVars.score = score + 1;
	},

	async FolhaDeEventos1_Event14_Act1(runtime, localVars)
	{
		const atual = runtime.globalVars.score;
		const recorde = runtime.globalVars.recorde;
		if (atual > recorde) {
		    localStorage.setItem("foxrun_highscore", atual.toString());
		    runtime.globalVars.recorde = atual;
		}
	},

	async FolhaDeEventos1_Event21_Act1(runtime, localVars)
	{
		const saved = localStorage.getItem("foxrun_highscore");
		runtime.globalVars.recorde = saved ? parseInt(saved, 10) : 0;
	},

	async FolhaDeEventos1_Event19_Act1(runtime, localVars)
	{
		const atual = runtime.globalVars.score;
		const recorde = runtime.globalVars.recorde;
		if (atual > recorde) {
		    localStorage.setItem("foxrun_highscore", atual.toString());
		    runtime.globalVars.recorde = atual;
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
