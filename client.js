const path = require("path");
const request = require("request");
const http = require("http");
const https = require("https");
const fs = require('fs').promises;
const { existsSync } = require("fs");
const CACHE_PATH = path.join(__dirname, "assets");

const INDEX_SCRIPTS = [

// Begin CECL Changes

// Begin DBC

"ee7c382d9257652a88c8f7b7f22a994d.png",
"0.2d737cc92c807c265e1f.css",
"07dca80a102d4149e9736d4b162cff6f.ico",
"e1180c171e5a54377584.js",
"07ca8d15cc9ad4ffc0f6.js",
"c05bdc0c5c3c90e28c77.js",
"7288c77130c62ff8aa82.js",

// End DBC

// Begin DBC Devel

"0.e470f204037b26bc4ad8.css",
"07dca80a102d4149e9736d4b162cff6f.ico",
"366619ca708365b1c67d.js",
"734c47e42d1b66186446.js",
"61a1c562490b1ff488d9.js",

// End DBC Devel

// Begin LBC


"652f40427e1f5186ad54836074898279.png",
"0.59403e9789b2d9095785.css",
"ec2c34cadd4b5f4594415127380a85e6.ico",
"d170d5b12b302f315912.js",
"35e0115547d406ec0d20.js",
"be358c929d9afee6527f.js",
"ac07c15f13e50948a1b2.js",

// End LBC

// Begin LBC Devel

"532.731d70a410af04b4d0ea.css",
"07dca80a102d4149e9736d4b162cff6f.ico",
"8c5e082c1b6050a786c6.js",
"da303f345db971837ba8.js",
"56597f3659b06fd58100.js",

// End LBC Devel

// Begin FBC


"652f40427e1f5186ad54836074898279.png",
"e32fa452d05857876c40.js",
"5d8726d69bf89d6f65a4.js",
"2bca5148146ab09a0f77.js",
"d943c696a7d081165f2e.js",
"33aed1f9230e77ce76a5.js",
"fe73376921c65fff6f4e.js",
"2d7c91165c69794f7cdf.js",
"b54a8e4276f962374014.js",
"c998708f2ec84efc2b17.js",
"8732ffbaa4db766eaeda.js",
"69a837e8f0a6148f79d4.js",
"6f54cc4a3b2425499812.js",
"c4841ffd68ef18e72c74.js",
"a05494229db9db18d1fd.js",
"31f60d0eac416f549610.js",
"7ce22207b6093fa48ce2.js",
"bd23a945fc6a002b69dd.js",
"0a3326537e5ac1bd6356.js",
"903eb9637aad65df4cb9.js",
"1e81bb61bb67f1b6bcf5.js",
"ab7115a135e701df9371.js",
"fafb04913bf5f73d2b09.js",
"64d93e7b0540c2eba72a.js",
"f6fa5ff452231bc21dc5.js",
"67ff064a4a7c18371bb8.js",
"f57daf4fe1060a854601.js",
"e549da88d3c71066d7f8.js",
"0ee47e86a39a306838e1.js",
"706f50a67359776269eb.js",
"5af7770d1e301c70d1a1.js",
"79431b00de7b75a4db1e.js",
"6471a588bed23e5999a9.js",
"85a8f8ae620b3594b1f8.js",
"d59cb6ea1615700cfa3b.js",
"83095bfd363aca9d7f4f.js",
"c97fd1f307b771296da8.js",
"24d29c779cc0d0e54e30.js",
"253e9938399db795209a.js",
"af9a6f21c45a6ab373e6.js",
"873084ef44f8797f1167.js",
"c6115c96f0693a4cba36.js",
"05f07654abf35562b4cc.js",
"e9580c98baadf514cb22.js",
"d88f2aecd9b3de7e9de7.js",
"f57cda03f4a3c29d8d69.js",
"7d70ec39c61ceacf1c3b.js",
"40532.40e342277ad71b458bff.css",
"ec2c34cadd4b5f4594415127380a85e6.ico",
"8c7b444f293b0ca5719d.js",
"e32fa452d05857876c40.js",
"c5698726e0854d4b8624.js",
"bf41583d33a683460193.js",

// End FBC

// Begin FBC Devel

"532.7fbd5147ee8b816c530d.css",
"847541504914fd33810e70a0ea73177e.ico",
"4f91987a7b38426ef720.js",
"abf9b56982d2eacb4e8e.js",
"3ecba7af535756b7d6fd.js",

// End FBC Devel

// Begin SBC

"images/favicon.ico",
"shared.8a9d03170ec4492d235b.js",
"49237.6e7c3a8bc9b2c4e2af6d.css",
"99387.95f92b85cbae70815829.css",
"app.1b18c30d4e63b926cc95.js",
"24217.fbecbc1d6a974fbc777e.js",
"62734.1842567f24c7a0ab79a3.js",
"43455.8c79ce3e1753b38de4a4.js",
"10586.3f509a5d474354a36c24.js",
"64787.359c4aba4bf61ba67cc0.js",
"2797.a012718ee3dfd4179128.js",
"58661.cbedde580b7529f6272e.js",
"17764.2aa7ee221234529f6e80.js",
"84471.737ccb785af03d732d6f.js",
"70397.226bb847204914e85d62.js",
"97256.55a5561807746b35c4a1.js",
"web.b67b33baa9ade280349b.js",
"24217.fbecbc1d6a974fbc777e.js",
"62734.1842567f24c7a0ab79a3.js",
"43455.8c79ce3e1753b38de4a4.js",
"84471.737ccb785af03d732d6f.js",
"sentry.765b00e66783ff42fca1.js",

// End SBC

// Begin SBC Devel

"532.b61e550ed506bdd52a0b.css",
"847541504914fd33810e70a0ea73177e.ico",
"4b357782daec4239711055c06af93881.png",
"4b357782daec4239711055c06af93881.png",
"8c6183202d1561068d67.js",
"a9d60a77491727a9cc1a.js",
"d36c5f4215d7a9ea40f3.js",

// End SBC Devel

// End CECL Changes

];

const SCRIPTS_INDEX = [

];

const print = (x, printover = true) => {
	var repeat = process.stdout.columns - x.length;
	process.stdout.write(
		`${x}${" ".repeat(Math.max(0, repeat))}${printover ? "\r" : "\n"}`,
	);
};

async function fetch1(url) {
	return new Promise((resolve) => {
		request.get(("https://discord.com/assets/"+url), {timeout: 2022}, (err, res, body) => {
			if (res && res.statusCode && res.statusCode == 200) {
				resolve(body);
			} else if (res && res.statusCode && res.statusCode !== 200) {
				print(`${res.statusCode} on https://discord.com/assets/${url}`, false);
				resolve(fetch2(url));
			} else {
				print(`Unknown Error on https://discord.com/assets/${url}`, false);
				resolve(fetch2(url));
			}
		});
	});
}

async function fetch2(url) {
	return new Promise((resolve) => {
		request.get(("https://web.archive.org/web/0id_/https://discord.com/assets/"+url), {timeout: 2022}, (err, res, body) => {
			if (res && res.statusCode && res.statusCode == 200) {
				resolve(body);
			} else if (res && res.statusCode && res.statusCode !== 200) {
				print(`${res.statusCode} on https://web.archive.org/web/0id_/https://discord.com/assets/${url}`, false);
				resolve(fetch3(url));
			} else {
				print(`Unknown Error on https://web.archive.org/web/0id_/https://discord.com/assets/${url}`, false);
				resolve(fetch3(url));
			}
		});
	});
}

async function fetch3(url) {
	return new Promise((resolve) => {
		request.get(("https://web.archive.org/web/0id_/https://discordapp.com/assets/"+url), {timeout: 2022}, (err, res, body) => {
			if (res && res.statusCode && res.statusCode == 200) {
				resolve(body);
			} else if (res && res.statusCode && res.statusCode !== 200) {
				print(`${res.statusCode} on https://web.archive.org/web/0id_/https://discordapp.com/assets/${url}`, false);
				resolve("");
			} else {
				print(`Unknown Error on https://web.archive.org/web/0id_/https://discordapp.com/assets/${url}`, false);
				resolve("");
			}
		});
	});
}

const processFile = async (asset) => {
	asset = `${asset}${asset.includes(".") ? "" : ".js"}`;
	let text = await fetch1(asset);
	if (text == "") {
		return [];
	}
	await fs.writeFile(path.join(CACHE_PATH, asset), text);
	let ret = new Set([
		...(text.match(/(((([0-9]){5})(.*)((\.){1})(([A-Fa-f0-9]){20}))||((([A-Fa-f0-9]){20})))/g) || []),
		...[...text.matchAll(/\.exports=.\..\+"(.*?\..{0,5})"/g)].map((x) => x[1],),
		...[...text.matchAll(/\/assets\/([a-zA-Z0-9]*?\.[a-z0-9]{0,5})/g)].map((x) => x[1],),
	]);
	return [...ret].map((x) => x ? x.replace(/"/g, "") : []);

};

(async () => {
	if (!existsSync(CACHE_PATH)) {
		await fs.mkdir(CACHE_PATH, { recursive: true });
	}
	if (!existsSync(CACHE_PATH+'/images')) {
		await fs.mkdir(CACHE_PATH+'/images', { recursive: true });
	}
	const assets = new Set(INDEX_SCRIPTS);
	let promises = [];
	let index = 0;
	for (let asset of assets) {
		index += 1;
		print(`Scraping asset: ${asset} Remaining: ${assets.size - index}`);
		promises.push(processFile(asset));
		if (promises.length > 100 || index == assets.size) {
			const values = await Promise.all(promises);
			promises = [];
			values.flat().forEach((x) => assets.add(x));
		}
	}
})();
